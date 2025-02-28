<script>
	import { matchData, appState } from "../../state.svelte";
	import startingPositionRed from "../../assets/starting-position-red.png";
	import startingPositionBlue from "../../assets/starting-position-blue.png";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import { scouterState } from "../../queuing/scouter.svelte";
	import MatchHeader from "./MatchHeader.svelte";
	import Button from "../../components/Button.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<div class="subheader subheader--underline subheader--underline--green">Prematch</div>

	{#if !matchData.prematch.noShow}
		<Button onclick={() => (matchData.prematch.noShow = !matchData.prematch.noShow)}>&#x2715; No Show?</Button>
		<br />
		<label>
			Starting position:
			<select class="input" bind:value={matchData.prematch.startingLocation}>
				<option value="bargeSide">Barge-side</option>
				<option value="center">Center</option>
				<option value="processorSide">Processor-side</option>
			</select>
		</label>
		<br />
		<img
			style="max-width:50%"
			src={matchData.metadata.alliance == "blue" ? startingPositionBlue : startingPositionRed}
			alt="Field with starting locations indicated"
		/>
		<br />
	{:else}
		<Button danger onclick={() => (matchData.prematch.noShow = !matchData.prematch.noShow)}
			>&#x2714; No Show?</Button
		>
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
			<Button footer onclick={() => (appState.matchState = "metadata")}>Previous (Metadata)</Button>
		{/if}

		{#if !matchData.prematch.noShow}
			<Button
				footer
				onclick={() => (appState.matchState = "autonomous")}
				disabled={matchData.prematch.startingLocation == null}
			>
				Next (Autonomous)
			</Button>
		{:else}
			<Button footer onclick={() => (appState.matchState = "postmatch")}>Next (Postmatch)</Button>
		{/if}
	</div>
</div>
