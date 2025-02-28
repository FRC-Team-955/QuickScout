<script>
	import Button from "../../components/Button.svelte";
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

Coral Scored: {matchData.autonomous.coral.l1 +
	matchData.autonomous.coral.l2 +
	matchData.autonomous.coral.l3 +
	matchData.autonomous.coral.l4 +
	matchData.teleop.coral.l1 +
	matchData.teleop.coral.l2 +
	matchData.teleop.coral.l3 +
	matchData.teleop.coral.l4}, Algae Scored: {matchData.autonomous.algae.net +
	matchData.autonomous.algae.processor +
	matchData.teleop.algae.net +
	matchData.teleop.algae.processor}
<div class="scoring-grid full-height">
	{#if !scoringState.hasCoral}
		<div>
			<Button extraClasses="scoring-grid__button" onclick={coralStationPickup}>Coral taken from station</Button>
		</div>
		<div>
			<Button extraClasses="scoring-grid__button" onclick={coralGroundIntake}>Coral taken from ground</Button>
		</div>
		<div>
			{#if isAutonomous && !matchData.autonomous.coral.preloaded}
				<Button extraClasses="scoring-grid__button" onclick={coralPreload}>Coral preloaded</Button>
			{/if}
		</div>
		<div></div>
		<div></div>
	{:else}
		<div><Button extraClasses="scoring-grid__button" onclick={coralL4}>Scored L4</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralL3}>Scored L3</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralL2}>Scored L2</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralL1}>Scored L1 (Trough)</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralDropped}>Dropped</Button></div>
	{/if}
	{#if !scoringState.hasAlgae}
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeReefDrop}>Descored from reef and dropped</Button>
		</div>
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeReefTake}>Descored from reef and taken</Button>
		</div>
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeGroundIntake}>Taken from ground</Button>
		</div>
		<div></div>
		<div></div>
	{:else}
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeProcessor}>Scored in processor</Button>
		</div>
		<div><Button extraClasses="scoring-grid__button" onclick={algaeNet}>Scored in net</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={algaeDropped}>Dropped</Button></div>
		<div></div>
		<div></div>
	{/if}
</div>
