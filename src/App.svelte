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

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
  function toggleLang() {
    lang.update(() => (currentLang === "no" ? "uk" : "no"));
  }
</script>

<header>
  <button id="langToggleBtn">
    <img
      src={currentLang === "no" ? flagNO : flagUK}
      width="50px"
      height="50px"
      alt=""
      on:click={toggleLang}
      on:keydown={toggleLang}
    />
  </button>
  <ToggleSwitch size="0.5rem" />
</header>

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

  #sectionDividerhero {
    width: 100%;
  }
</style>
