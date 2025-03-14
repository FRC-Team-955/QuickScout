<script>
	import ReturnToHome from "./ReturnToHome.svelte";
	import { matchData, appState } from "../../state.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import MatchHeader from "./MatchHeader.svelte";
	import Checkbox from "../../components/Checkbox.svelte";
	import Button from "../../components/Button.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Postmatch</h2>

	<br />
	<label>
		Defense rating:
		<select class="input" bind:value={matchData.postmatch.defenseRating}>
			<option value="noDefense">No defense played</option>
			<option value="largeImpact">Large impact on opposing alliance</option>
			<option value="mediumImpact">Medium impact on opposing alliance</option>
			<option value="smallImpact">Small impact on opposing alliance</option>
		</select>
	</label>
	<br />

	<Checkbox bind:value={matchData.postmatch.dead}>Dead?</Checkbox>
	<br />
	<Checkbox bind:value={matchData.postmatch.tippedOver}>Tipped Over?</Checkbox>
	<br />
	<Checkbox bind:value={matchData.postmatch.card}>Yellow/red card?</Checkbox>
	<br />

	<br />
	<p>Comments</p>
	<textarea class="input" bind:value={matchData.postmatch.comments} placeholder="None"></textarea>
	<br />
</div>

<div class="footer">
	<div class="footer--middle">
		{#if !matchData.prematch.noShow}
			<Button footer onclick={() => (appState.matchState = "endgame")}>Previous (Endgame)</Button>
		{:else}
			<Button footer onclick={() => (appState.matchState = "prematch")}>Previous (Prematch)</Button>
		{/if}
		<Button
			footer
			onclick={() => (appState.matchState = "export")}
			disabled={matchData.postmatch.defenseRating == null}>Finish and Export</Button
		>
	</div>
</div>
