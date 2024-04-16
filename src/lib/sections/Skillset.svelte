<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { onDestroy, onMount } from 'svelte';
	import { lang } from '$lib/stores';
	import skillsetJSON from '$lib/content/skillset.json';
	import { browser } from '$app/environment';

	let visible = false;
	let element: HTMLElement;

	function handleScroll() {
		const bounding = element.getBoundingClientRect();

		if (bounding.top <= document.documentElement.clientHeight / 2) {
			visible = true;
		}
	}
	onMount(() => {
		if (!browser) return;
		window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handleScroll);
	});
</script>

<div id="divider-top" class="bg-gradient -mb-1 w-full min-h-16 aspect-[7/1]"></div>

<section id="skillset" class="bg-gradient text-white px-8">
	<div class="py-12 mx-auto max-w-screen-lg" bind:this={element}>
		<h2 class="font-medium mb-12">
			{$lang === 'en' ? 'My Skillset' : 'Min Kompetanse'}
		</h2>

		{#each skillsetJSON as { title, skills }}
			<div class="skills-container">
				{#key visible}
					<h3
						class="opacity-0"
						class:opacity-100={visible}
						in:fade={{ delay: 50 * skills[0].skillCount }}
					>
						{title}
					</h3>
				{/key}
				<ul class="max-w-full mb-12 p-0 grid gap-x-6 gap-y-10 list-none">
					{#each skills as { iconClass, skill, skillCount }}
						{#key visible}
							<li
								class:opacity-100={visible}
								in:fly={{ x: '100%', duration: 500, delay: 50 * skillCount }}
								class="my-auto h-[var(--fs-icons)] relative flex justify-center items-center opacity-0"
							>
								<i class={iconClass} />
								<span class="text-base w-fit text-center absolute bottom-0 left-1/2 opacity-0"
									>{skill}</span
								>
							</li>
						{/key}
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<div id="divider-bottom" class="bg-gradient -mt-1 w-full min-h-16 aspect-[7/1]"></div>

<svg class="svg" style="position: absolute;" width="0" height="0">
	<clipPath id="divider-top-clip" clipPathUnits="objectBoundingBox">
		<path d="M0,0C0.22,0.7,0.507,1,1,0.3L1,1L0,1Z"></path>
	</clipPath>
	<clipPath id="divider-bottom-clip" clipPathUnits="objectBoundingBox"
		><path d="M1,0 L0.999,0.664 C0.64,0.313,0,0.965,0,1 L0,0 L1,0"></path>
	</clipPath>
</svg>

<style lang="scss">
	.bg-gradient {
		background-attachment: fixed;
		background-image: linear-gradient(-30deg, var(--primary-variant), var(--primary));
	}

	#divider-top {
		clip-path: url('#divider-top-clip');
	}
	#divider-bottom {
		clip-path: url('#divider-bottom-clip');
	}

	.skills-container {
		& ul {
			grid-template-columns: repeat(3, 1fr);
			@for $i from 3 through 8 {
				@media screen and (min-width: calc($i * 100px)) {
					grid-template-columns: repeat(#{$i}, 1fr);
				}
			}

			& li {
				font-size: var(--fs-icons);

				& span {
					translate: -50% 150%;
					transition: all 250ms ease-in-out;
				}

				&:hover {
					& span {
						translate: -50% 100%;
						opacity: 1;
					}
				}
			}
		}
	}
</style>
