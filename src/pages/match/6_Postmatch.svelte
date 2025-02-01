<script>
	import { matchData, matchState } from "../../state.svelte";
</script>

<h2>Postmatch</h2>

<label>Dead: <input bind:checked={matchData.postmatch.dead} type="checkbox" /></label>
<br />

<label>Tipped over: <input bind:checked={matchData.postmatch.tippedOver} type="checkbox" /></label>
<br />

<label>Yellow/red card: <input bind:checked={matchData.postmatch.card} type="checkbox" /></label>
<br />

<br />
<button onclick={() => (matchState.endgameEntered = false)}>Previous (Endgame)</button>
<button onclick={() => (matchState.postmatchEntered = true)}>Finish</button>
