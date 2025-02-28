<script>
	import { derived } from "svelte/store";

	let {
		children,
		onclick,
		disabled = false,
		danger = false,
		success = false,
		footer = false,
		headerRight = false,
		extraClasses = "",
		icon = null,
	} = $props();

	let classes = $derived.by(() => {
		const classes = [extraClasses, "standard-button"];
		if (danger) classes.push("standard-button--danger");
		if (success) classes.push("standard-button--success");
		if (footer) classes.push("footer__button");
		if (headerRight) classes.push("header--right");
		return classes.join(" ");
	});
</script>

<button class={classes} {onclick} {disabled}>
	{#if icon != null}
		{@const Icon = icon}
		<Icon size="1lh" style="vertical-align: top" />
	{/if}
	{@render children()}
</button>
