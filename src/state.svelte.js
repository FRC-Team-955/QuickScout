const scouterIDKey = "scouterID";
const emailKey = "email";
const passwordKey = "password";

export let scouterInfo = $state({
	scouterID: localStorage.getItem(scouterIDKey) || "",
	email: localStorage.getItem(emailKey) || "",
	password: localStorage.getItem(passwordKey) || "",
});

export function persistScouterInfo() {
	localStorage.setItem(scouterIDKey, scouterInfo.scouterID);
	localStorage.setItem(emailKey, scouterInfo.email);
	localStorage.setItem(passwordKey, scouterInfo.password);
}

export let appState = $state({
	/** @type {"home" | "match"} */
	uiState: "home",
	/** @type {"setup" | "start"} */
	homeState: scouterInfo.scouterID.length >= 2 ? "start" : "setup",
	/** @type {"metadata" | "prematch" | "autonomous" | "teleop" | "endgame" | "postmatch" | "export"} */
	matchState: "metadata",
});

export function setUIState(state) {
	appState.uiState = state;
	appState.homeState = "start";
	appState.matchState = "metadata";
}

const matchDataKey = "matchData";
const scoringStateKey = "scoringState";

const defaultMatchData = {
	metadata: {
		matchNumber: null,
		teamNumber: null,
		/** @type {"red" | "blue" | null} */
		alliance: null,
	},
	prematch: {
		noShow: false,
		/** @type {"bargeSide" | "center" | "processorSide" | null} */
		startingLocation: null,
	},
	autonomous: {
		leave: false,
		coral: {
			preloaded: false,
			stationPickup: 0,
			groundIntake: 0,
			l1: 0,
			l2: 0,
			l3: 0,
			l4: 0,
			dropped: 0,
		},
		algae: {
			reefDescoreDrop: 0,
			reefDescoreTake: 0,
			groundIntake: 0,
			processor: 0,
			net: 0,
			dropped: 0,
		},
	},
	teleop: {
		coral: {
			stationPickup: 0,
			groundIntake: 0,
			l1: 0,
			l2: 0,
			l3: 0,
			l4: 0,
			dropped: 0,
		},
		algae: {
			reefDescoreDrop: 0,
			reefDescoreTake: 0,
			groundIntake: 0,
			processor: 0,
			net: 0,
			dropped: 0,
		},
	},
	endgame: {
		/** @type {"parked" | "shallowCage" | "deepCage" | null} */
		barge: null,
	},
	postmatch: {
		dead: false,
		tippedOver: false,
		card: false,
	},
};

/** @type {typeof defaultMatchData} */
export let matchData = $state(JSON.parse(localStorage.getItem(matchDataKey)) || structuredClone(defaultMatchData));

const defaultScoringState = {
	hasCoral: false,
	hasAlgae: false,
};

// This way, if the robot has a gamepiece in auto and doesn't score it before teleop the scouter and still say it's scored in teleop
/** @type {typeof defaultScoringState} */
export let scoringState = $state(
	JSON.parse(localStorage.getItem(scoringStateKey)) || structuredClone(defaultScoringState),
);

export function persistMatchData() {
	console.log("Saving match data");
	localStorage.setItem(matchDataKey, JSON.stringify(matchData));
	localStorage.setItem(scoringStateKey, JSON.stringify(scoringState));
}

setInterval(persistMatchData, 2000);

export function resetMatchData() {
	const newMatchData = structuredClone(defaultMatchData);
	// svelte doesn't like direct write
	for (const key of Object.keys(newMatchData)) matchData[key] = newMatchData[key];

	const newScoringState = structuredClone(defaultScoringState);
	// svelte doesn't like direct write
	for (const key of Object.keys(newScoringState)) scoringState[key] = newScoringState[key];

	persistMatchData();
}
