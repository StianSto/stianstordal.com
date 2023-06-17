<script>
  import Button from "./lib/components/Button.svelte";
  import ToggleSwitch from "./lib/components/ToggleSwitch.svelte";
  import Hero from "./sections/Hero.svelte";
  import sectionDividerHero from "./assets/section-divider-hero.svg";
  import Projects from "./sections/Projects.svelte";
  import Skillset from "./sections/Skillset.svelte";
  import Bio from "./sections/Bio.svelte";
  import Contact from "./sections/Contact.svelte";
  import flagNO from "./assets/lang-no.png";
  import flagUK from "./assets/lang-uk.png";

  import { lang, theme } from "./lib/stores";
  import HeroDivider from "./lib/components/dividers/HeroDivider.svelte";
  import Nav from "./lib/components/Nav.svelte";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
  function toggleLang() {
    lang.update(() => (currentLang === "no" ? "en" : "no"));
    document.documentElement.lang = currentLang;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme.update(() => "dark");
    document.body.classList.add("dark");
  } else {
    theme.update(() => "light");
    document.body.classList.remove("dark");
  }
</script>

<header>
  <button id="langToggleBtn">
    <img
      src={currentLang === "no" ? flagNO : flagUK}
      width="30px"
      height="30px"
      alt=""
      on:click={toggleLang}
      on:keydown={toggleLang}
    />
    <span>{currentLang === "no" ? "NO" : "UK"}</span>
  </button>
  <ToggleSwitch size="0.5rem" />
</header>

<Nav />

<main>
  <Hero />
  <HeroDivider />
  <Projects />
  <Skillset />
  <Bio />
  <Contact />
</main>

<style>
  header {
    position: absolute;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 4rem;
    padding: 1rem;
  }

  #langToggleBtn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  main {
    margin-inline: auto;

    background: var(--background);
  }
</style>
