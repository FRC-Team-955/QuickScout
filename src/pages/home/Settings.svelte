<script>
    import { scouterInfo, updateScouterInfo, appState } from "../../state.svelte";
</script>

<h1>Settings</h1>

<label>
	First name: <input
		bind:value={() => scouterInfo.firstInitial,
		(v) => {
			scouterInfo.firstInitial = v.toUpperCase();
			updateScouterInfo();
		}}
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

<button onclick={() => (appState.homeState = "start")} disabled={scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}>Return Home</button>