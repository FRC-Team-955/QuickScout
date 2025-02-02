<script>
	import Match from "./pages/Match.svelte";
	import Home from "./pages/Home.svelte"

	import { scouterInfo, matchData, appState, scoringState } from "./state.svelte";

	$inspect(scouterInfo, matchData, appState, scoringState);
</script>

<main>
	{#if appState.uiState == "match"}
		<Match />
	{:else}
		<Home />
	{/if}
</main>

<style>
</style>
