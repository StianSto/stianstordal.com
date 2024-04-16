type IBio = {
	body: {
		[key: string]: string[];
	};
	links: {
		text: string;
		href: string;
		icon: string;
	}[];
};

const Bio: IBio = {
	body: {
		en: [
			'Hi! My name is Stian. I am a Front-End / aspiring Full-stack developer, with a passion for combining creativity and logic. I am a Norwegian 28-year old, and I speak scandinavian languages and english fluently.',

			'I value teamwork and discipline above all else and I like to work with people who have the same interest in their as i do, and love what they do as much as i do.',

			'As a developer I have an unquenchable thirst for knowledge and have a need for continously expanding my knowledge in my field. I like working with JS to try and solve logical puzzles. I am also fond of working with design, and the balance between learning, logical thinking and creativity is what keeps me going as a developer'
		],
		no: [
			' Hei! Mitt navn er Stian. Jeg er en front-end / aspirerende fullstack-utvikler, med en lidenskap for å kombinere kreativitet og logikk. Jeg er 28 år gammel nordmann, og jeg snakker skandinaviske språk og engelsk flytende.',

			'Jeg verdsetter teamarbeid og disiplin fremfor alt annet og liker å jobbe med folk som har samme interesse for arbeidet sitt som meg, og elsker hva de gjør like mye som jeg gjør.',

			' Som utvikler har jeg en uslukkelig tørst for kunnskap og har en behov for å kontinuerlig utvide min kunnskap innenfor mitt felt. Jeg liker å jobbe med JavaScript for å prøve å løse logiske gåter. Jeg er også glad i å jobbe med design, og balansen mellom læring, logisk tenkning og kreativitet er det som holder meg gående som utvikler.'
		]
	},
	links: [
		{
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/stian-stordal-51222b15b/',
			icon: 'devicon-linkedin-plain'
		},
		{
			text: 'GitHub',
			href: 'https://github.com/StianSto',
			icon: 'devicon-github-plain'
		}
	]
};

export default Bio;