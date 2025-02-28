<script>
	import { scouterState } from "../../queuing/scouter.svelte";
	import { serverState } from "../../queuing/shared.svelte";
	import { matchData } from "../../state.svelte";
</script>

<h2>Scouting Team {matchData.metadata.teamNumber} ({matchData.metadata.alliance} alliance)</h2>

{#if scouterState.isInOnlineMatch && scouterState.matchEndSignaled}
	<h3 style="color: orange">
		Scouting lead has signaled that the match is ended. Please finalize and upload your data.
	</h3>
{/if}

{#if scouterState.isInOnlineMatch && !serverState.connected}
	<h3 style="color: orange">
		You are not connected to the server. You can continue scouting but you must export via QR code.
	</h3>
{/if}
