<script>
    import { Button, Tooltip } from "flowbite-svelte";
    import RichImage from "$lib/components/RichImage.svelte";

    export let label;
    export let src;
    export let target;

    function openLink() {
        window.open(target, "_blank");
    }
</script>

<Tooltip content={label}>
    <Button
        class="!p-3 w-16 h-16 !bg-gray-100 hover:!bg-gray-200 hover:scale-110 transition ease-in-out duration-300 !ring-0"
        on:click={openLink}
    >
        <RichImage {src} alt={label} />
    </Button>
</Tooltip>
