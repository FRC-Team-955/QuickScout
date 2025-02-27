<script>
	import Match from "./pages/Match.svelte";
	import Home from "./pages/Home.svelte";

	import { scouterInfo, matchData, appState, scoringState } from "./state.svelte";
	import { queuingState, serverState } from "./queuing/shared.svelte";
	import { tryToSignIn, leadState } from "./queuing/lead.svelte";
	import { scouterState } from "./queuing/scouter.svelte";

	$inspect(scouterInfo).with((...args) => console.debug("scouterInfo", ...args));
	$inspect(matchData).with((...args) => console.debug("matchData", ...args));
	$inspect(appState).with((...args) => console.debug("appState", ...args));
	$inspect(scoringState).with((...args) => console.debug("scoringState", ...args));
	$inspect(queuingState).with((...args) => console.debug("queuingState", ...args));
	$inspect(scoringState).with((...args) => console.debug("scoringState", ...args));
	$inspect(serverState).with((...args) => console.debug("serverState", ...args));
	$inspect(leadState).with((...args) => console.debug("leadState", ...args));
	$inspect(scouterState).with((...args) => console.debug("scouterState", ...args));

	$effect(() => {
		tryToSignIn();
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
