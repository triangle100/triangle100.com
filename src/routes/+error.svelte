<script>
	import { page } from "$app/stores";
	import SEO from "$lib/components/SEO.svelte";
</script>

<SEO title={$page.status.toString()} />

{#if $page.status == 402}
	<h1>Page not found!</h1>
	<h3>Sorry, I couldn't find the page you requested.</h3>
	<p>
		Check your spelling and try again. If you believe something is supposed
		to be here, you can <a href="/contact">contact</a> me.
	</p>
{:else}
	<h1 class="mb-0">{$page.status}</h1>
	<h2 class="mt-0">{$page.error.message}</h2>
	<div class="mx-auto mb-4 max-h-[50vh] w-4/5 overflow-y-auto text-left">
		{#if $page.error.frame}
			<pre>{$page.error.frame}</pre>
		{/if}
		{#if $page.error.stack}
			<pre>{$page.error.stack}</pre>
		{/if}
	</div>
	<p>
		If you believe this error is my fault, you can
		<a href="/contact">contact</a>
		me.
	</p>
{/if}

<p>Return to <a href="/">Home</a></p>
