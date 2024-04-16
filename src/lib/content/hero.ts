const HeroJSON: IHeroJSON = {
  "title": {
    "no": "FrontEnd / Fullstack Utvikler",
    "en": "FrontEnd / Fullstack developer"
  },
  "subtitle": {
    "no": "Jeg er Stian, en FrontEnd utvikler med en lidenskap for å kombinere kreativitet og logikk. Jeg elsker å bli utfordret og lære nye ting!",
    "en": "I'm Stian, a FrontEnd developer with a passion for combining creativity and logic. I love being challenged and learning new things!"
  }
}

interface IHeroJSON {
  title: {
    [key: string]: string
  },
  subtitle: {
    [key: string]: string
  }
}

export default HeroJSON