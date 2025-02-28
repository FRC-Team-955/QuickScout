<script>
	import Button from "../../components/Button.svelte";
	import { resetMatchScouter, scouterState } from "../../queuing/scouter.svelte";
	import { setUIState } from "../../state.svelte";

	let buttonState = $state({
		/** @type {"normal" | "confirm exit"} */
		buttonState: "normal",
	});
</script>

{#if !scouterState.isInOnlineMatch}
	{#if buttonState.buttonState == "confirm exit"}
		<Button headerRight extraClasses="header__return-button" onclick={() => (buttonState.buttonState = "normal")}
			>Cancel Exit</Button
		>
		<Button danger headerRight extraClasses="header__return-button" onclick={resetMatchScouter}
			>Confirm Exit (all data will be lost!)</Button
		>
	{:else}
		<Button
			headerRight
			extraClasses="header__return-button"
			onclick={() => (buttonState.buttonState = "confirm exit")}>Return to Home</Button
		>
	{/if}
{/if}
