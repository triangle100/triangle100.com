<script>
	import "../app.css";
	import "$lib/services/firebase/auth";
	import SEO from "$lib/components/SEO.svelte";
	import Navbar from "$lib/components/Navbar.svelte";
	import Modal from "$lib/components/Modal.svelte";
	import "highlight.js/styles/stackoverflow-light.css";
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
