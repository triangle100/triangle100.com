<script>
    import { signOut } from "$lib/services/firebase";
    import { user } from "$lib/stores/userStore";
    import { get } from "svelte/store";
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";

    let loggedIn = !!get(user);
    user.subscribe((value) => {
        loggedIn = !!value;
    });
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>:)</p>
    <button on:click={signOut}>Sign Out</button>
{:else}
    <AdminLogin />
{/if}
