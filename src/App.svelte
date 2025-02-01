<script>
	import Match from "./pages/Match.svelte";
	import Start from "./pages/Start.svelte";

	import { scouterInfo, matchData, matchState } from "./state.svelte";

	$inspect(scouterInfo, matchData);
</script>

<main>
	{#if !matchState.started}
		<Start />
	{:else}
		<Match />
	{/if}
</main>

<style>
</style>
