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
		"https://discord.com/api/webhooks/1059488740034236537/srkd43KCsE78AWRBBfL-" +
			"D9drjMVcEaEOfIaPzSg6bh4Eyehq6QiDp4_281dLhHNrqa99"
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
	class="relative mx-auto flex min-h-screen flex-col text-center max-w-[1150px] px-10"
>
	<Navbar />
	<div>
		<slot />
	</div>
</main>

<Modal bind:this={oldLinkModal}>
	<div class="flex w-80 flex-col gap-6 py-2 text-center">
		<div class="flex flex-col gap-3">
			<h2 class="m-0 font-bold text-violet-500">
				You found an outdated link!
			</h2>
			<span>
				Please let me know how you got here so I can update the link
				wherever it is
			</span>
		</div>
		<form on:submit|preventDefault={handleSubmit}>
			<div class="relative flex h-10 rounded-md">
				<input
					type="text"
					name="input"
					placeholder="i.e. Twitter profile"
					class="form-input block w-full rounded-md bg-bluegray-100 py-2 px-3 font-bold"
				/>
				<button
					type="submit"
					class="group absolute top-0 right-0 m-1.5 rounded-md border-0 p-1 transition-colors hover:bg-green-500"
				>
					<svg
						fill="currentColor"
						viewBox="0 0 20 20"
						class="h-5 w-5 text-green-500 transition-colors group-hover:text-white"
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
