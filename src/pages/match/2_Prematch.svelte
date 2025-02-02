<script>
	import { matchData, appState } from "../../state.svelte";

	import startingPositionRed from "../../assets/starting-position-red.png";
	import startingPositionBlue from "../../assets/starting-position-blue.png";
    import ReturnToHome from "../../assets/ReturnToHome.svelte";
</script>

<ReturnToHome />

<div class="main">
	<h2>Prematch</h2>

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
		<img src={matchData.metadata.alliance == "blue" ? startingPositionBlue : startingPositionRed} alt="Field with starting locations indicated" />
		<br />
	{/if}

	<br />
	<button onclick={() => (appState.matchState = "metadata")}>Previous (Metadata)</button>
	<button onclick={() => (appState.matchState = "autonomous")} disabled={matchData.prematch.startingLocation == null && !matchData.prematch.noShow}>Next (Autonomous)</button>

	<style>
		img {
			max-width: 50%;
		}
	</style>
</div>