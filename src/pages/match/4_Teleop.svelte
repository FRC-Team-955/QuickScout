<script>
	import Scoring from "./Scoring.svelte";

	import { matchData, uiState } from "../../state.svelte";
</script>

<h2>Teleop</h2>

<Scoring isAutonomous={false} />
<br />

<br />
<button onclick={() => (uiState.autonomousEntered = false)}>Previous (Autonomous)</button>
<button onclick={() => (uiState.teleopEntered = true)}>Next (Endgame)</button>
