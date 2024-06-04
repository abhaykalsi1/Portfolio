<svelte:head>
	<title>Work | Abhay Kalsi</title>
</svelte:head>

<div class="px-2 pt-1 md:pt-0">
	{@html '<!-- Bar Prima -->'}
	<div class="mt-2 flex flex-row gap-2">
		<div class="cont w-full md:w-3/5">
			<enhanced:img src="/static/2.png" alt="" class="mb-1" />
		</div>
		<a href="/projects/barprima" class="cont w-2/5 border-none md:w-1/5">
			<div>
				<enhanced:img src="/static/3.png" alt="" class="mb-1 aspect-square" />
				<h2 class="mb-0.5">Emulating History on Queen St.</h2>
				<h1 class="project-name">Bar Prima</h1>
			</div>
		</a>
	</div>

	<div class="h-16 md:h-1"></div>

	{@html '<!-- Mains -->'}
	<a href="/projects/mains">
		<div class="cont w-full md:w-3/5">
			<enhanced:img src="/static/placeholder.png" alt="" class="mb-1 aspect-video" />
			<h2 class="mb-0.5">An Art Institute for the New Society</h2>
			<h1 class="project-name">MAINS</h1>
		</div>
	</a>

	<div class="spacer"></div>

	{@html '<!-- Print Paper Production -->'}
	<div class="flex flex-row gap-2 mb-16 md:mb-0">
		<div class="cont hidden min-w-[20%] md:block"></div>
		<a href="/projects/ppp" class="cont w-1/3 md:w-1/5 border-none">
			<div>
				<enhanced:img src="/static/ppp/1.jpg" alt="" class="mb-1 aspect-square" />
				<span class="absolute md:relative">
					<h2 class="mb-0.5 pt-0.5">Not Your Average Paper Co.</h2>
					<h1 class="project-name">Print Paper Production</h1>
				</span>
			</div>
		</a>
		<div class="cont w-1/3 md:w-1/5">
			<enhanced:img src="/static/ppp/2.jpg" alt="" class="mb-1 aspect-square" />
		</div>
		<div class="cont hidden w-1/2 md:block md:w-1/5">
			<enhanced:img src="/static/ppp/3.jpg" alt="" class="mb-1 aspect-square" />
		</div>
		<div class="cont w-1/3 md:w-1/5">
			<enhanced:img src="/static/ppp/4.jpg" alt="" class="mb-1 aspect-square" />
		</div>
	</div>

	<div class="h-16 md:h-28"></div>

	{@html '<!-- Nihilists Choice -->'}
	<div class="flex w-full justify-start gap-2">
		<div class="cont hidden min-w-[20%] md:block"></div>
		<div class="cont w-2/5 md:w-1/5">
			<enhanced:img src="/static/nchoice/2.jpg" alt="" class="mb-1" />
		</div>
		<a href="/projects/nchoice" class="cont w-full border-none md:w-3/5">
			<div>
				<enhanced:img src="/static/nchoice/1.jpg" alt="" class="mb-1" />
				<h2 class="mb-0.5">Snacks for Pessimist People</h2>
				<h1 class="project-name">Nihilist's Choice</h1>
			</div>
		</a>
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
