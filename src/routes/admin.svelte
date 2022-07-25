<script>
    import { signOut } from "$lib/services/firebase";
    import { _user } from "$lib/stores/userStore";
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";

    let user;
    _user.subscribe((value) => {
        user = value;
    });

    let loggedIn;
    $: loggedIn = !!user;
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>Welcome, <b>{user.email}</b></p>
    <button on:click={signOut}>Sign Out</button>
{:else}
    <AdminLogin />
{/if}
