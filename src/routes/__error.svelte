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

    <div id="error-text">
        {#if error.frame}
            <pre>{error.frame}</pre>
        {/if}
        {#if error.stack}
            <pre>{error.stack}</pre>
        {/if}
    </div>
</div>

<style lang="scss">
    h1,
    h2 {
        text-align: center;
        margin: 0px;
    }

    #container {
        text-align: left;

        #error-text {
            margin: 0px auto;
            max-width: 80%;
            overflow-y: scroll;
        }
    }
</style>
