<script>
	import Scoring from "./Scoring.svelte";

	import { matchData, matchState } from "../../state.svelte";
</script>

<h2>Teleop</h2>

<Scoring isAutonomous={false} />
<br />

<br />
<button onclick={() => (matchState.autonomousEntered = false)}>Previous (Autonomous)</button>
<button onclick={() => (matchState.teleopEntered = true)}>Next (Endgame)</button>
