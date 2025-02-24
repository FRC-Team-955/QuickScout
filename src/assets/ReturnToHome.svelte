<script>
	import { uiState } from "../state.svelte";

 	let buttonState = $state({
	    /** @type {"normal" | "confirm exit"} */
	    buttonState: "normal",
    })
</script>

{#if buttonState.buttonState == "confirm exit"}
    <button class="standard-button header__return-button header--right" onclick={() => (buttonState.buttonState = "normal")}>Cancel Exit</button>
    <button class="standard-button standard-button--danger header__return-button header--right" onclick={() => (uiState("home"))}>Confirm Exit</button>
{:else}
    <button class="standard-button header__return-button header--right" onclick={() => (buttonState.buttonState = "confirm exit")}>Return to Home</button>
{/if}