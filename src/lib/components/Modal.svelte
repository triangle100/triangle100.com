<script>
	import { fade } from "svelte/transition";

	export let state = false;

	export function close() {
		state = false;
	}

	export function open() {
		state = true;
	}
</script>

{#if state}
	<div class="fixed top-0 left-0 z-40 h-screen w-screen">
		<div transition:fade={{ duration: 300 }}>
			<div
				class="h-screen w-screen bg-black bg-opacity-20"
				on:mousedown={close}
			/>
			<div
				class="fixed top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white px-8 py-6 drop-shadow-xl dark:bg-bluegray-800"
			>
				<slot />
			</div>
		</div>
	</div>
{/if}
