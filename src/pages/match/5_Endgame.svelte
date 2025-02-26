<script>
	import { matchData, appState } from "../../state.svelte";
	import cages from "../../assets/cages.png";
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

	<h2>Endgame</h2>

	<label>
		Barge:
		<select bind:value={matchData.endgame.barge}>
			<option value="none">None</option>
			<option value="park">Park</option>
			<option value="shallowCage">Shallow cage climb</option>
			<option value="deepCage">Deep cage climb</option>
		</select>
	</label>
	<br />
	<img src={cages} style="max-width: 50%" alt="Barge with cage levels indicated" />
	<br />
	<br />
	<button class="standard-button" onclick={() => (appState.matchState = "teleop")}>Previous (Teleop)</button>
	<button class="standard-button" onclick={() => (appState.matchState = "postmatch")} disabled={matchData.endgame.barge == null}> Next (Postmatch) </button>
</div>
