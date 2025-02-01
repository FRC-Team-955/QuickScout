<script>
	import Scoring from "./Scoring.svelte";

	import { matchData, matchState } from "../../state.svelte";
</script>

<h2>Autonomous</h2>

<label>Left starting line: <input bind:checked={matchData.autonomous.leave} type="checkbox" /></label>
<br />

<Scoring isAutonomous={true} />
<br />

<br />
<button onclick={() => (matchState.prematchEntered = false)}>Previous (Pregame)</button>
<button onclick={() => (matchState.autonomousEntered = true)}>Next (Teleop)</button>
