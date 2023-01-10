<script>
	import NavbarButton from "$lib/components/NavbarButton.svelte";
	import { user } from "$lib/stores/userStore";
	import Icon from "svelte-awesome";
	import github from "svelte-awesome/icons/github";

	$: loggedIn = !!$user;
</script>

<div class="py-8 mb-2 flex items-center border-neutral-300">
	<div class="justify-start flex grow basis-0 [&>*]:text-neutral-500">
		<NavbarButton to="/">triangle100</NavbarButton>
	</div>
	<nav class="flex gap-8 cursor-default">
		<NavbarButton to="/">Home</NavbarButton>
		<NavbarButton to="/projects">Projects</NavbarButton>
		<NavbarButton to="/blog">Blog</NavbarButton>
		<NavbarButton to="/contact">Contact</NavbarButton>
		{#if loggedIn}
			<NavbarButton to="/admin">Console</NavbarButton>
		{/if}
	</nav>
	<div class="justify-end flex grow basis-0">
		<a
			href="https://github.com/triangle100/triangle100-com"
			target="_blank"
			rel="noreferrer"
			class="border-none leading-loose"
			title="Source Code"
			data-noglyph
		>
			<Icon
				data={github}
				scale={2}
				class="hover:text-neutral-500 dark:hover:text-neutral-300 text-neutral-700 dark:text-white transition-colors"
			/>
		</a>
	</div>
</div>
