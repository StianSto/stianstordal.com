<script>
  import Button from "./lib/components/Button.svelte";
  import ToggleSwitch from "./lib/components/ToggleSwitch.svelte";
  import Hero from "./sections/Hero.svelte";
  import Projects from "./sections/Projects.svelte";
  import Skillset from "./sections/Skillset.svelte";
  import Bio from "./sections/Bio.svelte";
  import Contact from "./sections/Contact.svelte";
  import flagNO from "./assets/lang-no.png";
  import flagUK from "./assets/lang-uk.png";
  import { lang, theme } from "./lib/stores";
  import HeroDivider from "./lib/components/dividers/HeroDivider.svelte";
  import Nav from "./lib/components/Nav.svelte";
  // import BackgroundBlob from "./lib/components/BackgroundBlob.svelte";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
  function toggleLang() {
    lang.update(() => (currentLang === "no" ? "en" : "no"));
    document.documentElement.lang = currentLang;
  }

  let header;
  let showHeader = true;
  let headerOnTop = true;
  let prevScrollpos = window.scrollY;
  window.addEventListener("scroll", (event) => {
    let currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
      showHeader = true;
    } else if (currentScrollPos > 200) {
      showHeader = false;
      headerOnTop = false;
    } else if (currentScrollPos < 200) {
      headerOnTop = true;
    }
    prevScrollpos = currentScrollPos;
  });
  window.addEventListener(
    "scrollend",
    () => (headerOnTop = window.scrollY < 150)
  );
</script>

<!-- <BackgroundBlob /> -->

<header
  bind:this={header}
  class:-translate-y-full={!showHeader}
  class="fixed top-0 py-4 w-full z-50 bg-[var(--background)]"
  class:headerOnTop
>
  <div class="flex items-center gap-4 max-w-[1400px] mx-auto px-6">
    <button
      id="langToggleBtn"
      class="bg-none cursor-pointer"
      on:click={toggleLang}
      on:keydown={toggleLang}
    >
      <img
        src={currentLang === "no" ? flagNO : flagUK}
        width="30px"
        height="30px"
        alt={`flag icon of ${
          currentLang === "no" ? "Norway" : "United Kingdom"
        }`}
      />
      <p
        class="text-[14px] m-0 font-medium leading-3"
        aria-label={currentLang === "no" ? "norwegian" : "english"}
      >
        {currentLang === "no" ? "NO" : "EN"}
      </p>
    </button>
    <ToggleSwitch size="0.5rem" />

    <nav id="fullNav" class="flex-1 hidden min-[1200px]:block">
      <ul class="list-none flex gap-4 justify-center">
        <li>
          <a href="#myProjects" class="no-underline text-[var(--clr)]"
            >{currentLang === "en" ? "Projects" : "Prosjekter"}</a
          >
        </li>
        <li>
          <a href="#skillset" class="no-underline text-[var(--clr)]"
            >{currentLang === "en" ? "Skillset" : "Kompetanse"}</a
          >
        </li>
        <li>
          <a href="#bio" class="no-underline text-[var(--clr)]"
            >{currentLang === "en" ? "About Me" : "Om Meg"}</a
          >
        </li>
      </ul>
    </nav>
    <div class="hidden lg:block">
      <Button on:click={() => (window.location.href = "#contact")}>
        {#if currentLang === "en"}
          Get in touch
        {:else}
          Kontakt Meg
        {/if}
      </Button>
    </div>
    <Nav />
  </div>
</header>

<main class="mx-auto">
  <Hero />
  <HeroDivider />
  <Projects />
  <Skillset />
  <Bio />
  <Contact />
</main>

<style>
  .headerOnTop {
    background: transparent;
  }

  header {
    font-size: var(--fs-p);
    transition:
      all 200ms ease-in-out,
      background 200ms ease;
  }
</style>
