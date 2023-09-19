<script>
	import Icon from "svelte-awesome";
	import email from "svelte-awesome/icons/envelope";
	import github from "svelte-awesome/icons/github";
	import twitter from "svelte-awesome/icons/twitter";

	const copyToClip = function (text) {
		navigator.clipboard.writeText(text).then(() => {
			alert("Copied to clipboard!");
		});
	};

	const openLink = function (link) {
		window.open(link);
	};
</script>

<h1>Contact</h1>
<p>This page is a work in progress. Here are some buttons for now :D</p>
<div class="flex justify-center gap-2">
	<button class="button" on:click={() => copyToClip("admin@triangle100.com")}>
		<Icon data={email} />
		Email
	</button>
	<button
		class="button"
		on:click={() => openLink("https://github.com/squidee100")}
	>
		<Icon data={github} />
		GitHub
	</button>
	<button
		class="button"
		on:click={() => openLink("https://twitter.com/_triangle100")}
	>
		<Icon data={twitter} />
		Twitter
	</button>
</div>
