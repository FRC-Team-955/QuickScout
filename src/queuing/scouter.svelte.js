import { ref, set } from "firebase/database";
import { appState, matchData, scouterInfo, setUIState } from "../state.svelte";
import { queuingState } from "./shared.svelte";
import { db } from "./firebase";

const isInMatchKey = "isInMatch";
const matchEndSignaledKey = "matchEndSignaled";

export let scouterState = $state({
	isInOnlineMatch: JSON.parse(localStorage.getItem(isInMatchKey)) || false,
	matchEndSignaled: JSON.parse(localStorage.getItem(matchEndSignaledKey)) || false,
});

export function persistScouterState() {
	localStorage.setItem(isInMatchKey, JSON.stringify(scouterState.isInOnlineMatch));
	localStorage.setItem(matchEndSignaledKey, JSON.stringify(scouterState.matchEndSignaled));
}

export function updateAsScouter() {
	console.log("Updating as scouter");

	// Say we're connected
	if (!(scouterInfo.scouterID in queuingState.connected) || !queuingState.connected[scouterInfo.scouterID]) {
		set(ref(db, `connected/${scouterInfo.scouterID}`), true);
	}

	// If we're in the current match, start scouting
	if (queuingState.match.matchRunning) {
		if (scouterInfo.scouterID in queuingState.match.objectiveScouters) {
			if (appState.uiState != "match") {
				scouterState.isInOnlineMatch = true;
				matchData.metadata.matchNumber = queuingState.match.matchNumber;
				matchData.metadata.teamNumber = queuingState.match.objectiveScouters[scouterInfo.scouterID];
				matchData.metadata.alliance = queuingState.match.teamAllianceColors[matchData.metadata.teamNumber];
				setUIState("match");
				appState.matchState = "prematch";
			}
			scouterState.matchEndSignaled = queuingState.match.matchEnded;
			persistScouterState();
		}
	}
}

export function joinQueue() {
	set(ref(db, `queue/${scouterInfo.scouterID}`), -1);
}

export function exportData(data, onSuccess, onError) {
	set(ref(db, `collectedMatchData/${matchData.metadata.matchNumber}/${matchData.metadata.teamNumber}`), data)
		.then(() => {
			onSuccess();
			scouterState.isInOnlineMatch = false;
			scouterState.matchEndSignaled = false;
			persistScouterState();
		})
		.catch(() => onError());
}

export function resetMatchScouter() {
	scouterState.isInOnlineMatch = false;
	scouterState.matchEndSignaled = false;
	persistScouterState();
	setTimeout(() => location.reload(), 300);
}
