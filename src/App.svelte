<script>
  import Button from "./lib/components/Button.svelte";
  import ToggleSwitch from "./lib/components/ToggleSwitch.svelte";
  import Hero from "./sections/Hero.svelte";
  import sectionDividerHero from "./assets/section-divider-hero.svg";
</script>

<main>
  <Hero />
  <img src={sectionDividerHero} alt="" id="sectionDividerhero" />
</main>

<style>
  main {
    margin-inline: auto;
  }

  #sectionDividerhero {
    width: 100%;
    translate: 0 -60%;
  }
</style>
