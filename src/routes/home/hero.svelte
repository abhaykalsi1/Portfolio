<script>
	import Gdip from "./gdip.svelte";
	import Text from "./hero-text.svelte";
</script>

<div class="relative flex min-h-svh w-full items-end gap-1 pb-2">
	<Text />

	{@html '<!-- Hero Illustration -->'}
	<div class="pointer-events-none absolute flex h-full w-full items-center justify-center">
		<Gdip src={"/gdip/text.png"} width={25} distance={40}/>
		<Gdip src={"/gdip/focus.png"} width={30} distance={20}/>
		<Gdip src={"/gdip/table.png"} width={30} distance={5}/>
	</div>
</div>


