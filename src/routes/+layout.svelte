<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
</script>

<header class="">
	<nav class="fixed top-0 px-4">
		<Navigation />
	</nav>
</header>

<main class="px-5">
	<slot />
</main>
