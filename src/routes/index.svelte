<script>
    import Modal from "$lib/components/Modal.svelte";

    let modalOpen = false;

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<svelte:head>
    <title>triangle100</title>
    <meta
        name="description"
        content="I'm a fullstack hobbyist, game developer, and computer nerd that loves learning the ins and outs of new bleeding edge technology."
    />

    <meta property="og:title" content="triangle100" />
    <meta
        property="og:description"
        content="I'm a fullstack hobbyist, game developer, and computer nerd that loves learning the ins and outs of new bleeding edge technology."
    />
</svelte:head>

<div id="main">
    <h1>triangle100</h1>
    <p>Website is currently undergoing construction</p>

    <p>
        Meanwhile, you can check out this project's
        <span class="link" on:click={openModal}>tech stack</span>
    </p>
</div>

<Modal {modalOpen} on:closeModal={closeModal} />

<style lang="scss">
    h1 {
        margin: 0px;
    }
</style>
