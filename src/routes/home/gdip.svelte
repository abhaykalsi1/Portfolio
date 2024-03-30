<script>
	import { onMount } from 'svelte';
    export let src = "";
    export let width = 30;
	export let distance; // Accept distance as a prop
	
	let targetMoveX = 0;
	let targetMoveY = 0;
	let moveX = 0;
	let moveY = 0;
	
	function lerp(start, end, amount) {
	  return (1 - amount) * start + amount * end;
	}
	
	function animate() {
	  moveX = lerp(moveX, targetMoveX, 0.07);
	  moveY = lerp(moveY, targetMoveY, 0.07);
	  requestAnimationFrame(animate);
	}
	
	onMount(() => {
  // Checks if the device supports hovering over elements, implying it likely has a mouse
  if (window.matchMedia('(hover: hover)').matches) {
    function updatePosition(e) {
      const xPercent = e.clientX / window.innerWidth;
      const yPercent = e.clientY / window.innerHeight;
      targetMoveX = -(distance / 2) + xPercent * distance;
      targetMoveY = -(distance / 2) + yPercent * distance;
    }
    window.addEventListener('mousemove', updatePosition);
    requestAnimationFrame(animate);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }
});

  </script>

<img
    src={src}
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