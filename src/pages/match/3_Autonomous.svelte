<script>
	import Scoring from "./Scoring.svelte";
	import { matchData, appState } from "../../state.svelte";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import MatchHeader from "./MatchHeader.svelte";
	import Button from "../../components/Button.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Autonomous</h2>

	{#if !matchData.autonomous.leave}
		<Button danger onclick={() => (matchData.autonomous.leave = true)}>&#x2715; Left Starting Line</Button>
	{:else}
		<Button success onclick={() => (matchData.autonomous.leave = false)}>&#x2714; Left Starting Line</Button>
	{/if}
	<br />

	<Scoring isAutonomous />
</div>

<div class="footer">
	<div class="footer--middle">
		<Button footer onclick={() => (appState.matchState = "prematch")}>Previous (Prematch)</Button>
		<Button footer onclick={() => (appState.matchState = "teleop")}>Next (Teleop)</Button>
	</div>
</div>
