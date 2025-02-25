<script>
	import { matchData, appState } from "../state.svelte";

	import Start from "./home/Start.svelte";
	import Setup from "./home/Setup.svelte";
</script>

{#if appState.homeState == "setup"}
	<Setup />
{:else}
	<Start />
{/if}
