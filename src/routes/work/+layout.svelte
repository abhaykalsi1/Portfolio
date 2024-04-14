<script>
	import { page } from '$app/stores';
	$: routeId = $page.route.id;
</script>

<div class="innerNav">
	<a href="/work" class="" class:active={routeId == '/work'}> Case Studies, </a>
	<a href="/work/individuals" class="" class:active={routeId == '/work/individuals'}>
		Individuals
	</a>
</div>

<slot />

<style>
    .innerNav {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
		padding-top: 5rem;
        padding-left: 20%;
		padding-right: 8rem;
        column-gap: 1rem;
        border-bottom: 1px solid rgb(214 211 209);
    }

	a {
		font-size: 2rem;
        opacity: 0.4;
        border: 0;
        transition: opacity 0.5s ease-out;
	}
	.active {
		opacity: 1;
	}
	@media (max-width: 768px) {
        .innerNav {
            padding-left: 0.5rem;
			padding-right: 0.5rem;
        }
		a {
			font-size: 4rem;
		}
	}
</style>
