<script>
    import { fly, fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import TechIcon from "$lib/components/TechIcon.svelte";

    const dispatch = createEventDispatcher();
    export let open;

    export function closeModal() {
        open = false;
        dispatch("closeModal", { open });
    }
</script>

{#if open}
    <div out:fade>
        <div
            class="fixed z-10 top-0 left-0 w-screen h-screen bg-black bg-opacity-20"
            in:fade
            on:click={closeModal}
        />
        <div
            class="fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl px-8 py-6"
            in:fly={{ y: 25, duration: 500 }}
        >
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
        </div>
    </div>
{/if}
