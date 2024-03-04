<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
</script>

<div
	class="navContainer
    mx-4 mt-4 flex justify-between gap-2 text-[2rem] text-black sm:justify-evenly"
>
	<a href="./" class="nav-link" class:active={routeId == '/'}> Home </a>
	<a href="./projects" class="nav-link" class:active={routeId == '/projects'}>Projects</a>
	<a href="./information" class="nav-link" class:active={routeId == '/information'}>Information</a>
</div>
