<script>
    import { createEventDispatcher } from "svelte";
    import tippy from "tippy.js";
    import "tippy.js/dist/tippy.css";
    import "tippy.js/animations/shift-away-subtle.css";

    const dispatch = createEventDispatcher();

    export let title;
    export let id;

    function deletePost(slug) {
        dispatch("deletePost", { slug });
    }

    const props = {
        content: title,
        duration: 200,
        animation: "shift-away-subtle",
        arrow: false,
    };
</script>

<div class="flex h-16 justify-between flex-row items-center bg-white border border-black rounded mx-auto mb-5 px-5 box-border">
    <div class="min-w-0">
        <h3 use:tippy={props} class="whitespace-nowrap overflow-hidden overflow-ellipsis select-none">{title}</h3>
    </div>
    <div class="min-w-fit [&>*]:ml-3 [&>*]:border-none select-none [&>*]:select-auto">
        <a href={`blog/${id}`} target="_blank">View</a>
        <a href={`blog/${id}?edit`} target="_blank">Edit</a>
        <span class="link !text-gray-400 hover:!text-red-500" id="delete" on:click={() => deletePost(id)}>
            Delete
        </span>
    </div>
</div>
