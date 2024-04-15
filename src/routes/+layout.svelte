<script>
	import { browser } from '$app/environment';
	import { lang, theme } from '$lib/stores';
	import '../app.scss';
	// import `/theme/${$theme}.css`
	import Header from '$lib/components/Header.svelte';
	if (browser) {
		const getItem = localStorage.getItem('lang');
		lang.set(getItem ? JSON.parse(getItem) : 'en');
	}
</script>

<svelte:head>
	<title>Stian Stordal | Front End Developer</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />

	<meta name="color-scheme" content={$theme} />
	<link rel="stylesheet" type="text/css" href={`/theme/${$theme}.css`} />

	<link
		href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		type="text/css"
		href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
	/>

	<script src="https://kit.fontawesome.com/6430c8691d.js" crossorigin="anonymous"></script>
</svelte:head>

<Header />
<slot />
