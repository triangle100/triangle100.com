<script>
    import "../app.css";
    import "$lib/services/firebase/auth";
    import SEO from "$lib/components/SEO.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import "highlight.js/styles/stackoverflow-light.css";
</script>

<SEO />

<main class="relative text-center w-[60vw] min-h-screen mx-auto flex flex-col">
    <Navbar />
    <div>
        <slot />
    </div>
</main>
