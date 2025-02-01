<script>
	import { scouterInfo, endStartScreen } from "../state.svelte";
</script>

<h1>QuickScout</h1>

<label>First initial: <input bind:value={() => scouterInfo.firstInitial, (v) => (scouterInfo.firstInitial = v.toUpperCase())} maxLength={1} /></label>
<br />
<label>Last initial: <input bind:value={() => scouterInfo.lastInitial, (v) => (scouterInfo.lastInitial = v.toUpperCase())} maxLength={1} /></label>
<br />
<button onclick={() => (endStartScreen())} disabled={scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}>Start match</button>