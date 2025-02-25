import { initializeApp } from "firebase/app";
import { getDatabase, onChildChanged, onDisconnect, onValue, ref, set } from "firebase/database";

import { scouterInfo, matchData, appState } from "./state.svelte";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export let serverState = $state({
	connected: false,
	signedIn: false,
});

// probably useless attempt at preventing bots from finding the config
const firebaseConfig = JSON.parse(
	atob(
		"eyJhcGlLZXkiOiJBSXphU3lEdlo1VXFsZmg" +
			"5ZTI2NUN6Sms0OFBGSmhyS0V1alQ5NzAiLC" +
			"JhdXRoRG9tYWluIjoicXVpY2tzY291dC1kN" +
			"GQxYS5maXJlYmFzZWFwcC5jb20iLCJkYXRh" +
			"YmFzZVVSTCI6Imh0dHBzOi8vcXVpY2tzY29" +
			"1dC1kNGQxYS1kZWZhdWx0LXJ0ZGIuZmlyZW" +
			"Jhc2Vpby5jb20iLCJwcm9qZWN0SWQiOiJxd" +
			"Wlja3Njb3V0LWQ0ZDFhIiwic3RvcmFnZUJ1" +
			"Y2tldCI6InF1aWNrc2NvdXQtZDRkMWEuZml" +
			"yZWJhc2VzdG9yYWdlLmFwcCIsIm1lc3NhZ2" +
			"luZ1NlbmRlcklkIjoiODI0MDY5ODk2OTkwI" +
			"iwiYXBwSWQiOiIxOjgyNDA2OTg5Njk5MDp3" +
			"ZWI6YjE1Y2ZiZjBjOTFhYzIxMTFiYTcwZiJ9",
	),
);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const databaseConnectedRef = ref(db, ".info/connected");
onValue(databaseConnectedRef, (snap) => {
	if (snap.val() === true) {
		console.log("connected");
		serverState.connected = true;
	} else {
		console.log("not connected");
		serverState.connected = false;
	}
});

let tryingToSignIn = false;
let updateInterval = null;
export async function signIn() {
	if (scouterInfo.scouterID.length > 2 && !tryingToSignIn) {
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

const collectedMatchDataKey = "collectedMatchData";
const scouterIDMappingKey = "scouterIDMapping";

export let queuingState = $state({
	/** @type {{ [id: string]: boolean }} */
	connected: {},
	/** @type {{ [id: string]: number }} */
	queue: {},
	match: {
		// See onValue(matchRef) for defaults
		matchRunning: false,
		matchEnded: false,
		matchNumber: 0,
		/** @type {{ [team: number]: "red" | "blue" }} */
		teamAllianceColors: {},
		/** @type {{ [id: string]: number }} */
		objectiveScouters: {},
		/** @type {{ [id: string]: number }} */
		subjectiveScouters: {},
	},
});

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
	/** @type {[typeof matchData | { metadata: { scouterID: string } }]} */
	collectedMatchData: JSON.parse(localStorage.getItem(collectedMatchDataKey)) || [],
	/** @type {{ [id: string]: string }} */
	scouterIDMapping: JSON.parse(localStorage.getItem(scouterIDMappingKey)) || {},
});

export async function persistLeadState() {
	localStorage.setItem(collectedMatchDataKey, JSON.stringify(leadState.collectedMatchData));
	localStorage.setItem(scouterIDMappingKey, JSON.stringify(leadState.scouterIDMapping));
}

const connectedRef = ref(db, "connected");
onValue(connectedRef, (snap) => {
	queuingState.connected = snap.val() || {};
	delete queuingState.connected["_"];
	if (scouterInfo.scouterID.length <= 2) updateAsScouter();
	else updateAsLead();
});

const queueRef = ref(db, "queue");
onValue(queueRef, (snap) => {
	queuingState.queue = snap.val() || {};
	delete queuingState.queue["_"];
	if (scouterInfo.scouterID.length <= 2) updateAsScouter();
	else updateAsLead();
});

const matchRef = ref(db, "match");
onValue(matchRef, (snap) => {
	queuingState.match = snap.val() || {};
	delete queuingState.match["_"];
	queuingState.match.matchRunning = queuingState.match.matchRunning || false;
	queuingState.match.matchEnded = queuingState.match.matchEnded || false;
	queuingState.match.matchNumber = queuingState.match.matchNumber || 0;
	queuingState.match.teamAllianceColors = queuingState.match.teamAllianceColors || {};
	queuingState.match.objectiveScouters = queuingState.match.objectiveScouters || {};
	queuingState.match.subjectiveScouters = queuingState.match.subjectiveScouters || {};
	if (scouterInfo.scouterID.length <= 2) updateAsScouter();
});

function checkScouterConnection() {
	// Clear connected to make sure everyone is actually connected
	for (const id of Object.keys(queuingState.connected)) {
		set(ref(db, `connected/${id}`), false);
	}
}

function updateAsLead() {
	console.log("Updating as lead");

	// Update queue ordering
	for (const id of Object.keys(queuingState.queue)) {
		if (queuingState.queue[id] == -1) {
			const values = Object.values(queuingState.queue);
			const highestNumber = Math.max(values.length - 1, Math.max(...values));
			set(ref(db, `queue/${id}`), highestNumber + 1);
		}
	}
}

function updateAsScouter() {
	console.log("Updating as scouter");

	// Say we're connected
	if (!(scouterInfo.scouterID in queuingState.connected) || !queuingState.connected[scouterInfo.scouterID]) {
		set(ref(db, `connected/${scouterInfo.scouterID}`), true);
	}

	// If we're in the current match, start scouting
	if (queuingState.match.matchRunning) {
		if (scouterInfo.scouterID in queuingState.match.objectiveScouters && appState.uiState != "match") {
			matchData.metadata.matchNumber = queuingState.match.matchNumber;
			matchData.metadata.teamNumber = queuingState.match.objectiveScouters[scouterInfo.scouterID];
			matchData.metadata.alliance = queuingState.match.teamAllianceColors[matchData.metadata.teamNumber];
			appState.matchState = "prematch";
			appState.uiState = "match";
		}
	}
}

export function joinQueue() {
	set(ref(db, `queue/${scouterInfo.scouterID}`), -1);
}

export function removeFromQueue(id) {
	set(ref(db, `queue/${id}`), null);
}

export function startMatch() {
	const idsForMatch = Object.keys(queuingState.queue).slice(0, 6);
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

	queuingState.match.matchRunning = true;
	set(matchRef, queuingState.match);
}

export function signalMatchEnded() {
	queuingState.match.matchEnded = true;
	set(matchRef, queuingState.match);
}
