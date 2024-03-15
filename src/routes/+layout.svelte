<script>
	import '../app.css';
	import Navigation from '../components/navigation.svelte';
	import Footer from '../components/footer.svelte';
</script>

<header class="fixed top-0 z-50 w-full bg-white px-4">
	<Navigation />
</header>

<main class="relative z-10 min-h-svh rounded-b-lg bg-white px-4 pt-16">
{@html '<!-- Page Slot -->'}
	<slot />
</main>

<footer class="sticky bottom-0 z-0 w-full px-4">
	<Footer />
</footer>
