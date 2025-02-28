<script>
	import { Check, X } from "lucide-svelte";
	import Button from "./Button.svelte";

	let { children, value = $bindable() } = $props();
</script>

<Button success={value} danger={!value} icon={value ? Check : X} onclick={() => (value = !value)}
	>{@render children()}</Button
>
