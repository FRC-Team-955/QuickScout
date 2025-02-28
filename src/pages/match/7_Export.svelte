<script>
	import { toSVGString } from "../../third-party/node-qrcode/lib/browser";

	import { scouterInfo, matchData, appState } from "../../state.svelte";
	import ReturnToHome from "./ReturnToHome.svelte";
	import textlogo from "../../assets/text-logo-removebg.png";
	import { serverState } from "../../queuing/shared.svelte";
	import MatchHeader from "./MatchHeader.svelte";
	import { exportData, resetMatchScouter, scouterState } from "../../queuing/scouter.svelte";
	import Button from "../../components/Button.svelte";

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
		"objective",
		scouterInfo.scouterID,
		...objectValuesDeep(matchData.metadata),
		...objectValuesDeep(matchData.prematch),
		...objectValuesDeep(matchData.autonomous),
		...objectValuesDeep(matchData.teleop),
		...objectValuesDeep(matchData.endgame),
		...objectValuesDeep(matchData.postmatch),
	];
	let svg = toSVGString(allValues.join("\t"), {
		style: "width: 90%; max-height: 80vh",
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
		<div><Button onclick={() => (choseQrcode = false)}>Back</Button></div>
		<div><Button danger onclick={() => resetMatchScouter()}>New match (ALL DATA WILL BE RESET!)</Button></div>
	{:else if choseOnline}
		{#if exportingOnline}
			<p>Exporting...</p>
		{:else if exportError}
			<p>An error occurred. Check your internet connection and try again</p>
			<Button onclick={() => (choseOnline = false)}>Back</Button>
		{:else}
			<p>Successfully exported!</p>
			<Button onclick={() => resetMatchScouter()}>New match</Button>
		{/if}
	{:else}
		<Button
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
			}}>Export over the internet (recommended)</Button
		>
		<br />
		<Button onclick={() => (choseQrcode = true)}>Export via QR code</Button>
		<br />
	{/if}
</div>

{#if !choseOnline && !choseQrcode}
	<div class="footer">
		<div class="footer--middle">
			<Button footer onclick={() => (appState.matchState = "postmatch")}>Previous (Postmatch)</Button>
			{#if !scouterState.isInOnlineMatch}
				<Button danger footer onclick={() => resetMatchScouter()}>New match (ALL DATA WILL BE RESET!)</Button>
			{/if}
		</div>
	</div>
{/if}
