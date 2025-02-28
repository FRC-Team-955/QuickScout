<script>
	import Scoring from "./Scoring.svelte";
	import { matchData, appState } from "../../state.svelte";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import MatchHeader from "./MatchHeader.svelte";
	import Button from "../../components/Button.svelte";
	import Checkbox from "../../components/Checkbox.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Autonomous</h2>

	<Checkbox bind:value={matchData.autonomous.leave}>Left Starting Line</Checkbox>
	<br />

	<Scoring isAutonomous />
</div>

<div class="footer">
	<div class="footer--middle">
		<Button footer onclick={() => (appState.matchState = "prematch")}>Previous (Prematch)</Button>
		<Button footer onclick={() => (appState.matchState = "teleop")}>Next (Teleop)</Button>
	</div>
</div>
