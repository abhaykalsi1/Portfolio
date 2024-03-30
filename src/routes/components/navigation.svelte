<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
</script>

<nav
	class="navContainer
	flex justify-between pt-2 text-3xl sm:justify-start md:text-xl"
>
	<a
		href="./"
		class="nav-link w-auto leading-none transition-all duration-500 ease-in-out hover:opacity-50 sm:w-1/5"
		class:active={routeId == '/'}
	>
		Home
	</a>
	<a
		href="./work"
		class="nav-link w-auto leading-none transition-all duration-500 ease-in-out hover:opacity-50 sm:w-1/5"
		class:active={routeId == '/work'}>Work</a
	>
	<a
		href="./contact"
		class="nav-link w-auto leading-none transition-all duration-500 ease-in-out hover:opacity-50 sm:w-1/5"
		class:active={routeId == '/contact'}>Contact</a
	>
</nav>

<style>
	.active {
		display: none;
		opacity: 0.4;
	}
	@media (min-width: 640px) {
		.active {
			display: block;
		}
	}
</style>
