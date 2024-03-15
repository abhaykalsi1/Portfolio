<script>
	let activeMusic = 'appleMusic';
	function toggleIframe(targetMusic) {
		activeMusic = targetMusic;
	}
</script>

<div class="mb-4 mt-2 hidden h-full border-neutral-800 text-white md:flex">
	<div class="mt-2 flex w-1/5 flex-col justify-between">
		<h1>Hear what<br />I hear:</h1>

		{@html '<!-- Toggle for Apple Music / Spotify -->'}
		<div class="flex gap-2">
			<button
				class="transition-color flex rounded-full border border-neutral-500 px-1.5 text-[0.9rem] duration-300 ease-out hover:border-white"
				class:active={activeMusic === 'appleMusic'}
				on:click={() => toggleIframe('appleMusic')}
			>
				Apple Music
			</button>
			<button
				class="transition-color flex rounded-full border border-neutral-500 px-1.5 text-[0.9rem] duration-300 ease-out hover:border-white"
				class:active={activeMusic === 'spotify'}
				on:click={() => toggleIframe('spotify')}
			>
				Spotify
			</button>
		</div>
	</div>

	{@html '<!-- Apple Music embed -->'}
	{#if activeMusic === 'appleMusic'}
		<iframe
			title="Apple Music embed"
			class="apple-music mt-2 w-4/5"
			allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
			frameborder="0"
			style="height:450px;overflow:hidden;border-radius:10px;"
			sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
			src="https://embed.music.apple.com/in/playlist/february-2024/pl.u-aZb00o9T1Bdj7d0?theme=dark"
		></iframe>
	{/if}

	{@html '<!-- Spotify embed -->'}
	{#if activeMusic === 'spotify'}
		<iframe
			title="Spotify embed"
			class="spotify mt-2 w-4/5"
			style="border-radius:10px"
			src="https://open.spotify.com/embed/playlist/0tUbJNrGr0nER8uwvBCcJj?utm_source=generator&theme=0"
			width="100%"
			height="450"
			frameBorder="0"
			allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
			loading="lazy"
		></iframe>
	{/if}
</div>

<style>
	button.active {
		background-color: #fff;
		color: #000;
		border-color: #fff;
	}
</style>
