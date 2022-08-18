<script>
    import SEO from "$lib/components/SEO.svelte";
    import TechIcon from "$lib/components/TechIcon.svelte";
    import Modal from "$lib/components/Modal.svelte";

    let modal;
</script>

<SEO />

<h1>triangle100</h1>
<p>Website is currently undergoing construction</p>

<p>
    Meanwhile, you can check out this project's
    <span class="link" on:click={modal.open}>tech stack</span>
</p>

<Modal bind:this={modal}>
    <div class="text-center">
        <h2 class="m-0">Tech Stack</h2>
        <p>I'm using these tools for my WIP fullstack project.</p>
        <div class="mt-4 flex justify-center gap-x-3">
            <TechIcon
                label="Firebase"
                src="https://static.cdnlogo.com/logos/f/11/firebase.svg"
                target="https://firebase.google.com/"
            />
            <TechIcon
                label="Svelte"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                target="https://svelte.dev/"
            />
            <TechIcon
                label="Sass"
                src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
                target="https://sass-lang.com/"
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

