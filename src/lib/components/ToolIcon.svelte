<script>
    import Image from "$lib/components/Image.svelte";
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
        duration: 200,
        animation: "shift-away-subtle",
    };
</script>

<div id="icon" on:click={openLink} use:tippy={props}>
    <Image {src} alt={label} />
    <span class="aligner" />
</div>

<style lang="scss">
    * {
        user-select: none;
    }

    #icon {
        display: inline-block;
        margin: 5px 5px;
        padding: 10px;
        white-space: nowrap;

        border-radius: 10px;
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0.05);

        cursor: pointer;
        white-space: nowrap;
        text-align: center;

        transition: all 200ms ease-in-out;

        .aligner {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);

            transform: scale(1.05);
        }
    }
</style>
