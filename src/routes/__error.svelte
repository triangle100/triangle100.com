<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
        return {
            props: { error, status },
        };
    }
</script>

<script>
    import SEO from "$lib/components/SEO.svelte";

    /** @type {number} */
    export let status;

    /** @type {Error & {frame?: string} & {loc?: object}} */
    export let error;
</script>

<SEO title="triangle100 - {status}" />

<div id="container">
    <h1>{status}</h1>
    <h2>{error.message}</h2>

    <div id="error-text">
        {#if error.frame}
            <pre>{error.frame}</pre>
        {/if}
        {#if error.stack}
            <pre>{error.stack}</pre>
        {/if}
    </div>
    <p>Return to <a href="/">Home</a></p>
</div>

<style lang="scss">
    h1 {
        margin-bottom: 0px;
    }

    h2 {
        margin-top: 0px;
    }

    #container {
        text-align: center;

        #error-text {
            text-align: left;

            margin: 0px auto;
            max-width: 80%;
            max-height: 50vh;
            overflow-y: scroll;
        }
    }
</style>
