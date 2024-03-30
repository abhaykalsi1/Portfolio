<script>
	import '../app.css';
	import Navigation from './components/navigation.svelte';
	import Footer from './components/footer.svelte';
</script>

<header class="fixed top-0 z-50 w-full px-2 text-white mix-blend-difference">
	<Navigation />
</header>

<main class="relative z-10 rounded-b-lg bg-white pb-2">
	{@html '<!-- Page Slot -->'}
	<slot />
</main>

<footer class="sticky bottom-0 z-0 w-full px-2">
	<Footer />
</footer>
