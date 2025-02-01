<script>
	import { scouterInfo, updateScouterInfo, uiState } from "../state.svelte";
</script>

<h1 style="margin-block-end: 0">QuickScout</h1>
<h3 style="margin-block-start: 0">Made by FRC Teams 749, 955, 997</h3>

<button onclick={() => (uiState.settingsOpen = true)}>Settings</button>
<br />

<label>
	First initial: <input
		bind:value={() => scouterInfo.firstInitial,
		(v) => {
			scouterInfo.firstInitial = v.toUpperCase();
			updateScouterInfo();
		}}
		maxLength={1}
	/>
</label>
<br />

<label>
	Last initial: <input
		bind:value={() => scouterInfo.lastInitial,
		(v) => {
			scouterInfo.lastInitial = v.toUpperCase();
			updateScouterInfo();
		}}
		maxLength={1}
	/>
</label>
<br />

<br />
<button onclick={() => (uiState.matchStarted = true)} disabled={scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}>Start match</button>
