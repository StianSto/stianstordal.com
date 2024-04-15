interface ProductImage {
	original: string;
	w1600: string;
	w800: string;
}

interface IProductsJSON {
	id: string;
	title: string;
	description: {
		[key: string]: string;
	};

	thumbnail: ProductImage;
	imageDesktop: ProductImage;
	imageMobile: ProductImage;

	websiteLink: string;
	repoLink: string;
}

const projectsJSON: IProductsJSON[] = [
	{
		id: 'barterHouse',
		title: 'BarterHouse',
		description: {
			no: 'BarterHouse er en auksjonsside der brukere kan registrere seg, bla rundt og kjøpe varer, eller til og med liste opp varer selv. Enten de vil finne noe nytt, eller tjene penger på de gamle tingene sine, er dette et nettsted som er morsom og enkel å bruke!',
			en: 'BarterHouse is an auction site where users can sign up, browse around and buy items, or even list items off their own. Whether they want to find something new, or to make a profit on their old things, this is a site that is fun and easy to use!'
		},

		thumbnail: {
			original: '/projects/barterhouse/logo.png',
			w1600: '/projects/barterhouse/logo-1600w.png',
			w800: '/projects/barterhouse/logo-800w.png'
		},
		imageDesktop: {
			original: '/projects/barterhouse/desktop.png',
			w1600: '/projects/barterhouse/desktop-800w.jpg',
			w800: '/projects/barterhouse/desktop-800w.jpg'
		},
		imageMobile: {
			original: '/projects/barterhouse/phone.jpg',
			w1600: '/projects/barterhouse/phone-1600w.jpg',
			w800: '/projects/barterhouse/phone-800w.jpg'
		},
		websiteLink: 'https://barterhouse.stianstordal.com',
		repoLink: 'https://github.com/StianSto/BarterHouse'
	},

	{
		id: 'skarbard',
		title: 'Skårbård',
		description: {
			no: '[Under utvikling. foreløpig i beta] "Skårbård" er en web-app som lar deg sette opp et dynamisk scoreboard for hvilket som helst spill man spiller. man kan sette regler som at den med mest eller minst poeng vinner, at spillet er over når en spiller har 50 poeng, eller hva anet man kunne finne på. Skårbård er bygd med NextJS og React med TailwindCSS. Den er forstatt under utvikling og mange flere funksjoner og egenskaper kommer til å bli lagt til',
			en: '[Under development. currently in beta]. "Skårbård" is a web app that allows you to set up a dynamic scoreboard for any game you are playing. you can set rules such as the one with most or the fewest points wins, that the game is over when a player has 50 points, or whatever else you could come up with. Skårbård is built with NextJS and React with TailwindCSS. It is still in development and many more functions and features are going to be added.'
		},

		thumbnail: {
			original: '/projects/skarbard/logo.svg',
			w1600: '/projects/skarbard/logo.svg',
			w800: '/projects/skarbard/logo.svg'
		},
		imageDesktop: {
			original: '/projects/skarbard/desktop.png',
			w1600: '/projects/skarbard/desktop.png',
			w800: '/projects/skarbard/desktop.png'
		},
		imageMobile: {
			original: '/projects/skarbard/phone',
			w1600: '/projects/skarbard/phone.png',
			w800: '/projects/skarbard/phone.png'
		},
		websiteLink: 'https://skarbard.stianstordal.com',
		repoLink: 'https://github.com/StianSto/skarbard'
	},

	{
		id: 'mollify',
		title: 'Mollify',
		description: {
			no: 'Mollify-prosjektet er en pakke som består av en LMS-pakke (frontenden for Mollify), CLI, Molly (Mollifys personlige AI-assistent), TTS (tekst-til-tale), Flow (en redaktør for å lage og redigere leksjonsinnhold) og Mollify-typer for enkel import av typer. Jeg har jobbet med dette prosjektet siden eksamen min i Frontend Development-programmet på Noroff. Min rolle i dette har vært variert, fra å jobbe med backend med Molly, AI-assistenten, lage remark-plugins, og annet på front end',
			en: "The Mollify project is a package consisting of an LMS package (the front end for mollify), CLI, Molly (mollify's personal AI assistant), TTS (text-to-speech), Flow (an editor for creating and editing lesson content) and mollfy types for easy type imports. I have worked on this project since my exam at Front End Development program in noroff. My role in this has been varied, from working on backend with Molly the Ai assistant, creating remark plugins, and other front end tasks"
		},

		thumbnail: {
			original: '/projects/mollify/mollify-thumbnail.png',
			w1600: '/projects/mollify/mollify-thumbnail.png',
			w800: '/projects/mollify/mollify-thumbnail.png'
		},
		imageDesktop: {
			original: '/projects/mollify/mollify-desktop.png',
			w1600: '/projects/mollify/mollify-desktop-1600w.png',
			w800: '/projects/mollify/mollify-desktop-1600w.png'
		},
		imageMobile: {
			original: '/projects/mollify/mollify-phone.png',
			w1600: '/projects/mollify/mollify-phone-1600w.png',
			w800: '/projects/mollify/mollify-phone-1600w.png'
		},
		websiteLink: 'https://mollify.noroff.dev',
		repoLink: 'https://github.com/Fermain/-mollify'
	},

	{
		id: 'csm',
		title: 'Community Science Museum (CSM)',
		description: {
			no: 'CSM er et lokalt vitenskapsmuseum ment for barn som er interessert i vitenskap og lære hvordan verden fungerer. Nettstedet søker å fascinere barn til å lære mer og åpner opp for å besøke museet. Designet er fargerikt, men ikke barnslig.',
			en: 'CSM is a local science museum meant for children interested in science and learning how the world works. The website seeks to intrigue children to learn more and opens up for visiting the museum. the design is colorful, but not childish.'
		},
		thumbnail: {
			original: '/projects/csm/logo.png',
			w1600: '/projects/csm/logo-1600w.png',
			w800: '/projects/csm/logo-800w.png'
		},
		imageDesktop: {
			original: '/projects/csm/desktop.jpg',
			w1600: '/projects/csm/desktop-1600w.jpg',
			w800: '/projects/csm/desktop-800w.jpg'
		},
		imageMobile: {
			original: '/projects/csm/phone.jpg',
			w1600: '/projects/csm/phone-1600w.jpg',
			w800: '/projects/csm/phone-800w.jpg'
		},
		websiteLink: 'https://csm.stianstordal.com',
		repoLink: 'https://github.com/StianSto/Community-Science-Museum__Stian-Stordal'
	},
	{
		id: 'online shop',
		title: 'Online Shop',
		description: {
			no: 'Online Shop er et veldig enkelt prosjekt, men også en viktig milepæl i min karriere. Dette var mitt første ordentlige møte med React og TypeScript. Den bruker Noroffs Online Shop api. Dette var også første gangen jeg bestemte meg for en spesifikk design stil på forhånd',
			en: "Online Shop is a very simple project, but also an important milestone in my career. This was my first real encounter with React and TypeScript. It uses Noroff's Online Shop API. It is also the first time I decided to go for a specific art style"
		},
		thumbnail: {
			original: '/projects/onlineShop/online-shop-thumbnail.png',
			w1600: '/projects/onlineShop/online-shop-thumbnail.png',
			w800: '/projects/onlineShop/online-shop-thumbnail.png'
		},
		imageDesktop: {
			original: '/projects/onlineShop/online-shop-desktop.png',
			w1600: '/projects/onlineShop/online-shop-desktop-1600w.png',
			w800: '/projects/onlineShop/online-shop-desktop-1600w.png'
		},
		imageMobile: {
			original: '/projects/onlineShop/online-shop-phone.png',
			w1600: '/projects/onlineShop/online-shop-phone-1600w.png',
			w800: '/projects/onlineShop/online-shop-phone-1600w.png'
		},
		websiteLink: 'https://incredible-marshmallow-544450.netlify.app/',
		repoLink: 'https://github.com/StianSto/frontend-frameworks-ca'
	}
];

export default projectsJSON;
