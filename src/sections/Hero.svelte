<script>
  import profileImg from "../assets/profile_stian.jpg";
  import Button from "../lib/components/Button.svelte";
  import drawnArrow from "../assets/drawn-arrow.svg";
  import Underline from "../lib/components/Underline.svelte";
  import ArrowDrawn from "../lib/components/ArrowDrawn.svelte";
  import { lang } from "../lib/stores";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
</script>

<section id="hero">
  <div class="container">
    <div class="text">
      <h1>
        {#if currentLang === "en"}
          Websites should have a
          <Underline>meaningful</Underline>
          experience
        {:else}
          Nettsider skal gi en
          <Underline>meningsfylt</Underline>
          opplevelse
        {/if}
      </h1>
      <p class="subtitle">
        {#if currentLang === "en"}
          Contact me to hire me or for consulting!
        {:else}
          Ta kontakt for å ansette meg eller for konsultasjon
        {/if}
      </p>
      <div class="get-in-touch">
        <a href="#contact">
          <Button>
            {#if currentLang === "en"}
              Get in touch
            {:else}
              Kontakt Meg
            {/if}
          </Button>
        </a>
        <ArrowDrawn />
      </div>
    </div>
    <div class="img-container">
      <img src={profileImg} alt="" />
    </div>
  </div>
</section>

<style>
  #hero {
    height: 100vh;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: -7%;

    & .container {
      display: flex;
      align-items: center;

      & .text {
        flex: 2;

        & p {
          margin-block: 2em 1em;
        }
      }
    }
  }

  .img-container {
    flex: 1;

    @media screen and (max-width: 800px) {
      display: none;
    }
    & img {
      width: 100%;
      border-radius: 40% 70% 40% 70%;
    }
  }

  .get-in-touch {
    display: flex;
    align-items: center;
    gap: 2em;
    & img {
      width: clamp(5rem, 10vw, 10rem);
    }
  }
</style>
