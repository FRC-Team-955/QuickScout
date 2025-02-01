<script>
	import { matchData, matchState } from "../state.svelte";
	import Export from "./Export.svelte";

	import Metadata from "./match/1_Metadata.svelte";
	import Pregame from "./match/2_Prematch.svelte";
	import Autonomous from "./match/3_Autonomous.svelte";
	import Teleop from "./match/4_Teleop.svelte";
	import Endgame from "./match/5_Endgame.svelte";
	import Postgame from "./match/6_Postmatch.svelte";
</script>

{#if !matchState.metadataEntered}
	<Metadata />
{:else if !matchState.prematchEntered}
	<Pregame />
{:else if !matchState.autonomousEntered}
	<Autonomous />
{:else if !matchState.teleopEntered}
	<Teleop />
{:else if !matchState.endgameEntered}
	<Endgame />
{:else if !matchState.postmatchEntered}
	<Postgame />
{:else}
	<Export />
{/if}
