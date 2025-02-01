<script>
	import { matchData, uiState } from "../../state.svelte";
</script>

<h2>Metadata</h2>

<label>Match number: <input bind:value={matchData.metadata.matchNumber} type="number" /></label>
<br />

<label>Team number: <input bind:value={matchData.metadata.teamNumber} type="number" /></label>
<br />

<label>
	Alliance:
	<select bind:value={matchData.metadata.alliance}>
		<option value="blue">Blue</option>
		<option value="red">Red</option>
	</select>
</label>
<br />

<br />
<button onclick={() => (uiState.metadataEntered = true)} disabled={matchData.metadata.matchNumber == null || matchData.metadata.teamNumber == null || matchData.metadata.alliance == null}>
	Next (Prematch)
</button>
