<script>
	import SEO from "$lib/components/SEO.svelte";
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import { onMount } from "svelte";
	import projectsRaw from "$lib/data/projects.json";
	import { DateTime } from "luxon";

	let projects = [];
	let loading = true;

	onMount(async function () {
		const _projects = [];
		for (const project of projectsRaw) {
			const obj = {
				title: project?.title || null,
				desc: project?.desc || null,
				thumb: project?.thumb || null,
				link: project?.link || null,
				createdAt: project?.createdAt || null,
				updatedAt: project?.updatedAt || null,
			};
			const generateMeta =
				!!project?.repo?.generateMeta &&
				project?.repo?.name != undefined;

			if (generateMeta) {
				const response = await fetch(
					`https://api.github.com/repos/${project.repo.name}`
				);
				const data = await response.json();
				Object.keys(obj).forEach((key) => {
					if (obj[key] == null) {
						let val;
						if (key == "title") {
							val = data.name;
						} else if (key == "desc") {
							val = data.description;
						} else if (key == "link") {
							val = data.html_url;
						} else if (key == "createdAt") {
							val = DateTime.fromISO(data.created_at).toMillis();
						} else if (key == "updatedAt") {
							val = DateTime.fromISO(data.pushed_at).toMillis();
						}
						obj[key] = val;
					}
				});
			}
			_projects.push(obj);
		}

		projects = _projects.sort((a, b) =>
			b.createdAt > a.createdAt ? 1 : -1
		);
		loading = false;
	});
</script>

<SEO
	title="Projects"
	desc="A repository of all my finished or notable projects"
/>

<h1>Projects</h1>

{#if loading}
	<Loading />
{:else if projects.length > 0}
	<div class="grid grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:grid-cols-3">
		{#each projects as project}
			<ProjectCard {project} />
		{/each}
	</div>
	<p>and ~70 private repositories</p>
{:else}
	<h4>No projects</h4>
{/if}
