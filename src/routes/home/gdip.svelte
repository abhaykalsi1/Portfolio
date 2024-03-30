<script>
	import { onMount, onDestroy } from 'svelte';

	export let src = '';
	export let width = 30;
	export let distance;

	let targetMoveX = 0;
	let targetMoveY = 0;
	let moveX = 0;
	let moveY = 0;
	let windowWidth;

	function updatePosition(e) {
		const xPercent = e.clientX / window.innerWidth;
		const yPercent = e.clientY / window.innerHeight;
		targetMoveX = -(distance / 2) + xPercent * distance;
		targetMoveY = -(distance / 2) + yPercent * distance;
	}

	function animate() {
		moveX += (targetMoveX - moveX) * 0.1;
		moveY += (targetMoveY - moveY) * 0.1;
		requestAnimationFrame(animate);
	}

	onMount(() => {
		windowWidth = window.innerWidth;
		requestAnimationFrame(animate);

		const handleResize = () => {
			windowWidth = window.innerWidth;
		};
		window.addEventListener('resize', handleResize);

		if (windowWidth > 768) {
			window.addEventListener('mousemove', updatePosition);
		}

		return () => {
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('mousemove', updatePosition);
		};
	});
</script>


<img
	{src}
	alt=""
	class="moving-element absolute"
	style="transform: translate(-50%, -50%) translate({moveX}px, {moveY}px); width: {width}rem"
/>

<style>
	.moving-element {
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
