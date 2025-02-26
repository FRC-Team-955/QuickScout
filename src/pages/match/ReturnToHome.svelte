<script>
	import { queuingState, scouterState } from "../../queuing.svelte";
	import { setUIState } from "../../state.svelte";

	let buttonState = $state({
		/** @type {"normal" | "confirm exit"} */
		buttonState: "normal",
	});
</script>

{#if !scouterState.isInOnlineMatch}
	{#if buttonState.buttonState == "confirm exit"}
		<button class="standard-button header__return-button header--right" onclick={() => (buttonState.buttonState = "normal")}>Cancel Exit</button>
		<button class="standard-button standard-button--danger header__return-button header--right" onclick={() => setUIState("home")}>Confirm Exit (all data will be lost!)</button>
	{:else}
		<button class="standard-button header__return-button header--right" onclick={() => (buttonState.buttonState = "confirm exit")}>Return to Home</button>
	{/if}
{/if}
