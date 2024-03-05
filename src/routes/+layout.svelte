<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import Footer from '../components/footer.svelte';
</script>

<div class="page-wrapper relative">
	<header class="sticky top-0 z-50 bg-white px-4">
		<Navigation />
	</header>

	<main class="relative z-10 min-h-svh rounded-b-lg bg-white px-4 pt-4">
		<slot />
	</main>

	<footer class="sticky bottom-0 z-0 w-full">
		<Footer />
	</footer>
</div>
