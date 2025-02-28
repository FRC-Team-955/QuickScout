<script>
	import Button from "../../../components/Button.svelte";
	import { joinQueue } from "../../../queuing/scouter.svelte";
	import { queuingState, removeFromQueue, serverState } from "../../../queuing/shared.svelte";
	import { scouterInfo, persistScouterInfo, appState, setUIState } from "../../../state.svelte";

	let notInQueue = $derived(
		!(scouterInfo.scouterID in queuingState.queue) || !queuingState.queue[scouterInfo.scouterID],
	);
</script>

{#if !serverState.connected}
	<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>
{:else}
	<p>Connected to server!</p>
	{#if notInQueue}
		<Button onclick={() => joinQueue()}>Join Queue</Button>
		<br />
	{:else}
		{#if queuingState.queue[scouterInfo.scouterID] != -1}
			<p>
				Currently #{Object.keys(queuingState.queue)
					.sort((a, b) => queuingState.queue[a] - queuingState.queue[b])
					.indexOf(scouterInfo.scouterID) + 1} in queue
			</p>
		{/if}
		<Button onclick={() => removeFromQueue(scouterInfo.scouterID)}>Leave Queue</Button>
		<br />
	{/if}
	<br />
	<br />
	<br />
{/if}

{#if notInQueue}
	<Button danger onclick={() => setUIState("match")}>Start manual scouting</Button>
	<br />
{/if}
