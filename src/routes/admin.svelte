<script>
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";

    let loggedIn = false;

    function handleChange(e) {
        console.log("form changed!", e);
    }

    function onSubmit(e) {
        e.preventDefault();

        console.log("submitted", e);
    }
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>:)</p>
{:else}
    <AdminLogin />
{/if}
