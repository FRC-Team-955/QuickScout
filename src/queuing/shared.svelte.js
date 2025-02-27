import { onValue, ref, set } from "firebase/database";
import { scouterInfo } from "../state.svelte";
import { updateAsScouter } from "./scouter.svelte";
import { updateAsLead } from "./lead.svelte";
import { db } from "./firebase";

export let serverState = $state({
	connected: false,
	signedIn: false,
});

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

const connectedRef = ref(db, "connected");
onValue(connectedRef, (snap) => {
	let newVal = snap.val() || {};
	if (typeof newVal != "object") newVal = {};
	queuingState.connected = newVal;
	delete queuingState.connected["_"];
	if (scouterInfo.scouterID.length <= 2) updateAsScouter();
	else updateAsLead();
});

const queueRef = ref(db, "queue");
onValue(queueRef, (snap) => {
	let newVal = snap.val() || {};
	if (typeof newVal != "object") newVal = {};
	queuingState.queue = newVal;
	delete queuingState.queue["_"];
	if (scouterInfo.scouterID.length <= 2) updateAsScouter();
	else updateAsLead();
});

export const matchRef = ref(db, "match");
onValue(matchRef, (snap) => {
	let newVal = snap.val() || {};
	if (typeof newVal != "object") newVal = {};
	queuingState.match = newVal;
	delete queuingState.match["_"];
	queuingState.match.matchRunning = queuingState.match.matchRunning || false;
	queuingState.match.matchEnded = queuingState.match.matchEnded || false;
	queuingState.match.matchNumber = queuingState.match.matchNumber || 0;
	queuingState.match.teamAllianceColors = queuingState.match.teamAllianceColors || {};
	queuingState.match.objectiveScouters = queuingState.match.objectiveScouters || {};
	queuingState.match.subjectiveScouters = queuingState.match.subjectiveScouters || {};
	if (scouterInfo.scouterID.length <= 2) updateAsScouter();
});

export function removeFromQueue(id) {
	set(ref(db, `queue/${id}`), null);
}
