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

	<h2 class="subheader subheader--underline subheader--underline--green">Teleop</h2>

	<Scoring isAutonomous={false} />
</div>

<div class="footer">
	<div class="footer--middle">
		<Button footer onclick={() => (appState.matchState = "autonomous")}>Previous (Autonomous)</Button>
		<Button footer onclick={() => (appState.matchState = "endgame")}>Next (Endgame)</Button>
	</div>
</div>
