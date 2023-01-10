<script>
	import RichImage from "$lib/components/RichImage.svelte";
	import { Icon } from "svelte-awesome";
	import externalLink from "svelte-awesome/icons/externalLink";
	import tippy from "tippy.js";
	import "tippy.js/dist/tippy.css";
	import "tippy.js/animations/shift-away-subtle.css";

	export let label;
	export let src;
	export let target;

	function openLink() {
		window.open(target, "_blank");
	}

	const props = {
		content: label,
		duration: 300,
		animation: "shift-away-subtle",
	};
</script>

<div use:tippy={props}>
	<button
		class="relative inline-flex h-16 w-16 items-center justify-center border-none bg-bluegray-100 p-3 transition duration-300 ease-in-out hover:scale-110 hover:bg-bluegray-200 dark:bg-bluegray-700 dark:hover:bg-bluegray-600"
		on:click={openLink}
	>
		<Icon
			data={externalLink}
			class="absolute top-1 right-1 w-3.5 text-bluegray-400"
		/>

		<RichImage {src} alt={label} />
	</button>
</div>
