<script>
	import { toSVGString } from "../third-party/node-qrcode/lib/browser";

	import { scouterInfo, matchData, uiState } from "../state.svelte";

	const STATES = Object.freeze({
		NOT_CHOSEN: 0,
		CHOSE_ONLINE: 1,
		CHOSE_QRCODE: 2,
	});
	/** @type {number} **/
	let state = $state(STATES.NOT_CHOSEN);

	function objectValuesDeep(object) {
		let allValues = [];
		for (const value of Object.values(object)) {
			if (typeof value == "object") {
				allValues = [...allValues, ...objectValuesDeep(value)];
			} else {
				allValues.push(value);
			}
		}
		return allValues;
	}

	const allValues = [
		// ensure order
		...objectValuesDeep(scouterInfo),
		...objectValuesDeep(matchData.metadata),
		...objectValuesDeep(matchData.prematch),
		...objectValuesDeep(matchData.autonomous),
		...objectValuesDeep(matchData.teleop),
		...objectValuesDeep(matchData.endgame),
		...objectValuesDeep(matchData.postmatch),
	];
	let svg = toSVGString(allValues.join("\t"), {
		style: "width: 100%",
		margin: 0,
	});
</script>

<h2>Export match</h2>

{#if state == STATES.CHOSE_QRCODE}
	{@html svg}
	<br />
	<br />
	<button onclick={() => (state = STATES.NOT_CHOSEN)}>Back</button>
{:else if state == STATES.CHOSE_ONLINE}
	<p>Sorry, not supported yet</p>
	<br />
	<button onclick={() => (state = STATES.NOT_CHOSEN)}>Back</button>
{:else}
	<button onclick={() => (state = STATES.CHOSE_ONLINE)}>Export via the internet</button>
	<br />
	<button onclick={() => (state = STATES.CHOSE_QRCODE)}>Export via QR code</button>
	<br />
	<br />
	<button onclick={() => (uiState.postmatchEntered = false)}>Previous (Postmatch)</button>
	<button class="danger" onclick={() => location.reload()}>New match (ALL DATA WILL BE RESET!)</button>
{/if}
