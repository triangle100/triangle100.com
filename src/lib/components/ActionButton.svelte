<script>
    export let action;
    export let actionText;
    export let id = null;
</script>

<button on:click disabled={action} {id}>
    {#if action}
        {actionText}
    {:else}
        <slot />
    {/if}
</button>
