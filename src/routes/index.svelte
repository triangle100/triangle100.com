<script>
    import SEO from "$lib/components/SEO.svelte";
    import TechStackModal from "$lib/components/TechStackModal.svelte";

    let open;
</script>

<SEO />

<h1>triangle100</h1>
<p>Website is currently undergoing construction</p>

<p>
    Meanwhile, you can check out this project's
    <span class="link" on:click={() => (open = true)}>tech stack</span>
</p>

<TechStackModal {open} on:closeModal={() => (open = false)} />
