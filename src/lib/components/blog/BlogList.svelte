<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { getPosts } from "$lib/services/firebase/db";
    import Loading from "$lib/components/Loading.svelte";
    import { DateTime } from "luxon";

    let posts = [];
    let loading = true;

    onMount(async () => {
        posts = await getPosts();
        loading = false;
    });
</script>

{#each posts as post}
    <div
        class="flex justify-between lg:w-96 md:w-5/6 mx-auto text-2xl rounded border p-2 hover:bg-neutral-100 cursor-pointer"
        on:click={() => goto(`blog/${post.id}`)}
    >
        <span>{post.data.title}</span>
        <span>
            {DateTime.fromSeconds(
                post.data.createdAt.seconds
            ).toRelativeCalendar()}
        </span>
    </div>
{:else}
    {#if loading}
        <Loading />
    {:else}
        <h4>No blog posts</h4>
    {/if}
{/each}
