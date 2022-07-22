<script>
    import SEO from "$lib/components/SEO.svelte";
    import Modal from "$lib/components/Modal.svelte";

    let modalOpen = false;

    function openModal() {
        modalOpen = true;
    }

    function closeModal() {
        modalOpen = false;
    }
</script>

<SEO />

<main>
    <h1>triangle100</h1>
    <p>Website is currently undergoing construction</p>

    <p>
        Meanwhile, you can check out this project's
        <span class="link" on:click={openModal}>tech stack</span>
    </p>
</main>

<Modal {modalOpen} on:closeModal={closeModal} />
