<script>
	import { scouterInfo, updateScouterInfo, appState, uiState } from "../../state.svelte";
</script>

<h1 style="margin-block-end: 0">QuickScout</h1>
<h3 style="margin-block-start: 0">Made by FRC Teams 749, 955, 997</h3>


<button onclick={() => (appState.homeState = "settings")}>Settings</button>
<br />

{#if scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}
	<br />
	Please set your name in settings.
{/if}

<br />
<button onclick={() => (uiState("match"))} disabled={scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}>Start match</button>
