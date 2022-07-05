<script>
    import Image from "$lib/components/Image.svelte";

    export let label;
    export let src;
    export let target;

    function openLink() {
        window.open(target, "_blank");
    }
</script>

<div id="icon" on:click={openLink} title={label}>
    <Image {src} alt={label} />
    <span class="aligner"></span>
</div>

<style lang="scss">
    #icon {
        display: inline-block;
        margin: 0px 5px;
        padding: 10px;
        white-space: nowrap;

        border-radius: 10px;
        width: 45px;
        height: 45px;
        background-color: rgba(0, 0, 0, 0.05);

        cursor: pointer;
        white-space: nowrap;
        text-align: center;
        
        .aligner {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
        }

        &:hover {
            filter: brightness(90%);
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
</style>
