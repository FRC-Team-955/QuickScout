<script>
	import Scoring from "./Scoring.svelte";

	import { matchData, appState } from "../../state.svelte";
    import ReturnToHome from "../../assets/ReturnToHome.svelte";
</script>

<ReturnToHome />

<div class="contents">
	<h2>Autonomous</h2>

	<label>Left starting line: <input bind:checked={matchData.autonomous.leave} type="checkbox" /></label>
	<br />

	<Scoring isAutonomous={true} />
	<br />

	<br />
	<button class="standard-button" onclick={() => (appState.matchState = "prematch")}>Previous (Prematch)</button>
	<button class="standard-button" onclick={() => (appState.matchState = "teleop")}>Next (Teleop)</button>
</div>