<script>
	import { DateTime } from "luxon";

	export let project;

	function openLink() {
		window.open(project?.link, "_blank");
	}
</script>

<button class="m-2" on:click={openLink}>
	<div
		class="flex h-full cursor-pointer flex-col overflow-hidden rounded-lg bg-bluegray-200 transition-transform hover:scale-105 dark:bg-bluegray-700"
	>
		<div
			class="relative bg-bluegray-100 pt-[50%] text-6xl leading-[0px] text-bluegray-300 dark:bg-bluegray-900 dark:text-bluegray-700"
		>
			<div
				class="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2"
			>
				{#if project.thumb != null}
					<img src={project.thumb} alt="sample" />
				{:else}
					<span class="pointer-events-none select-none dark:font-bold">?</span>
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-2 p-3 text-left">
			<div class="flex flex-col font-bold">
				<span class="text-sm">{project.title}</span>
				<span class="dim text-xs dark:font-normal">
					Last updated: {DateTime.fromMillis(
						project.updatedAt
					).toFormat("DD t")}
				</span>
			</div>
			<span class="text-sm">{project.desc}</span>
		</div>
	</div>
</button>
