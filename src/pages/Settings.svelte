<script>
    import { scouterInfo, updateScouterInfo } from "../state.svelte";
</script>

<h1>Settings</h1>

<label>First name: <input bind:value={() => scouterInfo.firstInitial, (v) => (scouterInfo.firstInitial = v.toUpperCase())}/></label>
<br />
<label>Last initial: <input bind:value={() => scouterInfo.lastInitial, (v) => (scouterInfo.lastInitial = v.toUpperCase())} maxLength={1} /></label>
<br />
<button onclick={() => (updateScouterInfo())}
    disabled={scouterInfo.firstInitial.length == 0 || scouterInfo.lastInitial.length == 0}>
        Save
</button>