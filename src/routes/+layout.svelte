<script>
	import "../app.css";
	import "$lib/services/firebase/auth";
	import SEO from "$lib/components/SEO.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import "highlight.js/styles/stackoverflow-light.css";
	import { page } from "$app/stores";
	import webhook from "webhook-discord";
	import { onMount } from "svelte";

	const hook = new webhook.Webhook(
		("https://discord.com/api/webhooks/1059488740034236537/srkd43KCsE78AWRBBfL-" + "D9drjMVcEaEOfIaPzSg6bh4Eyehq6QiDp4_281dLhHNrqa99")
	); // I don't care ¯\_(ツ)_/¯
	const isOldLink = $page.url.searchParams.has("oldurl");
	let oldLinkModal;

	onMount(() => {
		if (isOldLink) {
			oldLinkModal.open();

			$page.url.searchParams.delete("oldurl");
			const newStr = $page.url.searchParams.toString();
			window.history.replaceState(
				{},
				"",
				window.location.pathname + `${newStr ? `?${newStr}` : ""}`
			);
		}
	});

	function handleSubmit(e) {
		oldLinkModal.close();
		const data = new FormData(e.target);
		const res = [...data.entries()]?.[0][1];
		if (res.trim() != "") {
			console.log(`Submitted report!`);
			hook.warn(
				"triangle100.com report",
				`Someone has reported an old link!\nReported location: \`${res}\``
			);
		}
	}
</script>

<SEO />

<main
	class="relative text-center lg:w-[60vw] md:w-[95vw] min-h-screen mx-auto flex flex-col"
>
	<Navbar />
	<div>
		<slot />
	</div>
</main>

<Modal bind:this={oldLinkModal}>
	<div class="text-center w-80 py-2 flex flex-col gap-6">
		<div class="flex flex-col gap-3">
			<h2 class="text-yellow-300 font-bold m-0">
				You found an outdated link!
			</h2>
			<span>
				Please let me know how you got here so I can update the link
				wherever it is
			</span>
		</div>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="relative rounded-md flex h-10">
				<input
					type="text"
					name="input"
					placeholder="i.e. Twitter profile"
					class="form-input block w-full py-2 px-3 rounded-md bg-neutral-100 text-neutral-800 font-bold"
				/>
				<button
					type="submit"
					class="absolute top-0 right-0 m-1.5 p-1 border-0 hover:bg-green-500 group transition-colors"
				>
					<svg
						fill="currentColor"
						viewBox="0 0 20 20"
						class="w-5 h-5 text-green-500 group-hover:text-white transition-colors"
					>
						<path
							d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM6.7 9.29L9 11.6l4.3-4.3 1.4 1.42L9 14.4l-3.7-3.7 1.4-1.42z"
						/>
					</svg>
				</button>
			</div>
		</form>
	</div>
</Modal>
