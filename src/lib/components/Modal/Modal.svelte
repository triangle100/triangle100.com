<script>
    import { fly, fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import ToolIcon from "$lib/components/ToolIcon.svelte";

    const dispatch = createEventDispatcher();

    /** @type {boolean} */
    export let modalOpen;

    function closeModal() {
        modalOpen = false;
        dispatch("closeModal", { modalOpen });
    }
</script>

{#if modalOpen}
    <div out:fade>
        <div id="background" in:fade on:click={closeModal} />
        <div id="modal" in:fly={{ y: 25, duration: 500 }}>
            <h2>Tech Stack</h2>
            <div id="tool-icons">
                <ToolIcon
                    label="Firebase"
                    src="https://static.cdnlogo.com/logos/f/11/firebase.svg"
                    target="https://firebase.google.com/"
                />
                <ToolIcon
                    label="GCP"
                    src="https://static.cdnlogo.com/logos/g/1/google-cloud.svg"
                    target="https://cloud.google.com/"
                />
                <ToolIcon
                    label="Svelte"
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
                    target="https://svelte.dev/"
                />
                <ToolIcon
                    label="Sass"
                    src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
                    target="https://sass-lang.com/"
                />
                <ToolIcon
                    label="Vite"
                    src="https://vitejs.dev/logo.svg"
                    target="https://vitejs.dev/"
                />
                <ToolIcon
                    label="Node.js"
                    src="https://static.cdnlogo.com/logos/n/94/nodejs-icon.svg"
                    target="https://nodejs.dev/"
                />
            </div>
        </div>
    </div>
{/if}

<svelte:window
    on:keydown={(e) => {
        if (e.code == "Escape") {
            closeModal();
        }
    }}
/>

<style lang="scss">
    #background {
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.2);
    }

    #modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        z-index: 2;
        padding: 10px 20px;
        text-align: center;

        background: white;
        box-shadow: 0px 0px 50px 15px rgba(0, 0, 0, 0.1);
        border-radius: 15px;

        h2 {
            margin-top: 10px;
        }
    }

    #tool-icons {
        user-select: none;
    }
</style>
