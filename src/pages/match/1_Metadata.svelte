<script>
	import { matchData, appState } from "../../state.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import ReturnToHome from "./ReturnToHome.svelte";
	import MatchHeader from "./MatchHeader.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<div class="subheader subheader--underline subheader--underline--blue">Metadata</div>

	<label>Match number: <input class="input input--disable-spinner" bind:value={matchData.metadata.matchNumber} type="number" placeholder="Enter Match Number" /></label>
	<br />

	<label>Team number: <input class="input input--disable-spinner" bind:value={matchData.metadata.teamNumber} type="number" placeholder="Enter Team Number" /></label>
	<br />

	<label>
		Alliance:
		<select class="input" bind:value={matchData.metadata.alliance}>
			<option value="blue">Blue</option>
			<option value="red">Red</option>
		</select>
	</label>
</div>

<div class="footer">
	<div class="footer--middle">
		<button
			class="standard-button footer__button"
			onclick={() => (appState.matchState = "prematch")}
			disabled={matchData.metadata.matchNumber == null || matchData.metadata.teamNumber == null || matchData.metadata.alliance == null}
		>
			Next (Prematch)
		</button>
	</div>
</div>
