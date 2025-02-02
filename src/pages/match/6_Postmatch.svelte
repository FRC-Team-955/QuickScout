<script>
    import ReturnToHome from "../../assets/ReturnToHome.svelte";
	import { matchData, appState } from "../../state.svelte";
</script>

<ReturnToHome />

<div class="main">
	<h2>Postmatch</h2>

	<label>Dead: <input bind:checked={matchData.postmatch.dead} type="checkbox" /></label>
	<br />

	<label>Tipped over: <input bind:checked={matchData.postmatch.tippedOver} type="checkbox" /></label>
	<br />

	<label>Yellow/red card: <input bind:checked={matchData.postmatch.card} type="checkbox" /></label>
	<br />

	<br />
	<button onclick={() => (appState.matchState = "endgame")}>Previous (Endgame)</button>
	<button onclick={() => (appState.matchState = "export")}>Finish and Export</button>
</div>