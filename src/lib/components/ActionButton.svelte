<script>
    export let action;
    export let actionText;
    export let buttonClass = null;
</script>

<button on:click disabled={action} class={buttonClass}>
    {#if action}
        {actionText}
    {:else}
        <slot />
    {/if}
</button>
