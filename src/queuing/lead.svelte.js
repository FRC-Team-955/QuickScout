import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { scouterInfo } from "../state.svelte";
import { matchRef, queuingState, serverState } from "./shared.svelte";
import { onValue, ref, set } from "firebase/database";
import { auth, db } from "./firebase";

let tryingToSignIn = false;
let updateInterval = null;
export async function tryToSignIn() {
	if (scouterInfo.scouterID.length > 2 && !tryingToSignIn && !serverState.signedIn) {
		tryingToSignIn = true;
		console.log("trying to sign in");
		await signOut(auth);
		try {
			await signInWithEmailAndPassword(auth, scouterInfo.email, scouterInfo.password);
			console.log("signed in");
			serverState.signedIn = true;
			if (updateInterval != null) clearInterval(updateInterval);
			updateInterval = setInterval(() => {
				if (serverState.connected) checkScouterConnection();
			}, 5000);
		} catch (err) {
			console.log("can't sign in", err);
			serverState.signedIn = false;
		}
		tryingToSignIn = false;
	}
}

const scouterIDMappingKey = "scouterIDMapping";

export let leadState = $state({
	matchConfig: {
		matchNumber: NaN,
		red1: NaN,
		red2: NaN,
		red3: NaN,
		blue1: NaN,
		blue2: NaN,
		blue3: NaN,
	},
	/** @type {object} */
	collectedMatchData: {},
	/** @type {{ [id: string]: string }} */
	scouterIDMapping: JSON.parse(localStorage.getItem(scouterIDMappingKey)) || {},
});

export function persistLeadState() {
	localStorage.setItem(scouterIDMappingKey, JSON.stringify(leadState.scouterIDMapping));
}

const collectedMatchDataRef = ref(db, "collectedMatchData");
onValue(collectedMatchDataRef, (snap) => {
	let newVal = snap.val() || {};
	if (typeof newVal != "object") newVal = {};
	leadState.collectedMatchData = newVal;
	delete leadState.collectedMatchData["_"];
	updateAsLead();
});

function checkScouterConnection() {
	console.log("Checking scouter connection");

	// Clear connected to make sure everyone is actually connected
	for (const id of Object.keys(queuingState.connected)) {
		set(ref(db, `connected/${id}`), false);
	}
}

export function updateAsLead() {
	console.log("Updating as lead");

	// Update queue ordering
	for (const id of Object.keys(queuingState.queue)) {
		if (queuingState.queue[id] == -1) {
			const values = Object.values(queuingState.queue);
			const highestNumber = Math.max(values.length - 1, Math.max(...values));
			set(ref(db, `queue/${id}`), highestNumber + 1);
		}
	}

	if (queuingState.match.matchRunning && queuingState.match.matchNumber.toString() in leadState.collectedMatchData) {
		let changedMatch = false;

		// Check if all data retrieved
		const scouters = Object.values(queuingState.match.objectiveScouters);
		if (
			scouters.length > 0 &&
			scouters.every(
				(teamNumber) =>
					teamNumber.toString() in leadState.collectedMatchData[queuingState.match.matchNumber.toString()],
			)
		) {
			console.log("ending match since all data retrieved");
			queuingState.match.matchRunning = false;
			changedMatch = true;
		}

		// Remove scouters that have submitted their data from the current match
		for (const id of Object.keys(queuingState.match.objectiveScouters)) {
			const teamNumber = queuingState.match.objectiveScouters[id];
			if (teamNumber.toString() in leadState.collectedMatchData[queuingState.match.matchNumber.toString()]) {
				console.log("removing " + id);
				delete queuingState.match.objectiveScouters[id];
				changedMatch = true;
			}
		}

		if (changedMatch) set(matchRef, queuingState.match);
	}
}

export function startMatch() {
	if (
		Object.keys(queuingState.queue).length < 6 &&
		!confirm(
			"There are less than six people in the queue. Are you sure you want to start a match? Not all teams will be scouted.",
		)
	)
		return;

	const idsForMatch = Object.entries(queuingState.queue)
		// Sort by number (value)
		.sort((a, b) => a[1] - b[1])
		// Map to ID (key)
		.map((val) => val[0])
		// Get top six people
		.slice(0, 6);
	queuingState.match.matchNumber = leadState.matchConfig.matchNumber;

	queuingState.match.teamAllianceColors = {};
	const redTeamNumbers = [leadState.matchConfig.red1, leadState.matchConfig.red2, leadState.matchConfig.red3];
	const blueTeamNumbers = [leadState.matchConfig.blue1, leadState.matchConfig.blue2, leadState.matchConfig.blue3];
	for (const team of redTeamNumbers) queuingState.match.teamAllianceColors[team] = "red";
	for (const team of blueTeamNumbers) queuingState.match.teamAllianceColors[team] = "blue";

	queuingState.match.objectiveScouters = {};
	const teamNumbers = [...redTeamNumbers, ...blueTeamNumbers];
	let i = 0;
	for (const id of idsForMatch) {
		queuingState.match.objectiveScouters[id] = teamNumbers[i];
		i++;
		set(ref(db, `queue/${id}`), null);
	}

	queuingState.match.matchEnded = false;
	queuingState.match.matchRunning = true;
	set(matchRef, queuingState.match);
}

export function signalMatchEnded() {
	queuingState.match.matchEnded = true;
	set(matchRef, queuingState.match);
}

export function forceEndMatch() {
	queuingState.match.matchRunning = false;
	set(matchRef, queuingState.match);
}
