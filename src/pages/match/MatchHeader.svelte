<script>
	import { queuingState, scouterState } from "../../queuing.svelte";
	import { matchData } from "../../state.svelte";
</script>

<h2>Scouting Team {matchData.metadata.teamNumber} ({matchData.metadata.alliance} alliance)</h2>

{#if scouterState.matchEndSignaled}
	<h3 style="color: orange">Scouting lead has signaled that the match is ended. Please finalize and upload your data.</h3>
{/if}
