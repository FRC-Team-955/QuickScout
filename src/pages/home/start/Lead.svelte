<script>
	import Button from "../../../components/Button.svelte";
	import {
		forceEndMatch,
		leadState,
		persistLeadState,
		signalMatchEnded,
		startMatch,
	} from "../../../queuing/lead.svelte";
	import { queuingState, serverState, removeFromQueue } from "../../../queuing/shared.svelte";

	/** @type {HTMLInputElement} */
	let fileInput;
	const fileReader = new FileReader();
	fileReader.addEventListener("load", () => {
		const content = fileReader.result.toString();
		console.log("got content", content);

		leadState.scouterIDMapping = {};

		const lines = content.trim().split("\n");
		console.log(lines.length);
		for (const line of lines) {
			const vals = line.split(",");
			console.log(vals.length);
			if (vals.length < 2) continue;
			leadState.scouterIDMapping[vals[0].trim()] = vals[1].trim();
		}

		persistLeadState();
	});
	function onFileChange() {
		if (fileInput.files.length > 0) {
			console.log("got file");
			fileReader.readAsText(fileInput.files[0]);
		}
	}
</script>

{#if !serverState.connected}
	<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>
{:else if !serverState.signedIn}
	<p>Connected to server, but not signed in as a lead. Try going into setup and fixing your login.</p>
{:else}
	<p>Connected to server and successfully signed in as a lead!</p>
{/if}

<Button onclick={() => fileInput.click()}>
	Import scouter ID map
	<input type="file" bind:this={fileInput} style="display: none" accept="text/csv" onchange={onFileChange} />
</Button>
<br />

<p>Scouters in scouter ID map: {Object.keys(leadState.scouterIDMapping).length}</p>

<Button onclick={() => alert("TODO")}>Export data</Button>
<br />

{#snippet scouter(id)}
	{leadState.scouterIDMapping[id] || "Unknown"} (ID: {id})
	{#if !(id in queuingState.connected) || !queuingState.connected[id]}
		<strong style="color: red">NOT CONNECTED</strong>
	{/if}
{/snippet}

{#if serverState.connected && serverState.signedIn}
	<h2>Connected Scouters</h2>
	<details>
		<summary>Expand</summary>
		{#each Object.keys(queuingState.connected).filter((key) => queuingState.connected[key]) as scouterID}
			<p>{@render scouter(scouterID)}</p>
		{/each}
	</details>

	<h2>Queue</h2>
	{#each Object.keys(queuingState.queue).sort((a, b) => queuingState.queue[a] - queuingState.queue[b]) as scouterID, index}
		<p>
			{index + 1}. {@render scouter(scouterID)}
			<Button onclick={() => removeFromQueue(scouterID)}>Remove from queue</Button>
		</p>
	{/each}

	{#if !queuingState.match.matchRunning}
		<h2>Match Configuration</h2>
		<label
			>Match Number: <input
				bind:value={() => leadState.matchConfig.matchNumber,
				(v) => (leadState.matchConfig.matchNumber = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />
		<label
			>Red 1: <input
				bind:value={() => leadState.matchConfig.red1,
				(v) => (leadState.matchConfig.red1 = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />
		<label
			>Red 2: <input
				bind:value={() => leadState.matchConfig.red2,
				(v) => (leadState.matchConfig.red2 = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />
		<label
			>Red 3: <input
				bind:value={() => leadState.matchConfig.red3,
				(v) => (leadState.matchConfig.red3 = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />
		<label
			>Blue 1: <input
				bind:value={() => leadState.matchConfig.blue1,
				(v) => (leadState.matchConfig.blue1 = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />
		<label
			>Blue 2: <input
				bind:value={() => leadState.matchConfig.blue2,
				(v) => (leadState.matchConfig.blue2 = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />
		<label
			>Blue 3: <input
				bind:value={() => leadState.matchConfig.blue3,
				(v) => (leadState.matchConfig.blue3 = Number.parseInt((v || "").toString()))}
				type="number"
			/></label
		>
		<br />

		{#if leadState.matchConfig.matchNumber.toString() in leadState.collectedMatchData}
			<p style="color: orange">
				<strong>There is already data for this match number. Things will most likely break.</strong>
			</p>
		{/if}

		<div>
			<Button
				onclick={() => startMatch()}
				disabled={Number.isNaN(leadState.matchConfig.matchNumber) ||
					Number.isNaN(leadState.matchConfig.red1) ||
					Number.isNaN(leadState.matchConfig.red2) ||
					Number.isNaN(leadState.matchConfig.red3) ||
					Number.isNaN(leadState.matchConfig.blue1) ||
					Number.isNaN(leadState.matchConfig.blue2) ||
					Number.isNaN(leadState.matchConfig.blue3)}>Start match with top six in queue</Button
			>
		</div>
	{:else}
		<h2>Match Info</h2>
		<p>Match Number: {queuingState.match.matchNumber}</p>
		{#each Object.keys(queuingState.match.objectiveScouters) as scouterID}
			<p>
				{@render scouter(scouterID)} - Team {queuingState.match.objectiveScouters[scouterID]} ({queuingState
					.match.teamAllianceColors[queuingState.match.objectiveScouters[scouterID]]})
			</p>
		{/each}

		{#if queuingState.match.matchEnded}
			<h2>Remaining Data</h2>
			{#each Object.keys(queuingState.match.objectiveScouters) as scouterID}
				{#if !(queuingState.match.matchNumber.toString() in leadState.collectedMatchData) || !(queuingState.match.objectiveScouters[scouterID].toString() in leadState.collectedMatchData[queuingState.match.matchNumber.toString()])}
					<p>
						{@render scouter(scouterID)} - {queuingState.match.objectiveScouters[scouterID]} ({queuingState
							.match.teamAllianceColors[queuingState.match.objectiveScouters[scouterID]]})
					</p>
				{/if}
			{/each}
			<div>
				<Button danger onclick={() => forceEndMatch()}
					>Force end match (not all scouters have submitted results)</Button
				>
			</div>
		{:else}
			<div>
				<Button onclick={() => signalMatchEnded()}
					>Signal match is ended and tell scouters to submit results</Button
				>
			</div>
		{/if}
	{/if}
{/if}
