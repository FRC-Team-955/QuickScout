<script>
	import { matchData, uiState } from "../../state.svelte";

	import cages from "../../assets/cages.png";
</script>

<h2>Endgame</h2>

<label>
	Barge:
	<select bind:value={matchData.endgame.barge}>
		<option value="none">None</option>
		<option value="park">Park</option>
		<option value="shallowCage">Shallow cage climb</option>
		<option value="deepCage">Deep cage climb</option>
	</select>
</label>
<br />
<img src={cages} alt="Barge with cage levels indicated" />
<br />

<br />
<button onclick={() => (uiState.teleopEntered = false)}>Previous (Teleop)</button>
<button onclick={() => (uiState.endgameEntered = true)} disabled={matchData.endgame.barge == null}>Next (Postmatch)</button>

<style>
	img {
		max-width: 50%;
	}
</style>
