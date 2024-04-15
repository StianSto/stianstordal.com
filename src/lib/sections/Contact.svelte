<script lang="ts">
	import { lang } from '$lib/stores';

	let email = 'stordalstiandev@gmail.com';
	let tel = '+47 95 45 96 87';
	let emailCopied = false;
	let telCopied = false;

	function copyToClipboard(value: string) {
		navigator.clipboard.writeText(value);
		switch (value) {
			case tel:
				telCopied = true;
				emailCopied = false;
				break;
			case email:
				emailCopied = true;
				telCopied = false;
				break;
		}
		setTimeout(() => {
			emailCopied = false;
			telCopied = false;
		}, 3500);
	}
</script>

<div id="divider-contact-top" class="w-full min-h-20 m-0 -mb-1 aspect-[8/1]"></div>
<svg class="svg" style="position: absolute;" width="0" height="0">
	<clipPath id="divider-top-clip" clipPathUnits="objectBoundingBox">
		<path d="M0,0 C0.22, 0.7,0.507,1,1,0.3 L1,1 L0,1 Z"></path>
	</clipPath>
</svg>

<section id="contact" class="m-0 text-slate-100 px-4">
	<div class="max-w-3xl mx-auto pt-12 pb-20 w-full">
		<h2 class="font-medium mb-4">
			{$lang === 'en' ? 'Get in Touch' : 'Ta Kontakt'}
		</h2>
		<div>
			<div class="flex items-center gap-4">
				<button on:click={() => copyToClipboard(email)} on:keydown={() => copyToClipboard(email)}>
					<i class="fa fa-solid fa-envelope text-4xl" />
					<p class="hover:cursor-pointer text-slate-100">
						{emailCopied ? 'Copied Email' : email}
					</p>
				</button>
			</div>
			<div class="flex items-center gap-4">
				<button on:click={() => copyToClipboard(tel)} on:keydown={() => copyToClipboard(tel)}>
					<i class="fa fa-solid fa-phone-alt text-4xl" />
					<p class="hover:cursor-pointer text-slate-100">
						{telCopied ? 'Copied Number' : tel}
					</p>
				</button>
			</div>
		</div>
	</div>
</section>

<style>
	#contact {
		background-color: var(--charcoal);
	}

	#divider-contact-top {
		rotate: y 180deg;
		background: var(--charcoal);
		clip-path: url('#divider-top-clip');
	}
</style>
