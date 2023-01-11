<script>
	export let action;
	export let actionText;
</script>

<button on:click disabled={action} class="button">
	{#if action}
		{actionText}
	{:else}
		<slot />
	{/if}
</button>
