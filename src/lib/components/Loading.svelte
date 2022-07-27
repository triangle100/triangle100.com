<script>
    import loadingGif from "$lib/assets/loading.gif";

    export let size = "70";
    export let id = null;
</script>

<img {id} class="loading" src={loadingGif} alt="Loading..." style="--size: {size+"px"}" />

<style lang="scss">
    .loading {
        width: var(--size);
    }
</style>
