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

	<h2 class="subheader subheader--underline subheader--underline--green">Teleop</h2>

	<Scoring isAutonomous={false} />
</div>

<div class="footer">
	<div class="footer--middle">
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "autonomous")}>Previous (Autonomous)</button>
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "endgame")}>Next (Endgame)</button>
	</div>
</div>