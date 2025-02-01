<script>
	import { scouterInfo, updateScouterInfo, uiState } from "../state.svelte";
</script>

<h1>QuickScout</h1>

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

<button onclick={() => (uiState.matchStarted = true)} disabled={scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}>Start match</button>
