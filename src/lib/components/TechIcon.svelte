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
        class="relative inline-flex items-center justify-center p-3 w-16 h-16 border-none bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 hover:scale-110 transition ease-in-out duration-300"
        on:click={openLink}
    >
        <Icon
            data={externalLink}
            class="absolute top-1 right-1 w-3.5 text-gray-400"
        />

        <RichImage {src} alt={label} />
    </button>
</div>
