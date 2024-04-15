<script>
	import { browser } from '$app/environment';
	import { theme } from '../stores';
	import star from '$lib/assets/star.svg';
	import cloud from '$lib/assets/cloud.svg';
	import Moon from '$lib/assets/moon.svg';

	export let name = '';
	export let size = '10px';

	let isChecked = $theme === 'dark';

	function toggleTheme() {
		theme.update(() => (isChecked ? 'dark' : 'light'));
		// if ($theme === 'dark') {
		// 	document.body.classList.add('dark');
		// } else {
		// 	document.body.classList.remove('dark');
		// }
	}

	toggleTheme();
</script>

<label class="switch" style="font-size: {size};">
	<input type="checkbox" {name} bind:checked={isChecked} on:change={toggleTheme} />
	<span class="slider">
		<span class="slider-btn">
			<i class="fa fa-solid fa-moon {isChecked ? 'fa-moon' : 'fa-sun'}" />
		</span>
		<span class="background">
			<i class="star" style="content: url({star});" />
			<i class="star" style="content: url({star});" />
			<i class="star" style="content: url({star});" />
			<i class="star" style="content: url({star});" />
			<i class="star" style="content: url({star});" />
		</span>
		<span class="background">
			<i class="cloud" style="content: url({cloud});" />
			<i class="cloud" style="content: url({cloud});" />
		</span>
	</span>
</label>

<style lang="scss">
	.switch {
		position: relative;
		--size: 1em;
		--height: calc(var(--size) * 3);
		--paddding: calc(var(--height) / 4);
		--width: calc(2.75 * var(--height));

		width: 80px;
		height: 40px;
		& * {
			box-sizing: content-box !important;
		}
	}
	input {
		display: none;
	}
	.slider {
		width: var(--width);
		height: var(--height);
		padding: var(--paddding);
		border-radius: 100vw;
		background-color: #95e2ff;
		overflow: hidden;

		box-shadow:
			inset 2px 2px 3px rgba(0, 0, 0, 0.3),
			inset -2px -2px 3px rgba(255, 255, 255, 0.2);
		border: 1px solid #95e2ff;

		position: absolute;
		transition: 200ms ease;

		&-btn {
			height: var(--height);
			aspect-ratio: 1;
			border-radius: 100vw;
			background-color: white;

			display: flex;
			justify-content: center;
			align-items: center;

			position: absolute;
			top: 50%;
			translate: calc(var(--width) - 100%) -50%;
			transition: translate 200ms ease;

			box-shadow: inset -1px -1px 1px rgba(0, 0, 0, 0.1);

			& .fa {
				font-size: calc(var(--size) * 2);
				color: #ffce00;
			}
		}
	}

	.background {
		& i {
			position: absolute;
			transition: all 200ms ease;
			user-select: none;
		}

		.cloud {
			width: 2em;

			&:nth-child(1) {
				translate: 0% 50%;
				font-size: 1.25em;
			}
			&:nth-child(2) {
				translate: 150% 0%;
			}
		}

		.star {
			position: absolute;
			margin-left: calc(var(--height) + 5px);

			transform: translateY(var(--width));

			width: 1em;

			&:nth-child(2) {
				translate: 50% 250%;
				width: 0.75em;
			}
			&:nth-child(3) {
				translate: 150% 90%;
				width: 1.25em;
			}
			&:nth-child(4) {
				translate: 350% -30%;
				width: 0.75em;
			}
			&:nth-child(5) {
				translate: 400% 90%;
			}
		}
	}

	input:checked ~ .slider {
		border: 1px solid var(--deep-blue);
		background: var(--deep-blue);

		& .slider-btn {
			translate: 0px -50%;
		}

		& .star,
		& .cloud {
			transform: translateY(0);
		}

		& .cloud {
			transform: translateY(var(--width));
		}
	}
</style>
