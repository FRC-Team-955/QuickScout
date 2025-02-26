<script>
	import { toSVGString } from "../../third-party/node-qrcode/lib/browser";

	import { scouterInfo, matchData, appState } from "../../state.svelte";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import { queuingState } from "../../queuing.svelte";
	import MatchHeader from "./MatchHeader.svelte";

	const EXPORTSTATES = Object.freeze({
		NOT_CHOSEN: 0,
		CHOSE_ONLINE: 1,
		CHOSE_QRCODE: 2,
	});
	/** @type {number} **/
	let exportState = $state(EXPORTSTATES.NOT_CHOSEN);

	function objectValuesDeep(object) {
		let allValues = [];
		for (const value of Object.values(object)) {
			if (typeof value == "object") {
				allValues = [...allValues, ...objectValuesDeep(value)];
			} else {
				allValues.push(value);
			}
		}
		return allValues;
	}

	const allValues = [
		// ensure order
		scouterInfo.scouterID,
		...objectValuesDeep(matchData.metadata),
		...objectValuesDeep(matchData.prematch),
		...objectValuesDeep(matchData.autonomous),
		...objectValuesDeep(matchData.teleop),
		...objectValuesDeep(matchData.endgame),
		...objectValuesDeep(matchData.postmatch),
	];
	let svg = toSVGString(allValues.join("\t"), {
		style: "width: 100%",
		margin: 0,
	});
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Export match</h2>

	{#if exportState == EXPORTSTATES.CHOSE_QRCODE}
		{@html svg}
		<br />
		<br />
		<button class="standard-button" onclick={() => (exportState = EXPORTSTATES.NOT_CHOSEN)}>Back</button>
	{:else if exportState == EXPORTSTATES.CHOSE_ONLINE}
		<p>Sorry, not supported yet</p>
		<br />
		<button class="standard-button" onclick={() => (exportState = EXPORTSTATES.NOT_CHOSEN)}>Back</button>
	{:else}
		<button class="standard-button" onclick={() => (exportState = EXPORTSTATES.CHOSE_ONLINE)}>Export via the internet</button>
		<br />
		<button class="standard-button" onclick={() => (exportState = EXPORTSTATES.CHOSE_QRCODE)}>Export via QR code</button>
		<br />
	{/if}
</div>

<div class="footer">
	<div class="footer--middle">
		<button class="standard-button footer__button" onclick={() => (appState.matchState = "postmatch")}>Previous (Postmatch)</button>
		{#if !queuingState.match.matchRunning}
			<button class="standard-button standard-button--danger footer__button" onclick={() => location.reload()}>New match (ALL DATA WILL BE RESET!)</button>
		{/if}
	</div>
</div>
