<script>
	import Scoring from "./Scoring.svelte";

	import { matchData, appState } from "../../state.svelte";
    import ReturnToHome from "../../assets/ReturnToHome.svelte";
</script>

<ReturnToHome />

<div class="contents">
	<h2>Teleop</h2>

	<Scoring isAutonomous={false} />
	<br />

	<br />
	<button class="standard-button" onclick={() => (appState.matchState = "autonomous")}>Previous (Autonomous)</button>
	<button class="standard-button" onclick={() => (appState.matchState = "endgame")}>Next (Endgame)</button>
</div>