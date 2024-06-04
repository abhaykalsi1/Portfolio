<script>
	import Music from './music.svelte';
</script>

{@html '<!-- Music -->'}
<Music />

{@html '<!-- Footer Info -->'}
<div class=" flex h-full gap-2 border-t border-stone-300 pt-2 pb-3">
	<div class="flex w-1/3 flex-col md:w-1/5">
		<h3 class="leading-tight opacity-30">©</h3>
		<h3 class="leading-tight">2024</h3>
	</div>
	<div class="flex w-2/3 flex-col md:w-3/5">
		<h3 class="leading-tight opacity-40">Made w/ Love</h3>
		<h3 class="leading-tight">Abhay Kalsi</h3>
	</div>
	<div class="flex w-2/3 flex-col md:w-1/5">
		<span>
			<h3 class="leading-tight opacity-40">Toronto, Canada</h3>
			<a
				href="https://www.linkedin.com/in/abhaykalsi/"
				target="_blank"
				class="border-stone-300 leading-tight">LinkedIn</a
			>
		</span>
	</div>
</div>
