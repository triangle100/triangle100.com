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
        class="!p-3 w-16 h-16 !bg-gray-100 hover:!bg-gray-200 hover:scale-110 transition ease-in-out duration-300 !ring-0 relative"
        on:click={openLink}
    >
        <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg=="
            alt="New tab"
            class="absolute top-1 right-1"
        />
        <RichImage {src} alt={label} />
    </Button>
</Tooltip>
