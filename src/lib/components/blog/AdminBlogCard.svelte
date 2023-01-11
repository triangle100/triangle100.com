<script>
	import { createEventDispatcher } from "svelte";
	import Modal from "$lib/components/Modal.svelte";
	import tippy from "tippy.js";
	import "tippy.js/dist/tippy.css";
	import "tippy.js/animations/shift-away-subtle.css";

	const dispatch = createEventDispatcher();

	export let title;
	export let slug;
	let modal;

	function deletePost(slug) {
		modal.close();
		dispatch("deletePost", { slug });
	}

	const props = {
		content: title,
		duration: 200,
		animation: "shift-away-subtle",
		arrow: false,
	};
</script>

<div
	class="mx-auto mb-5 box-border flex h-16 flex-row items-center justify-between rounded border border-black bg-white px-5 dark:border-bluegray-700 dark:bg-bluegray-700"
>
	<div class="min-w-0">
		<h3 use:tippy={props} class="select-none truncate">
			{title}
		</h3>
	</div>
	<div
		class="min-w-fit select-none [&>*]:ml-3 [&>*]:select-auto [&>*]:border-none"
	>
		<a href={`blog/${slug}`}>View</a>
		<a href={`blog/${slug}/edit`}>Edit</a>
		<button
			class="link !text-bluegray-400 hover:!text-red-500"
			on:click={modal.open}
		>
			Delete
		</button>
	</div>
</div>

<Modal bind:this={modal}>
	<div class="text-center">
		<h2 class="m-0">Confirmation</h2>
		<p>
			Are you sure you want to delete this post?<br />
			This cannot be undone.
		</p>
		<button class="button" on:click={() => deletePost(slug)}>Delete</button>
	</div>
</Modal>
