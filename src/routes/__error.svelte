<script context="module">
    /** @type {import('@sveltejs/kit').Load} */
    export function load({ error, status }) {
        return {
            props: { error, status },
        };
    }
</script>

<script>
    /** @type {number} */
    export let status;

    /** @type {Error & {frame?: string} & {loc?: object}} */
    export let error;
</script>

<div id="container">
    <h1>{status}</h1>
    <h2>{error.message}</h2>

    {#if error.frame}
        <pre>{error.frame}</pre>
    {/if}
    {#if error.stack}
        <pre>{error.stack}</pre>
    {/if}
</div>

<style>
    h1, h2 {
        text-align: center;
        margin: 0px;
    }

    #container {
        margin-top: 20px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
    }
</style>
