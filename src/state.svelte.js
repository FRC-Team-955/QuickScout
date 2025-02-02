const firstNameKey = "firstName";
const lastInitialKey = "lastInitial";

export let scouterInfo = $state({
	firstName: localStorage.getItem(firstNameKey) || "",
	lastInitial: localStorage.getItem(lastInitialKey) || "",
});

export function updateScouterInfo() {
	localStorage.setItem(firstNameKey, scouterInfo.firstName);
	localStorage.setItem(lastInitialKey, scouterInfo.lastInitial);
}

export let appState = $state({
	/** @type {"home" | "match"} */
	uiState: "home",
	/** @type {"start" | "settings"} */
	homeState: "start",
	/** @type {"metadata" | "prematch" | "autonomous" | "teleop" | "endgame" | "postmatch" | "export"} */
	matchState: "metadata"
})

export function uiState(state) {
	appState.uiState = state;
	appState.homeState = "start";
	appState.matchState = "metadata"
}

export let matchData = $state({
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
});

// This way, if the robot has a gamepiece in auto and doesn't score it before teleop the scouter and still say it's scored in teleop
export let scoringState = $state({
	hasCoral: false,
	hasAlgae: false,
});
