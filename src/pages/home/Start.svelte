<script>
	import { scouterInfo, updateScouterInfo, appState, uiState } from "../../state.svelte";
</script>

<div class="contents">
	<h1 style="margin-block-end: 0">QuickScout</h1>
	<h3 style="margin-block-start: 0">Made by FRC Teams 749, 955, 997</h3>


	<button class="standard-button" onclick={() => (appState.homeState = "settings")}>Settings</button>
	<br />

	{#if scouterInfo.firstName.length == 0 || scouterInfo.lastInitial.length == 0}
		<br />
		Please set your name in settings.
	{:else}
		<br />
		Welcome! Your name is set to {scouterInfo.firstName} {scouterInfo.lastInitial}
	{/if}

	<br />
	<button
		class="standard-button"
		onclick={() => (uiState("match"))}
		disabled={scouterInfo.firstName.length == 0 || scouterInfo.lastInitial.length == 0}
	>
		Start match
	</button>
</div>