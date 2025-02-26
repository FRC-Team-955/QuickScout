<script>
	import Scoring from "./Scoring.svelte";
	import { matchData, appState } from "../../state.svelte";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import MatchHeader from "./MatchHeader.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Autonomous</h2>

	
	{#if !matchData.autonomous.leave}
		<button class="standard-button standard-button--danger" onclick={() => matchData.autonomous.leave = true}>&#x2715; Left Starting Line</button>
	{:else}
		<button class="standard-button standard-button--success" onclick={() => matchData.autonomous.leave = false}>&#x2714; Left Starting Line</button>
	{/if}
	<br />

	<Scoring isAutonomous={true} />
</div>

<div class="footer">
	<div class="footer--middle">
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "prematch")}>Previous (Prematch)</button>
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "teleop")}>Next (Teleop)</button>
	</div>
</div>
