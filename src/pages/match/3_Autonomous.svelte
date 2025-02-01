<script>
	import Scoring from "./Scoring.svelte";

	import { matchData, uiState } from "../../state.svelte";
</script>

<h2>Autonomous</h2>

<label>Left starting line: <input bind:checked={matchData.autonomous.leave} type="checkbox" /></label>
<br />

<Scoring isAutonomous={true} />
<br />

<br />
<button onclick={() => (uiState.prematchEntered = false)}>Previous (Pregame)</button>
<button onclick={() => (uiState.autonomousEntered = true)}>Next (Teleop)</button>
