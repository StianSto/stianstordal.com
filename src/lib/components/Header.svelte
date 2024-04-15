<script>
	import { lang } from '$lib/stores';

	import Button from '$lib/components/Button.svelte';
	import ToggleSwitch from '$lib/components/ToggleSwitch.svelte';
	import flagNO from '$lib/assets/lang-no.png';
	import flagUK from '$lib/assets/lang-uk.png';
	import Nav from '$lib/components/Nav.svelte';
	import { browser } from '$app/environment';

	function toggleLang() {
		lang.update(() => ($lang === 'no' ? 'en' : 'no'));
		if(browser) document.documentElement.lang = $lang;
	}

  let header;
  let showHeader = true;
  let headerOnTop = true;
  
	if (browser) {
    let prevScrollpos = window.scrollY;
		window.addEventListener('scroll', (event) => {
			let currentScrollPos = window.scrollY;
			if (prevScrollpos > currentScrollPos) {
				showHeader = true;
			} else if (currentScrollPos > 200) {
				showHeader = false;
				headerOnTop = false;
			} else if (currentScrollPos < 200) {
				headerOnTop = true;
			}
			prevScrollpos = currentScrollPos;
		});
		window.addEventListener('scrollend', () => (headerOnTop = window.scrollY < 150));
	}
</script>

<header
	bind:this={header}
	class:-translate-y-full={!showHeader}
	class="fixed top-0 py-4 w-full z-50 bg-[var(--background)]"
	class:headerOnTop
>
	<div class="flex items-center gap-4 max-w-[1400px] mx-auto px-6">
		<button
			id="langToggleBtn"
			class="bg-none cursor-pointer"
			on:click={toggleLang}
			on:keydown={toggleLang}
		>
			<img
				src={$lang === 'no' ? flagNO : flagUK}
				width="30px"
				height="30px"
				alt={`flag icon of ${$lang === 'no' ? 'Norway' : 'United Kingdom'}`}
			/>
			<p
				class="text-[14px] m-0 font-medium leading-3"
				aria-label={$lang === 'no' ? 'norwegian' : 'english'}
			>
				{$lang === 'no' ? 'NO' : 'EN'}
			</p>
		</button>
		<ToggleSwitch size="0.5rem" />

		<nav id="fullNav" class="flex-1 hidden min-[1200px]:block">
			<ul class="list-none flex gap-4 justify-center">
				<li>
					<a href="#myProjects" class="no-underline text-[var(--clr)]"
						>{$lang === 'en' ? 'Projects' : 'Prosjekter'}</a
					>
				</li>
				<li>
					<a href="#skillset" class="no-underline text-[var(--clr)]"
						>{$lang === 'en' ? 'Skillset' : 'Kompetanse'}</a
					>
				</li>
				<li>
					<a href="#bio" class="no-underline text-[var(--clr)]"
						>{$lang === 'en' ? 'About Me' : 'Om Meg'}</a
					>
				</li>
			</ul>
		</nav>
		<div class="hidden lg:block">
			<Button on:click={() => (window.location.href = '#contact')}>
				{$lang === 'en' ? 'Get in touch' : 'Kontakt Meg'}
			</Button>
		</div>
		<Nav />
	</div>
</header>

<style>
	.headerOnTop {
		background: transparent;
	}

	header {
		font-size: var(--fs-p);
		transition:
			all 200ms ease-in-out,
			background 200ms ease;
	}
</style>
