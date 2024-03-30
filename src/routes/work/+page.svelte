<svelte:head>
	<title>Work | Abhay Kalsi</title>
</svelte:head>

<div class="px-2 pt-1 md:pt-0">
	{@html '<!-- Bar Prima -->'}
	<div class="mt-2 flex flex-row gap-2">
		<div class="cont w-full md:w-3/5">
			<img src="/2.png" alt="" class="mb-1" />
		</div>
		<div class="cont w-auto md:w-1/5">
			<img src="/3.png" alt="" class="mb-1 aspect-square" />
			<h2 class="mb-0.5">Emulating History on Queen St.</h2>
			<h1 class="project-name">Bar Prima</h1>
		</div>
	</div>

	<div class="h-16 md:h-1"></div>

	{@html '<!-- Mains -->'}
	<div class="cont w-full md:w-3/5">
		<img src="/placeholder.png" alt="" class="mb-1 aspect-video" />
		<h2 class="mb-0.5">An Art Institute for the New Society</h2>
		<h1 class="project-name">MAINS</h1>
	</div>

	<div class="spacer"></div>

	{@html '<!-- Nihilists Choice -->'}
	<div class="flex w-full justify-start gap-2">
		<div class="cont w-full md:w-1/5">
			<img src="/nchoice/2.jpg" alt="" class="mb-1" />
		</div>
		<div class="cont w-full md:w-3/5">
			<img src="/nchoice/1.jpg" alt="" class="mb-1" />
			<h2 class="mb-0.5">Snacks for Pessimist People</h2>
			<h1 class="project-name">Nihilist's Choice</h1>
		</div>
	</div>

	<div class="spacer"></div>

	{@html '<!-- Watercolour -->'}
	<div class="mt-2 flex flex-row items-end gap-2">
		<div class="cont w-full md:w-1/5">
			<h2 class="mb-0.5">A Journey through the Mediterranean</h2>
			<h1 class="project-name mb-1">Watercolour</h1>
			<img src="/watercolour/2.jpg" alt="" class="mb-1 aspect-square" />
		</div>
		<div class="cont w-auto md:w-4/5">
			<img src="/watercolour/1.jpg" alt="" class="mb-1 aspect-video" />
		</div>
	</div>

	<div class="spacer"></div>

	{@html '<!-- Print Paper Production -->'}
	<div class="flex flex-row gap-2">
		<div class="cont hidden min-w-[20%] md:block"></div>
		<div class="cont w-1/3 md:w-1/5">
			<img src="/ppp/1.jpg" alt="" class="mb-1 aspect-square" />
			<h2 class="mb-0.5">Not Your Average Paper Co.</h2>
			<h1 class="project-name">Print Paper Production</h1>
		</div>
		<div class="cont w-1/3 md:w-1/5">
			<img src="/ppp/2.jpg" alt="" class="mb-1 aspect-square" />
		</div>
		<div class="cont hidden w-1/2 md:block md:w-1/5">
			<img src="/ppp/3.jpg" alt="" class="mb-1 aspect-square" />
		</div>
		<div class="cont w-1/3 md:w-1/5">
			<img src="/ppp/4.jpg" alt="" class="mb-1 aspect-square" />
		</div>
	</div>

	<div class="h-16 md:h-28"></div>
</div>

<style>
	.project-name {
		font-size: 1.3rem;
		text-wrap: balance;
		opacity: 0.4;
	}
	.spacer {
		height: 4rem;
	}
	@media (min-width: 768px) {
		.spacer {
			height: 8rem;
		}
	}
</style>
