<script>
	import Icon from "svelte-awesome";
	import clipboard from "svelte-awesome/icons/clipboard";
	import externalLink from "svelte-awesome/icons/externalLink";

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
<div class="[&>*]:inline-block">
	<button on:click={() => copyToClip("admin@triangle100.com")}
		>Email <Icon data={clipboard} /></button
	>
	<button on:click={() => openLink("https://github.com/squidee100")}
		>GitHub <Icon data={externalLink} /></button
	>
	<button on:click={() => openLink("https://twitter.com/_triangle100")}
		>Twitter <Icon data={externalLink} /></button
	>
</div>
