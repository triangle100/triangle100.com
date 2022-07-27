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

<SEO title={status.toString()} />

{#if status == 404}
    <h1>Page not found!</h1>
    <h3>Sorry, I couldn't find the page you requested.</h3>
    <p>
        Check your spelling and try again. If you believe something is supposed
        to be here, you can <a href="/contact" target="_blank">contact</a> me.
    </p>
{:else}
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
    <p>
        If you believe this error is my fault, you can <a
            href="/contact"
            target="_blank">contact</a
        > me.
    </p>
{/if}

<p>Return to <a href="/">Home</a></p>

<style lang="scss">
    #error-text {
        text-align: left;

        margin: 0px auto;
        max-width: 80%;
        max-height: 50vh;
        overflow-y: auto;
    }
</style>
