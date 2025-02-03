<script>
	import { matchData, scoringState } from "../../state.svelte";

	let { isAutonomous } = $props();

	function coralPreload() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.preloaded = true;
		scoringState.hasCoral = true;
	}
	function coralStationPickup() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.stationPickup++;
		scoringState.hasCoral = true;
	}
	function coralGroundIntake() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.groundIntake++;
		scoringState.hasCoral = true;
	}

	function coralL1() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l1++;
		scoringState.hasCoral = false;
	}
	function coralL2() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l2++;
		scoringState.hasCoral = false;
	}
	function coralL3() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l3++;
		scoringState.hasCoral = false;
	}
	function coralL4() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l4++;
		scoringState.hasCoral = false;
	}
	function coralDropped() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.dropped++;
		scoringState.hasCoral = false;
	}

	function algaeReefDrop() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.reefDescoreDrop++;
	}
	function algaeReefTake() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.reefDescoreTake++;
		scoringState.hasAlgae = true;
	}
	function algaeGroundIntake() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.groundIntake++;
		scoringState.hasAlgae = true;
	}

	function algaeProcessor() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.processor++;
		scoringState.hasAlgae = false;
	}
	function algaeNet() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.net++;
		scoringState.hasAlgae = false;
	}
	function algaeDropped() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.dropped++;
		scoringState.hasAlgae = false;
	}
</script>

<div class="row">
	<div class="column">
		<h3>Coral</h3>
		{#if !scoringState.hasCoral}
			<p>Choose coral acquisition method</p>
			<button class="standard-button" onclick={coralStationPickup}>Coral taken from station</button>
			<br />
			<button class="standard-button" onclick={coralGroundIntake}>Coral taken from ground</button>
			{#if isAutonomous && !matchData.autonomous.coral.preloaded}
				<br />
				<button class="standard-button" onclick={coralPreload}>Coral preloaded</button>
			{/if}
		{:else}
			<p>Choose coral scoring method</p>
			<button class="standard-button" onclick={coralL4}>Scored L4</button>
			<br />
			<button class="standard-button" onclick={coralL3}>Scored L3</button>
			<br />
			<button class="standard-button" onclick={coralL2}>Scored L2</button>
			<br />
			<button class="standard-button" onclick={coralL1}>Scored L1 (Trough)</button>
			<br />
			<button class="standard-button" onclick={coralDropped}>Dropped</button>
		{/if}
	</div>
	<div class="column right-column">
		<h3>Algae</h3>
		{#if !scoringState.hasAlgae}
			<p>Choose algae acquisition/descore method</p>
			<button class="standard-button" onclick={algaeReefDrop}>Descored from reef and dropped</button>
			<br />
			<button class="standard-button" onclick={algaeReefTake}>Descored from reef and taken</button>
			<br />
			<button class="standard-button" onclick={algaeGroundIntake}>Taken from ground</button>
		{:else}
			<p>Choose algae scoring method</p>
			<button class="standard-button" onclick={algaeProcessor}>Scored in processor</button>
			<br />
			<button class="standard-button" onclick={algaeNet}>Scored in net</button>
			<br />
			<button class="standard-button" onclick={algaeDropped}>Dropped</button>
		{/if}
	</div>
</div>

<style>
	.row {
		display: flex;
		min-height: 350px;
	}

	.column {
		flex: 50%;
		min-width: 300px;
		max-width: 300px;
	}

	.right-column {
		padding-left: 32px;
	}
</style>
