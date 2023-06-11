<script>
  import Button from "./lib/components/Button.svelte";
  import ToggleSwitch from "./lib/components/ToggleSwitch.svelte";
  import Hero from "./sections/Hero.svelte";
  import sectionDividerHero from "./assets/section-divider-hero.svg";
  import Projects from "./sections/Projects.svelte";
  import Skillset from "./sections/Skillset.svelte";
  import Bio from "./sections/Bio.svelte";
  import Contact from "./sections/Contact.svelte";
</script>

<main>
  <Hero />
  <img src={sectionDividerHero} alt="" id="sectionDividerhero" />
  <Projects />
  <Skillset />
  <Bio />
  <Contact />
</main>

<style>
  main {
    margin-inline: auto;

    background: var(--background);
  }

  #sectionDividerhero {
    width: 100%;
  }
</style>
