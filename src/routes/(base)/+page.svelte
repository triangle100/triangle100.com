<script>
	import SEO from "$lib/components/SEO.svelte";
	import TechIcon from "$lib/components/TechIcon.svelte";
	import Modal from "$lib/components/Modal.svelte";

	let modal;
</script>

<SEO />

<h1>triangle100</h1>
<p>
	Website is currently undergoing construction.<br />
	Meanwhile, you can check out this project's tech stack below.
</p>

<button class="button" on:click={modal.open}>View tech stack</button>

<Modal bind:this={modal}>
	<div class="text-center">
		<h2 class="m-0">Tech Stack</h2>
		<p>These are the tools I'm using for this WIP fullstack project</p>
		<div class="mt-4 flex justify-center gap-x-3">
			<TechIcon
				label="Firebase"
				src="https://static.cdnlogo.com/logos/f/11/firebase.svg"
				target="https://firebase.google.com/"
			/>
			<TechIcon
				label="Netlify"
				src="https://www.netlify.com/v3/img/components/logomark.svg"
				target="https://www.netlify.com/"
			/>
			<TechIcon
				label="Svelte"
				src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
				target="https://svelte.dev/"
			/>
			<TechIcon
				label="Tailwind"
				src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
				target="https://tailwindcss.com/"
			/>
			<TechIcon
				label="Vite"
				src="https://vitejs.dev/logo.svg"
				target="https://vitejs.dev/"
			/>
			<TechIcon
				label="Node.js"
				src="https://static.cdnlogo.com/logos/n/94/nodejs-icon.svg"
				target="https://nodejs.dev/"
			/>
		</div>
	</div>
</Modal>
