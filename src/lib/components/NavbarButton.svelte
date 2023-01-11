<script>
	export let to;
</script>

<a
	href={to}
	class="border-none font-bold text-bluegray-700 hover:text-bluegray-500 dark:text-white dark:hover:text-bluegray-300"
>
	<slot />
</a>
