<script>
	import NavbarButton from "$lib/components/NavbarButton.svelte";
	import { user } from "$lib/stores/userStore";
	import Icon from "svelte-awesome";
	import github from "svelte-awesome/icons/github";

	$: loggedIn = !!$user;
</script>

<div class="mb-2 flex items-center py-8 [&>*]:text-base">
	<div class="flex grow basis-0 justify-start [&>a]:text-bluegray-500 [&>a]:hover:text-violet-500">
		<NavbarButton to="/">triangle100</NavbarButton>
	</div>
	<nav class="flex cursor-default gap-8">
		<NavbarButton to="/">Home</NavbarButton>
		<NavbarButton to="/projects">Projects</NavbarButton>
		<NavbarButton to="/blog">Blog</NavbarButton>
		<NavbarButton to="/contact">Contact</NavbarButton>
		{#if loggedIn}
			<NavbarButton to="/admin">Console</NavbarButton>
		{/if}
	</nav>
	<div class="flex grow basis-0 justify-end">
		<a
			href="https://github.com/triangle100/triangle100-com"
			class="border-none leading-loose"
			title="Source Code"
			data-noglyph
		>
			<Icon
				data={github}
				scale={2}
				class="text-bluegray-700 transition-colors hover:text-bluegray-500 dark:text-white dark:hover:text-bluegray-300"
			/>
		</a>
	</div>
</div>
