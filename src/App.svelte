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
  import BackgroundBlob from "./lib/components/BackgroundBlob.svelte";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
  function toggleLang() {
    lang.update(() => (currentLang === "no" ? "en" : "no"));
    document.documentElement.lang = currentLang;
  }

  let header;
  let headerOnTop = true;
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
    if (prevScrollpos > currentScrollPos) {
      header.style.top = "0";
    } else if (currentScrollPos > 200) {
      header.style.top = "-100px";
      headerOnTop = false;
    } else if (currentScrollPos < 200) {
      headerOnTop = true;
    }
    prevScrollpos = currentScrollPos;
  };
</script>

<BackgroundBlob />

<header bind:this={header} class:headerOnTop>
  <div class="container">
    <button id="langToggleBtn" on:click={toggleLang} on:keydown={toggleLang}>
      <img
        src={currentLang === "no" ? flagNO : flagUK}
        width="30px"
        height="30px"
        alt={`flag icon of ${
          currentLang === "no" ? "Norway" : "United Kingdom"
        }`}
      />
      <span
        class="clr"
        aria-label={currentLang === "no" ? "norwegian" : "english"}
        >{currentLang === "no" ? "NO" : "EN"}</span
      >
    </button>
    <ToggleSwitch size="0.5rem" />

    <nav id="fullNav">
      <ul>
        <li>
          <a href="#myProjects"
            >{currentLang === "en" ? "Projects" : "Prosjekter"}</a
          >
        </li>
        <li>
          <a href="#skillset"
            >{currentLang === "en" ? "Skillset" : "Kompetanse"}</a
          >
        </li>
        <li>
          <a href="#bio">{currentLang === "en" ? "About Me" : "Om Meg"}</a>
        </li>
      </ul>
    </nav>
    <div class="btn-display">
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

<main>
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
    position: fixed;

    font-size: var(--fs-p);
    padding: 1rem 0;
    transition:
      all 200ms ease-in-out,
      background 200ms ease;
    width: 100%;
    background-color: var(--background);
    z-index: 1000;

    @media screen and (max-width: 1199px) {
      position: absolute;

      & .btn-display {
        display: none;
      }
    }

    & .container {
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 1400px;
      margin-inline: auto;
    }
  }

  #fullNav {
    flex: 1;
    & ul {
      list-style: none;
      display: flex;
      gap: 1rem;
      justify-content: center;
      & a {
        color: var(--clr);
        text-decoration: none;
      }
    }
    @media screen and (max-width: 1199px) {
      display: none;
    }
  }

  #langToggleBtn {
    border: none;
    background: none;
    cursor: pointer;
    padding: 0;
  }

  main {
    margin-inline: auto;
  }
</style>
