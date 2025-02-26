<script>
	import { forceEndMatch, leadState, queuingState, removeFromQueue, serverState, signalMatchEnded, startMatch } from "../../../queuing.svelte";
	import { scouterInfo, persistScouterInfo, appState, setUIState } from "../../../state.svelte";
</script>

{#if !serverState.connected}
	<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>
{:else if !serverState.signedIn}
	<p>Connected to server, but not signed in as a lead. Try going into setup and fixing your login.</p>
{:else}
	<p>Connected to server and successfully signed in as a lead!</p>
{/if}

<button class="standard-button" onclick={() => alert("TODO")}>Import scouter ID map</button>
<br />

<button class="standard-button" onclick={() => alert("TODO")}>Export data</button>
<br />

{#if serverState.connected && serverState.signedIn}
	<h2>Connected Scouters</h2>
	<details>
		<summary>Expand</summary>
		{#each Object.keys(queuingState.connected).filter((key) => queuingState.connected[key]) as scouter}
			<p>{leadState.scouterIDMapping[scouter] || "Unknown"} (ID: {scouter})</p>
		{/each}
	</details>

	<h2>Queue</h2>
	{#each Object.keys(queuingState.queue).sort((a, b) => queuingState.queue[a] - queuingState.queue[b]) as scouterID, index}
		<p>
			{index + 1}. {leadState.scouterIDMapping[scouterID] || "Unknown"} (ID: {scouterID})
			{#if !(scouterID in queuingState.connected) || !queuingState.connected[scouterID]}
				<strong>NOT CONNECTED</strong>
			{/if}
			<button class="standard-button" onclick={() => removeFromQueue(scouterID)}>Remove from queue</button>
		</p>
	{/each}

	{#if !queuingState.match.matchRunning}
		<h2>Match Configuration</h2>
		<label>Match Number: <input bind:value={() => leadState.matchConfig.matchNumber, (v) => (leadState.matchConfig.matchNumber = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />
		<label>Red 1: <input bind:value={() => leadState.matchConfig.red1, (v) => (leadState.matchConfig.red1 = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />
		<label>Red 2: <input bind:value={() => leadState.matchConfig.red2, (v) => (leadState.matchConfig.red2 = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />
		<label>Red 3: <input bind:value={() => leadState.matchConfig.red3, (v) => (leadState.matchConfig.red3 = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />
		<label>Blue 1: <input bind:value={() => leadState.matchConfig.blue1, (v) => (leadState.matchConfig.blue1 = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />
		<label>Blue 2: <input bind:value={() => leadState.matchConfig.blue2, (v) => (leadState.matchConfig.blue2 = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />
		<label>Blue 3: <input bind:value={() => leadState.matchConfig.blue3, (v) => (leadState.matchConfig.blue3 = Number.parseInt((v || "").toString()))} type="number" /></label>
		<br />

		<div>
			<button
				class="standard-button"
				onclick={() => startMatch()}
				disabled={Number.isNaN(leadState.matchConfig.matchNumber) ||
					Number.isNaN(leadState.matchConfig.red1) ||
					Number.isNaN(leadState.matchConfig.red2) ||
					Number.isNaN(leadState.matchConfig.red3) ||
					Number.isNaN(leadState.matchConfig.blue1) ||
					Number.isNaN(leadState.matchConfig.blue2) ||
					Number.isNaN(leadState.matchConfig.blue3)}>Start match with top six in queue</button
			>
		</div>
	{:else}
		<h2>Match Info</h2>
		<p>Match Number: {queuingState.match.matchNumber}</p>
		{#each Object.keys(queuingState.match.objectiveScouters) as scouter}
			<p>
				{leadState.scouterIDMapping[scouter] || "Unknown"} (ID: {scouter}) - {queuingState.match.objectiveScouters[scouter]} ({queuingState.match.teamAllianceColors[
					queuingState.match.objectiveScouters[scouter]
				]})
			</p>
		{/each}

		{#if queuingState.match.matchEnded}
			<h2>Remaining Data</h2>
			<!-- {#each Object.keys(queuingState.match.objectiveScouters) as scouter}
				<p>
					{leadState.scouterIDMapping[scouter] || "Unknown"} (ID: {scouter}) - {queuingState.match.objectiveScouters[scouter]} ({queuingState.match.teamAllianceColors[
						queuingState.match.objectiveScouters[scouter]
					]})
				</p>
			{/each} -->
			<div>
				<button class="standard-button standard-button--danger" onclick={() => forceEndMatch()}>Force end match (not all scouters have submitted results)</button>
			</div>
		{:else}
			<div>
				<button class="standard-button" onclick={() => signalMatchEnded()}>Signal match is ended and allow scouters to submit results</button>
			</div>
		{/if}
	{/if}
{/if}
