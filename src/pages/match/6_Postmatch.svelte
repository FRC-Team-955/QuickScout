<script>
	import ReturnToHome from "./ReturnToHome.svelte";
	import { matchData, appState } from "../../state.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import Header from "./Header.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<Header />

	<h2>Postmatch</h2>

	<label>Dead: <input bind:checked={matchData.postmatch.dead} type="checkbox" /></label>
	<br />

	<label>Tipped over: <input bind:checked={matchData.postmatch.tippedOver} type="checkbox" /></label>
	<br />

	<label>Yellow/red card: <input bind:checked={matchData.postmatch.card} type="checkbox" /></label>
	<br />

	<br />
	<button class="standard-button" onclick={() => (appState.matchState = "endgame")}>Previous (Endgame)</button>
	<button class="standard-button" onclick={() => (appState.matchState = "export")}>Finish and Export</button>
</div>
