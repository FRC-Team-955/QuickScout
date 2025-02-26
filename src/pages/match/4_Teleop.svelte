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

	<h2>Teleop</h2>

	<Scoring isAutonomous={false} />
	<br />

	<br />
	<button class="standard-button" onclick={() => (appState.matchState = "autonomous")}>Previous (Autonomous)</button>
	<button class="standard-button" onclick={() => (appState.matchState = "endgame")}>Next (Endgame)</button>
</div>
