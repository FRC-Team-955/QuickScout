<script>
	import { joinQueue } from "../../../queuing/scouter.svelte";
	import { queuingState, removeFromQueue, serverState } from "../../../queuing/shared.svelte";
	import { scouterInfo, persistScouterInfo, appState, setUIState } from "../../../state.svelte";
</script>

{#if !serverState.connected}
	<p>Not connected to server. Check your internet connection and reload (quit and reopen) the app.</p>
{:else}
	<p>Connected to server!</p>
	{#if !(scouterInfo.scouterID in queuingState.queue) || !queuingState.queue[scouterInfo.scouterID]}
		<button class="standard-button" onclick={() => joinQueue()}>Join Queue</button>
		<br />
	{:else}
		{#if queuingState.queue[scouterInfo.scouterID] != -1}
			<p>
				Currently #{Object.keys(queuingState.queue)
					.sort((a, b) => queuingState.queue[a] - queuingState.queue[b])
					.indexOf(scouterInfo.scouterID) + 1} in queue
			</p>
		{/if}
		<button class="standard-button" onclick={() => removeFromQueue(scouterInfo.scouterID)}>Leave Queue</button>
		<br />
	{/if}
	<br />
	<br />
	<br />
{/if}

<button class="standard-button standard-button--danger" onclick={() => setUIState("match")}>Start manual scouting</button>
<br />
