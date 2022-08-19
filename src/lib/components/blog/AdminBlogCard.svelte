<script>
    import { createEventDispatcher } from "svelte";
    import Modal from "$lib/components/Modal.svelte";
    import tippy from "tippy.js";
    import "tippy.js/dist/tippy.css";
    import "tippy.js/animations/shift-away-subtle.css";

    const dispatch = createEventDispatcher();

    export let title;
    export let slug;
    let modal;

    function deletePost(slug) {
        modal.close();
        dispatch("deletePost", { slug });
    }

    const props = {
        content: title,
        duration: 200,
        animation: "shift-away-subtle",
        arrow: false,
    };
</script>

<div
    class="flex h-16 justify-between flex-row items-center bg-white dark:bg-neutral-800 border border-black dark:border-neutral-700 rounded mx-auto mb-5 px-5 box-border"
>
    <div class="min-w-0">
        <h3
            use:tippy={props}
            class="truncate select-none"
        >
            {title}
        </h3>
    </div>
    <div
        class="min-w-fit [&>*]:ml-3 [&>*]:border-none select-none [&>*]:select-auto"
    >
        <a href={`blog/${slug}`} target="_blank">View</a>
        <a href={`blog/${slug}/edit`} target="_blank">Edit</a>
        <span
            class="link !text-gray-400 hover:!text-red-500"
            on:click={modal.open}
        >
            Delete
        </span>
    </div>
</div>

<Modal bind:this={modal}>
    <div class="text-center">
        <h2 class="m-0">Confirmation</h2>
        <p>
            Are you sure you want to delete this post?<br />
            This cannot be undone.
        </p>
        <button on:click={() => deletePost(slug)}>Delete</button>
    </div>
</Modal>
