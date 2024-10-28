<script>
    import { page } from '$app/stores';
    $: routeId = $page.route.id || '';
</script>

<nav
	class="navContainer
	flex justify-between pt-2 text-3xl sm:justify-start md:text-xl"
>
	<a
		href="/"
		class="nav-link w-auto leading-none transition-all duration-300 ease-in-out hover:opacity-50 sm:w-1/5"
		class:active={routeId == '/'}
	>
		Abhay Kalsi
	</a>
		<a
		href="mailto:abhaykalsi@outlook.com"
		class="nav-link w-auto leading-none transition-all duration-300 ease-in-out hover:opacity-50 sm:w-1/5">Email ↗</a
		>

</nav>

<style>
	.active {
		/* display: none; */
		opacity: 0.4;
	}
	/* @media (min-width: 640px) {
		.active {
			display: block;
		}
	} */
</style>
