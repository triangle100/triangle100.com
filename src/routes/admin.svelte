<script>
    import { signOut } from "$lib/services/firebase";
    import { user } from "$lib/stores/userStore";
    import SEO from "$lib/components/SEO.svelte";
    import AdminLogin from "$lib/components/AdminLogin.svelte";

    $: loggedIn = !!$user;

    function handleContentInput() {
        const el = document.getElementById("content");
        // @ts-ignore
        const val = el.value.replace(/\n/g, "\\n");

        console.log(val);
        document.getElementById("preview").innerHTML = val;
    }
</script>

<SEO title="Admin Console" desc="Admin Console" />

<h1>{loggedIn ? "Admin Console" : "Admin Login"}</h1>

{#if loggedIn}
    <p>Welcome, <b>{$user.email}</b></p>
    <button on:click={signOut}>Sign Out</button>

    <div id="inputs">
        <input type="text" id="title" placeholder="Title" />
        <textarea id="content" placeholder="Content" rows="15" cols="50" maxlength="2000" on:input={handleContentInput} />
        <button>Post</button>
    </div>
    <div id="preview">

    </div>
{:else}
    <AdminLogin />
{/if}

<style lang="scss">
    #inputs {
        margin: 50px 0px;

        #title {
            margin-bottom: 5px;
        }

        #content {
            margin-bottom: 15px;
            resize: none;
        }

        button {
            width: min-content;
            float: right;
        }
    }

    #inputs * {
        width: 100%;
        box-sizing: border-box;
    }
</style>
