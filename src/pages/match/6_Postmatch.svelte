<script>
	import ReturnToHome from "./ReturnToHome.svelte";
	import { matchData, appState } from "../../state.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import MatchHeader from "./MatchHeader.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Postmatch</h2>
	{#if !matchData.postmatch.dead}
		<button class="standard-button standard-button--danger" onclick={() => matchData.postmatch.dead = true}>&#x2715; Dead?</button>
	{:else}
		<button class="standard-button standard-button--success" onclick={() => matchData.postmatch.dead = false}>&#x2714; Dead?</button>
	{/if}
	<br />
	{#if !matchData.postmatch.tippedOver}
		<button class="standard-button standard-button--danger" onclick={() => matchData.postmatch.tippedOver = true}>&#x2715; Tipped Over?</button>
	{:else}
		<button class="standard-button standard-button--success" onclick={() => matchData.postmatch.tippedOver = false}>&#x2714; Tipped Over?</button>
	{/if}
	<br />
	{#if !matchData.postmatch.card}
		<button class="standard-button standard-button--danger" onclick={() => matchData.postmatch.card = true}>&#x2715; Yellow/red card?</button>
	{:else}
		<button class="standard-button standard-button--success" onclick={() => matchData.postmatch.card = false}>&#x2714; Yellow/red card?</button>
	{/if}
	<br />
</div>

<div class="footer">
	<div class="footer--middle">
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "endgame")}>Previous (Endgame)</button>
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "export")}>Finish and Export</button>
	</div>
</div>
