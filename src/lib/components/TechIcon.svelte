<script>
    import { Button, Tooltip } from "flowbite-svelte";
    import RichImage from "$lib/components/RichImage.svelte";
    import { Icon } from "svelte-awesome";
    import externalLink from "svelte-awesome/icons/externalLink";

    export let label;
    export let src;
    export let target;

    function openLink() {
        window.open(target, "_blank");
    }
</script>

<Tooltip content={label}>
    <Button
        class="!p-3 w-16 h-16 !bg-gray-100 hover:!bg-gray-200 hover:scale-110 transition ease-in-out duration-300 !ring-0 relative"
        on:click={openLink}
    >
        <Icon
            data={externalLink}
            class="absolute top-1 right-1 w-3.5 text-gray-400"
        />

        <RichImage {src} alt={label} />
    </Button>
</Tooltip>
