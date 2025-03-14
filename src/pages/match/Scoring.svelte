<script>
	import { Check } from "lucide-svelte";
	import Button from "../../components/Button.svelte";
	import { matchData, scoringState } from "../../state.svelte";

	let { isAutonomous } = $props();

	/** @type {(() => void)[]} */
	let actionUndos = $state([]);
	let undoIcon = $state(null);
	let undoCooldown = $state(false);

	function undoLastAction() {
		if (!undoCooldown && actionUndos.length > 0) {
			actionUndos.pop()();
			undoIcon = Check;
			undoCooldown = true;
			setTimeout(() => {
				undoIcon = null;
				undoCooldown = false;
			}, 250);
		}
	}

	function foul() {
		if (isAutonomous) return;
		matchData.teleop.fouls++;
		actionUndos.push(() => {
			matchData.teleop.fouls--;
		});
	}

	function coralPreload() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.preloaded = true;
		scoringState.hasCoral = true;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.preloaded = false;
			scoringState.hasCoral = false;
		});
	}
	function coralStationPickup() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.stationPickup++;
		scoringState.hasCoral = true;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.stationPickup--;
			scoringState.hasCoral = false;
		});
	}
	function coralGroundIntake() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.groundIntake++;
		scoringState.hasCoral = true;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.groundIntake--;
			scoringState.hasCoral = false;
		});
	}

	function coralL1() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l1++;
		scoringState.hasCoral = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l1--;
			scoringState.hasCoral = true;
		});
	}
	function coralL2() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l2++;
		scoringState.hasCoral = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l2--;
			scoringState.hasCoral = true;
		});
	}
	function coralL3() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l3++;
		scoringState.hasCoral = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l3--;
			scoringState.hasCoral = true;
		});
	}
	function coralL4() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l4++;
		scoringState.hasCoral = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.l4--;
			scoringState.hasCoral = true;
		});
	}
	function coralDropped() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).coral.dropped++;
		scoringState.hasCoral = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).coral.dropped--;
			scoringState.hasCoral = true;
		});
	}

	function algaeReefDrop() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.reefDescoreDrop++;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).algae.reefDescoreDrop--;
		});
	}
	function algaeReefTake() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.reefDescoreTake++;
		scoringState.hasAlgae = true;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).algae.reefDescoreTake--;
			scoringState.hasAlgae = false;
		});
	}
	function algaeGroundIntake() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.groundIntake++;
		scoringState.hasAlgae = true;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).algae.groundIntake--;
			scoringState.hasAlgae = false;
		});
	}

	function algaeProcessor() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.processor++;
		scoringState.hasAlgae = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).algae.processor--;
			scoringState.hasAlgae = true;
		});
	}
	function algaeNet() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.net++;
		scoringState.hasAlgae = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).algae.processor--;
			scoringState.hasAlgae = true;
		});
	}
	function algaeDropped() {
		(isAutonomous ? matchData.autonomous : matchData.teleop).algae.dropped++;
		scoringState.hasAlgae = false;
		actionUndos.push(() => {
			(isAutonomous ? matchData.autonomous : matchData.teleop).algae.dropped--;
			scoringState.hasAlgae = true;
		});
	}

	let coralScored = $derived(
		matchData.autonomous.coral.l1 +
			matchData.autonomous.coral.l2 +
			matchData.autonomous.coral.l3 +
			matchData.autonomous.coral.l4 +
			matchData.teleop.coral.l1 +
			matchData.teleop.coral.l2 +
			matchData.teleop.coral.l3 +
			matchData.teleop.coral.l4,
	);
	let coralTaken = $derived(
		matchData.autonomous.coral.groundIntake +
			matchData.autonomous.coral.stationPickup +
			matchData.teleop.coral.groundIntake +
			matchData.teleop.coral.stationPickup,
	);
	let algaeScored = $derived(
		matchData.autonomous.algae.net +
			matchData.autonomous.algae.processor +
			matchData.teleop.algae.net +
			matchData.teleop.algae.processor,
	);
	let algaeDescored = $derived(
		matchData.autonomous.algae.reefDescoreDrop +
			matchData.autonomous.algae.reefDescoreTake +
			matchData.teleop.algae.reefDescoreDrop +
			matchData.teleop.algae.reefDescoreTake,
	);
	let algaeTaken = $derived(
		matchData.autonomous.algae.reefDescoreTake +
			matchData.autonomous.algae.groundIntake +
			matchData.teleop.algae.reefDescoreTake +
			matchData.teleop.algae.groundIntake,
	);
</script>

<p>Coral scored: {coralScored} | Algae scored: {algaeScored} | Algae descored: {algaeDescored}</p>
<p>Coral taken: {coralTaken} | Algae taken: {algaeTaken}</p>
<div>
	<Button icon={undoIcon} disabled={undoCooldown || actionUndos.length == 0} onclick={undoLastAction}
		>Undo last action</Button
	>
</div>
{#if !isAutonomous}
	<div>
		<Button onclick={foul}>Foul ({matchData.teleop.fouls} fouls)</Button>
	</div>
{/if}
<div class="scoring-grid full-height">
	{#if !scoringState.hasCoral}
		<div>
			<Button extraClasses="scoring-grid__button" onclick={coralStationPickup}>Coral taken from station</Button>
		</div>
		<div>
			<Button extraClasses="scoring-grid__button" onclick={coralGroundIntake}>Coral taken from ground</Button>
		</div>
		<div>
			{#if isAutonomous && !matchData.autonomous.coral.preloaded && coralTaken == 0}
				<Button extraClasses="scoring-grid__button" onclick={coralPreload}>Coral preloaded</Button>
			{/if}
		</div>
		<div></div>
		<div></div>
	{:else}
		<div><Button extraClasses="scoring-grid__button" onclick={coralL4}>Coral scored L4</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralL3}>Coral scored L3</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralL2}>Coral scored L2</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralL1}>Coral scored L1 (Trough)</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={coralDropped}>Coral dropped</Button></div>
	{/if}
	{#if !scoringState.hasAlgae}
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeReefDrop}
				>Algae descored from reef and dropped</Button
			>
		</div>
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeReefTake}
				>Algae descored from reef and taken</Button
			>
		</div>
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeGroundIntake}>Algae taken from ground</Button>
		</div>
		<div></div>
		<div></div>
	{:else}
		<div>
			<Button extraClasses="scoring-grid__button" onclick={algaeProcessor}>Algae scored in processor</Button>
		</div>
		<div><Button extraClasses="scoring-grid__button" onclick={algaeNet}>Algae scored in net</Button></div>
		<div><Button extraClasses="scoring-grid__button" onclick={algaeDropped}>Algae dropped</Button></div>
		<div></div>
		<div></div>
	{/if}
</div>
