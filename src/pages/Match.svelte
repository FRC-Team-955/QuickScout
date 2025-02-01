<script>
	import { matchData, uiState } from "../state.svelte";
	import Export from "./Export.svelte";

	import Metadata from "./match/1_Metadata.svelte";
	import Pregame from "./match/2_Prematch.svelte";
	import Autonomous from "./match/3_Autonomous.svelte";
	import Teleop from "./match/4_Teleop.svelte";
	import Endgame from "./match/5_Endgame.svelte";
	import Postgame from "./match/6_Postmatch.svelte";
</script>

{#if !uiState.metadataEntered}
	<Metadata />
{:else if !uiState.prematchEntered}
	<Pregame />
{:else if !uiState.autonomousEntered}
	<Autonomous />
{:else if !uiState.teleopEntered}
	<Teleop />
{:else if !uiState.endgameEntered}
	<Endgame />
{:else if !uiState.postmatchEntered}
	<Postgame />
{:else}
	<Export />
{/if}
