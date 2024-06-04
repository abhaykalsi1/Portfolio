<script>
	import MusicEmbed from './music-embed.svelte';
	let activeMusic = 'appleMusic';
	function toggleIframe(targetMusic) {
		activeMusic = targetMusic;
	}
</script>

<div class="border-neutral-80 mb-2 hidden h-full gap-1 lg:flex">
	<div class="mt-1 flex w-1/5 flex-col justify-between">
		<h1>Hear what<br />I hear:</h1>

		{@html '<!-- Toggle for Apple Music / Spotify -->'}
		<div class="flex gap-2">
			<button
				class="transition-color flex rounded-full border border-stone-400 px-1.5 text-[0.9rem] duration-300 ease-out hover:border-black"
				class:active={activeMusic === 'appleMusic'}
				on:click={() => toggleIframe('appleMusic')}
			>
				Apple Music
			</button>
			<button
				class="transition-color flex rounded-full border border-stone-400 px-1.5 text-[0.9rem] duration-300 ease-out hover:border-black"
				class:active={activeMusic === 'spotify'}
				on:click={() => toggleIframe('spotify')}
			>
				Spotify
			</button>
		</div>
	</div>

	<div class="mt-2 h-[450px] w-4/5 overflow-hidden rounded-[10px] bg-stone-300">
		{#if activeMusic === 'appleMusic'}
			<MusicEmbed src="https://embed.music.apple.com/in/playlist/may-2024/pl.u-38oWWy8tYkWxEWp" />
		{/if}
		{#if activeMusic === 'spotify'}
			<MusicEmbed
				src="https://open.spotify.com/embed/playlist/0tUbJNrGr0nER8uwvBCcJj?utm_source=generator"
			/>
		{/if}
	</div>
</div>

<style>
	h1 {
		font-size: 2.5rem;
	}
	button.active {
		font-weight: 300;
		background-color: black;
		color: white;
		border-color: black;
	}
</style>
