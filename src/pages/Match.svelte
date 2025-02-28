<script>
	import { appState } from "../state.svelte";
	import Export from "./match/7_Export.svelte";

	import Metadata from "./match/1_Metadata.svelte";
	import Pregame from "./match/2_Prematch.svelte";
	import Autonomous from "./match/3_Autonomous.svelte";
	import Teleop from "./match/4_Teleop.svelte";
	import Endgame from "./match/5_Endgame.svelte";
	import Postgame from "./match/6_Postmatch.svelte";
</script>

{#if appState.matchState == "metadata"}
	<Metadata />
{:else if appState.matchState == "prematch"}
	<Pregame />
{:else if appState.matchState == "autonomous"}
	<Autonomous />
{:else if appState.matchState == "teleop"}
	<Teleop />
{:else if appState.matchState == "endgame"}
	<Endgame />
{:else if appState.matchState == "postmatch"}
	<Postgame />
{:else}
	<Export />
{/if}
