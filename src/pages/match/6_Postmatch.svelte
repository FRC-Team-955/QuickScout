<script>
	import { matchData, uiState } from "../../state.svelte";
</script>

<h2>Postmatch</h2>

<label>Dead: <input bind:checked={matchData.postmatch.dead} type="checkbox" /></label>
<br />

<label>Tipped over: <input bind:checked={matchData.postmatch.tippedOver} type="checkbox" /></label>
<br />

<label>Yellow/red card: <input bind:checked={matchData.postmatch.card} type="checkbox" /></label>
<br />

<br />
<button onclick={() => (uiState.endgameEntered = false)}>Previous (Endgame)</button>
<button onclick={() => (uiState.postmatchEntered = true)}>Finish</button>
