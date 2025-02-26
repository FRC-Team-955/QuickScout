<script>
	import { matchData, appState } from "../../state.svelte";
	import startingPositionRed from "../../assets/starting-position-red.png";
	import startingPositionBlue from "../../assets/starting-position-blue.png";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import { queuingState, scouterState, serverState } from "../../queuing.svelte";
	import MatchHeader from "./MatchHeader.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<div class="subheader subheader--underline subheader--underline--green">Prematch</div>

	<label>No show: <input bind:checked={matchData.prematch.noShow} type="checkbox" /></label>
	<br />

	{#if !matchData.prematch.noShow}
		<label>
			Starting position:
			<select bind:value={matchData.prematch.startingLocation}>
				<option value="bargeSide">Barge-side</option>
				<option value="center">Center</option>
				<option value="processorSide">Processor-side</option>
			</select>
		</label>
		<br />
		<img style="max-width:50%" src={matchData.metadata.alliance == "blue" ? startingPositionBlue : startingPositionRed} alt="Field with starting locations indicated" />
		<br />
	{/if}

	<style>
		img {
			max-width: 50%;
		}
	</style>
</div>

<div class="footer">
	<div class="footer--middle">
		{#if !scouterState.isInOnlineMatch}
			<button class="standard-button footer__button" onclick={() => (appState.matchState = "metadata")}>Previous (Metadata)</button>
		{/if}
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "autonomous")} disabled={matchData.prematch.startingLocation == null && !matchData.prematch.noShow}>
			Next (Autonomous)
		</button>
	</div>
</div>
