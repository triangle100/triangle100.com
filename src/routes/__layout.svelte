<script>
    import "../app.css";
    import "$lib/services/firebase/auth";
    import SEO from "$lib/components/SEO.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
    import BuildNumber from "$lib/components/BuildNumber.svelte";
    import "highlight.js/styles/stackoverflow-light.css";
</script>

<SEO />

<main class="relative text-center w-[60vw] h-screen mx-auto flex flex-col">
    <Navbar />
    <slot />

    <div class="h-12" />
    <div class="absolute bottom-1 left-1/2 -translate-x-1/2 w-full text-center">
        <span>
            Build
            <a
                href="https://github.com/triangle100/triangle100-com/releases"
                target="_blank"
            >
                <BuildNumber />
            </a>
        </span>
    </div>
</main>
