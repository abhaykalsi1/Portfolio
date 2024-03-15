<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
</script>

<nav
	class="navContainer
	flex w-full justify-between gap-2 border-b pt-4 text-xl sm:w-auto sm:justify-start"
>
	<a href="./" class="nav-link" class:active={routeId == '/'}> Home </a>
	<a href="./projects" class="nav-link" class:active={routeId == '/projects'}>Projects</a>
	<a href="./information" class="nav-link" class:active={routeId == '/information'}>Information</a>
</nav>
