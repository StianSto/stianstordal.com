<script lang="ts">
	import { fly } from 'svelte/transition';
	import { lang } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import bioJSON from '$lib/content/bio';
	import { browser } from '$app/environment';

	let element: HTMLElement;
	let visible = false;

	function handleScroll() {
		const bounding = element.getBoundingClientRect();

		if (bounding.top <= document.documentElement.clientHeight) {
			visible = true;
		}
	}
	onMount(() => {
		if (browser) window.addEventListener('scroll', handleScroll);
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handleScroll);
	});
</script>

<section id="bio" class="py-40 px-4 md:px-8 my-0">
	<div class="opacity-0 max-w-3xl mx-auto" class:opacity-100={visible} bind:this={element}>
		{#key visible}
			<h2 in:fly={{ y: '20%', duration: 1000 }}>
				{$lang === 'en' ? 'Who am I?' : 'Hvem er jeg?'}
			</h2>
		{/key}
		{#each bioJSON.body[$lang] as paragraph, index}
			{#key visible}
				<p in:fly={{ y: '20%', duration: 1000, delay: 250 + 200 * index }}>
					{paragraph}
				</p>
			{/key}
		{/each}

		{#key visible}
			<div class="mt-8 flex gap-8" in:fly={{ y: '20%', duration: 1000, delay: 1000 }}>
				{#each bioJSON.links as { href, text, icon }}
					<a
						{href}
						class="text-2xl no-underline flex items-center gap-2 transition-all duration-200 ease-in-out"
					>
						<i class="{icon} text-[1.75em]" />
						{text}
					</a>
				{/each}
			</div>
		{/key}
	</div>
</section>
