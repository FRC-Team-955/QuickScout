<script>
	import Match from "./pages/Match.svelte";
	import Start from "./pages/Start.svelte";
	import Settings from "./pages/Settings.svelte"

	import { scouterInfo, matchData, uiState, scoringState, } from "./state.svelte";

	$inspect(scouterInfo, matchData, uiState, scoringState);
</script>

<main>
	{#if uiState.matchStarted}
		<Match />
	{:else}
		<Start />
	{/if}
</main>

<style>
</style>
