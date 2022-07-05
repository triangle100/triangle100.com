<script>
    import SEO from "$lib/components/SEO.svelte";
    import Modal from "$lib/components/Modal/Modal.svelte";

    let modalOpen = false;

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<SEO title="triangle100" description="" />

<div id="container">
    <h1>triangle100</h1>
    <p>Website is currently undergoing construction</p>

    <p>Meanwhile, you can check out this project's <span class="link" on:click={openModal}>tech stack</span></p>
</div>

<Modal modalOpen={modalOpen} on:closeModal={closeModal} />

<style>
    h1 {
        margin: 0px;
    }

    #container {
        text-align: center;
        margin-top: 20px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
    }

    .link {
        border-bottom: 2px dotted; 
        color: rgb(85, 130, 255);
        cursor: pointer;
    }
</style>
