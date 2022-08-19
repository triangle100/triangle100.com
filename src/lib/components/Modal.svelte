<script>
    import { fade } from "svelte/transition";

    export let state = false;

    export function close() {
        state = false;
    }

    export function open() {
        state = true;
    }
</script>

{#if state}
    <div class="fixed z-40 top-0 left-0 w-screen h-screen">
        <div transition:fade={{ duration: 300 }}>
            <div
                class="w-screen h-screen bg-black bg-opacity-20"
                on:click={close}
            />
            <div
                class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-0 bg-white dark:bg-neutral-800 drop-shadow-xl rounded-2xl px-8 py-6"
            >
                <slot />
            </div>
        </div>
    </div>
{/if}
