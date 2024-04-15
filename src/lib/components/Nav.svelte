<script>
	import { browser } from '$app/environment';
	import { lang } from '$lib/stores';
	import MenuBtn from './MenuBtn.svelte';

	let showNav = false;

	function toggleMenu() {
		showNav = !showNav;
	}

	let aside;
	if (browser) {
		document.onclick = (e) => {
			if (!aside.contains(e.target)) showNav = false;
		};
	}
</script>

<aside class:showNav bind:this={aside}>
	<button on:click={toggleMenu} id="showNavBtn" class:active={showNav}>
		<MenuBtn active={showNav} />
	</button>

	<nav class:showNav>
		<ul>
			<li>
				<a href="#hero" on:click={toggleMenu} on:keypress={toggleMenu}>
					{$lang === 'en' ? 'To the Top' : 'Til Toppen'}
					<i class="fa fa-solid fa-home" />
				</a>
			</li>
			<li>
				<a href="#myProjects" on:click={toggleMenu} on:keypress={toggleMenu}>
					{$lang === 'en' ? 'Projects' : 'Prosjekter'}
					<i class="fa afa-solid fa-briefcase" />
				</a>
			</li>
			<li>
				<a href="#skillset" on:click={toggleMenu} on:keypress={toggleMenu}>
					{$lang === 'en' ? 'Skillset' : 'Kompetanse'}
					<i class="fa fa-solid fa-toolbox" />
				</a>
			</li>
			<li>
				<a href="#bio" on:click={toggleMenu} on:keypress={toggleMenu}>
					{$lang === 'en' ? 'About Me' : 'Om meg'}
					<i class="fa fa-solid fa-user" />
				</a>
			</li>
			<li>
				<a href="#contact" on:click={toggleMenu} on:keypress={toggleMenu}>
					{$lang === 'en' ? 'Get in Touch' : 'Ta Kontakt'}
					<i class="fa fa-solid fa-phone-alt" />
				</a>
			</li>
		</ul>
	</nav>

	<div class="background" class:showNav />
</aside>

<style lang="scss">
	:root {
		--btn-margin: 1rem;
		--btn-width: 4rem;
	}

	aside {
		position: fixed;
		top: 0;
		right: 0;
		z-index: 1000;

		@media screen and (min-width: 1200px) {
			display: none;
		}
	}

	#showNavBtn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		border: none;
		background: var(--milkywhite);
		border-radius: 50%;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
		width: var(--btn-width);
		height: var(--btn-width);
		z-index: 2;
		transition: all 200ms ease;

		&:hover {
			scale: 1.1;
			box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
		}
	}

	.background {
		--navBgWidth: 1px;
		background: var(--gradient-primary);
		width: calc(var(--btn-width) - 4px);
		aspect-ratio: 1;
		border-radius: 50%;
		position: absolute;
		top: var(--btn-margin);
		right: var(--btn-margin);
		translate: calc((var(--btn-width) * -0.5) + (var(--navBgWidth) * 0.5))
			calc((var(--btn-width) * 0.5) + (var(--navBgWidth) * -0.5));
		z-index: -1;
		transition: all 500ms ease;
		width: var(--navBgWidth);

		@keyframes rotateBackground {
			0% {
				rotate: 0deg;
			}
			100% {
				rotate: 360deg;
			}
		}

		&.showNav {
			--navBgWidth: 210vh;
			animation: rotateBackground 10000ms infinite forwards;
		}
	}

	nav {
		z-index: 1;
		translate: 100%;
		position: fixed;
		top: calc(var(--btn-width));
		right: 1rem;

		&.showNav {
			translate: 0;
		}
	}

	ul {
		color: white;
		list-style-type: none;
		text-align: right;
		font-size: 2.5rem;
		padding: 3rem 1rem;

		& li {
			margin-block: 0.5em;
			translate: 150%;
			transition: all 250ms ease-in-out;

			& a {
				display: grid;
				grid-template-columns: 1fr 2em;
				align-items: center;
				justify-content: end;
				color: var(--milkywhite);
				text-decoration: none;
				transition: all 200ms ease-in-out;

				&:hover {
					padding-right: 1rem;
				}
			}

			& & i {
				font-size: 1.5em;
				justify-self: center;
			}
		}
	}
	.showNav {
		@for $i from 1 through 5 {
			& li:nth-child(#{$i}) {
				$delay: 100ms;
				transition: all 250ms ease-in-out;
				translate: 0;
				transition-delay: $delay * $i;
			}
		}
	}
</style>
