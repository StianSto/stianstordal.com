<script>
  import Button from "../lib/components/Button.svelte";
  import Underline from "../lib/components/Underline.svelte";
  import ArrowDrawn from "../lib/components/ArrowDrawn.svelte";
  import { lang } from "../lib/stores";
  import profileImg1600 from "../assets/profile/profile-w1600.jpg";
  import profileImg800 from "../assets/profile/profile-w800.jpg";

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
      <img
        src={profileImg1600}
        srcset={`${profileImg1600} 1600w, 
				${profileImg800} 800w,
				`}
        alt="Stian Stordal, author of this page"
      />

      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 586.65 737.24"
      >
        <defs>
          <style>
            .variant {
              fill: none;
              stroke: var(--primary-variant);
              stroke-miterlimit: 10;
              stroke-width: 3px;
            }
          </style>
        </defs>
        <path
          class="variant"
          d="m175.99,666.93C-77.49,459.38,21.1,443.32,14.42,233.98,7.75,24.64,159.83-24.08,401.77,11.76c241.95,35.84,190.97,283.37,146.65,417.03-44.32,133.66-118.95,445.7-372.43,238.15Z"
        />
      </svg>

      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 587.87 719.7"
        ><defs
          ><style>
            .primary {
              fill: none;
              stroke: var(--primary);
              stroke-miterlimit: 10;
              stroke-width: 2px;
            }
          </style></defs
        ><g id="Path_5"
          ><path
            class="primary"
            d="m441.59,83.85c223.23,225.55,126.63,231.06,111.92,433.4-14.71,202.34-166.14,233.92-395.6,174.95C-71.55,633.24,2.56,399.92,58.75,275.65c56.2-124.28,159.61-417.35,382.83-191.8Z"
          /></g
        ></svg
      >
    </div>
  </div>
</section>

<style lang="scss">
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
      position: relative;
      isolation: isolate;

      & .text {
        flex: 2;

        & p {
          margin-block: 2em 1em;
        }
      }

      & svg {
        position: absolute;
        top: 50%;
        translate: 0 -50%;
        z-index: -1;

        &:has(.variant) {
          animation: rotate 80s linear infinite reverse;
        }
        &:has(.primary) {
          animation: rotate 50s linear infinite;
        }
        @media screen and (prefers-reduced-motion) {
          animation: none;
        }
        @keyframes rotate {
          100% {
            rotate: 360deg;
          }
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
      -webkit-mask-image: url("../assets/profile/profile-clip.svg");
      mask-image: url("../assets/profile/profile-clip.svg");
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
    }
  }

  .get-in-touch {
    display: flex;
    align-items: center;
    gap: 2em;
  }

  @keyframes animateLookDown {
    100% {
      translate: 0 0.5rem;
    }
  }
</style>
