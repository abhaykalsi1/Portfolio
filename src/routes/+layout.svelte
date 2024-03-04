<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import Footer from '../components/footer.svelte';
</script>

<header>
	<nav class="fixed top-0 z-50 w-full sm:w-auto">
		<Navigation />
	</nav>
</header>

<div class="relative">
	<main class="relative z-10 min-h-svh bg-white px-4 pb-4 rounded-b-xl">
		<slot />
	</main>
	<footer class="sticky bottom-0 z-0 h-40 w-full bg-black">
		<Footer />
	</footer>
</div>
