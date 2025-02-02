<script>
	import { matchData, appState } from "../state.svelte";

    import Start from "./home/Start.svelte";
    import Settings from "./home/Settings.svelte";
</script>

{#if appState.homeState == "settings"}
	<Settings />
{:else}
	<Start />
{/if}