<script>
	import Music from "./music.svelte";
</script>

{@html '<!-- Music -->'}
<Music />

{@html '<!-- Footer Info -->'}
<div class=" flex h-full border-t border-neutral-800 py-4 gap-1.5">
	<div class="flex w-1/3 flex-col md:w-1/5">
		<h3 class="leading-tight text-white opacity-50">©</h3>
		<h3 class="leading-tight text-white">2024</h3>
	</div>
	<div class="flex w-2/3 flex-col md:w-4/5">
		<h3 class="leading-tight text-white opacity-50">Made w/ Love</h3>
		<h3 class="leading-tight text-white">Abhay Kalsi</h3>
	</div>
</div>