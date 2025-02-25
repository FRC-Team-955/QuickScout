<script>
	import Match from "./pages/Match.svelte";
	import Home from "./pages/Home.svelte";

	import { scouterInfo, matchData, appState, scoringState } from "./state.svelte";
	import { leadState, queuingState, serverState, signIn } from "./queuing.svelte";

	$inspect(scouterInfo, matchData, appState, scoringState, queuingState, scoringState, serverState, leadState).with(console.debug);

	$effect(() => {
		signIn();
	});
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
