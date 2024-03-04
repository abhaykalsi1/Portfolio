<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
	console.log($page.route.id);
</script>

<div
	class="navContainer
    mt-4 flex justify-between gap-1 rounded-md bg-black px-4 text-[2rem] text-white transition-all ease-out sm:justify-evenly"
>
	<a href="./" class="nav-link" class:active={routeId == '/'}>Home</a>
	<a href="./info" class="nav-link" class:active={routeId == '/info'}>Information</a>
	<a href="./work" class="nav-link" class:active={routeId == '/work'}>Projects</a>
</div>