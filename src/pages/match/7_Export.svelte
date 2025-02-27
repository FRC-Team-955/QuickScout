<script>
	import { toSVGString } from "../../third-party/node-qrcode/lib/browser";

	import { scouterInfo, matchData, appState } from "../../state.svelte";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import { serverState } from "../../queuing/shared.svelte";
	import MatchHeader from "./MatchHeader.svelte";
	import { exportData, resetMatchScouter, scouterState } from "../../queuing/scouter.svelte";

	function objectValuesDeep(object) {
		let allValues = [];
		for (const value of Object.values(object)) {
			if (value == null) {
				allValues.push("");
			} else if (typeof value == "object") {
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

	let choseOnline = $state(false);
	let exportingOnline = $state(false);
	let exportError = $state(false);
	let choseQrcode = $state(false);
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
	<ReturnToHome />
</div>

<div class="contents">
	<MatchHeader />

	<h2 class="subheader subheader--underline subheader--underline--green">Export Data</h2>

	{#if choseQrcode}
		{@html svg}
		<br />
		<br />
		<div><button class="standard-button" onclick={() => (choseQrcode = false)}>Back</button></div>
		<div><button class="standard-button standard-button--danger footer__button" onclick={() => resetMatchScouter()}>New match (ALL DATA WILL BE RESET!)</button></div>
	{:else if choseOnline}
		{#if exportingOnline}
			<p>Exporting...</p>
		{:else if exportError}
			<p>An error occurred. Check your internet connection and try again</p>
			<button class="standard-button" onclick={() => (choseOnline = false)}>Back</button>
		{:else}
			<p>Successfully exported!</p>
			<button class="standard-button standard-button--danger footer__button" onclick={() => resetMatchScouter()}>New match (ALL DATA WILL BE RESET!)</button>
		{/if}
	{:else}
		<button
			class="standard-button"
			onclick={() => {
				if (!serverState.connected) {
					alert("Currently disconnected from server. Check your internet connection and try again");
					return;
				}
				exportingOnline = true;
				exportData(
					allValues,
					() => (exportingOnline = false),
					() => (exportError = true),
				);
				choseOnline = true;
			}}>Export over the internet (recommended)</button
		>
		<br />
		<button class="standard-button" onclick={() => (choseQrcode = true)}>Export via QR code</button>
		<br />
	{/if}
</div>

{#if !choseOnline && !choseQrcode}
	<div class="footer">
		<div class="footer--middle">
			<button class="standard-button footer__button" onclick={() => (appState.matchState = "postmatch")}>Previous (Postmatch)</button>
			{#if !scouterState.isInOnlineMatch}
				<button class="standard-button standard-button--danger footer__button" onclick={() => resetMatchScouter()}>New match (ALL DATA WILL BE RESET!)</button>
			{/if}
		</div>
	</div>
{/if}
