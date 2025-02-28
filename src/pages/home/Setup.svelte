<script>
	import { scouterInfo, persistScouterInfo, appState } from "../../state.svelte";

	import textlogo from "../../assets/text-logo-removebg.png";
	import { tryToSignIn } from "../../queuing/lead.svelte";
	import Button from "../../components/Button.svelte";
</script>

<div class="header">
	<img src={textlogo} class="header__img" alt="QuickScout" />
</div>

<div class="contents">
	<h1>Setup</h1>

	<label>
		Scouter ID: <input
			class="input"
			bind:value={() => scouterInfo.scouterID,
			(v) => {
				scouterInfo.scouterID = v.toUpperCase();
				if (!scouterInfo.scouterID.startsWith("LE")) {
					scouterInfo.scouterID = scouterInfo.scouterID.slice(0, 2);
				}
				persistScouterInfo();
			}}
		/>
	</label>

	{#if scouterInfo.scouterID == "LEAD"}
		<br />

		<label>
			Email: <input
				class="input"
				bind:value={() => scouterInfo.email,
				(v) => {
					scouterInfo.email = v;
					persistScouterInfo();
				}}
			/>
		</label>
		<br />

		<label>
			Password: <input
				class="input"
				bind:value={() => scouterInfo.password,
				(v) => {
					scouterInfo.password = v;
					persistScouterInfo();
				}}
			/>
		</label>
		<br />
	{:else}
		<p>Scouter IDs should be a single letter followed by a single number.</p>
		<p>
			Your scouter ID should be on your role badge. If you don't know it, please ask your scouting lead for your
			scouter ID.
		</p>
	{/if}

	<Button
		onclick={() => {
			tryToSignIn();
			appState.homeState = "start";
		}}
		disabled={scouterInfo.scouterID.length > 2
			? scouterInfo.email.length == 0 || scouterInfo.password.length == 0
			: !/[A-Z][0-9]$/.test(scouterInfo.scouterID)}>Complete Setup</Button
	>
</div>
