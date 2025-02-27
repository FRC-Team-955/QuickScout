<script>
	import { serverState } from "../../queuing/shared.svelte";
	import { scouterInfo, persistScouterInfo, appState, setUIState } from "../../state.svelte";
	import Lead from "./start/Lead.svelte";
	import Scouter from "./start/Scouter.svelte";

	import textlogo from "../../assets/text-logo-removebg.png";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
</div>

<div class="contents">
	<h3>Made by FRC Teams 749, 955, 997</h3>

	<button class="standard-button" onclick={() => (appState.homeState = "setup")}>Setup</button>

	<p>Welcome! Your scouter ID is set to {scouterInfo.scouterID}</p>

	{#if scouterInfo.scouterID.length > 2}
		<Lead />
	{:else}
		<Scouter />
	{/if}
</div>
