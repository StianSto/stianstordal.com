<script>
  import { fly, fade } from "svelte/transition";
  import Skillset from "./Skillset.svelte";
  import cypressLogo from "../assets/cypress-logo.svg";
  import skillsetTopBow from "../assets/skillsetTopBow.svg";
  import { lang } from "../lib/stores";
  import { onDestroy, onMount } from "svelte";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));

  let visible = false;
  let element;

  function handleScroll() {
    const bounding = element.getBoundingClientRect();

    if (bounding.top <= document.documentElement.clientHeight / 2) {
      visible = true;
    }
  }
  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<section id="skillset">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920.431 121.082"
    aria-hidden="true"
  >
    <path
      id="Path_95"
      data-name="Path 95"
      d="M1926,2099.467v64.356C1720.357,2214.35,1016.812,2283.8,5.569,2105.7L6,2099.467Z"
      transform="translate(-5.569 -2099.467)"
      fill="var(--background)"
      style="transition: fill 200ms ease"
    />
  </svg>

  <div class="container" bind:this={element}>
    {#key visible}
      <h2>
        {#if currentLang === "en"}
          My Skillset
        {:else}
          Min Kompetanse
        {/if}
      </h2>
      <div>
        <div class="skills-frontend skills-container">
          <h3 in:fade class:visible>FrontEnd</h3>
          <ul>
            <li in:fly={{ x: "100%", duration: 500, delay: 50 }} class:visible>
              <i class="devicon-html5-plain" />
              <span>HTML</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 100 }} class:visible>
              <i class="devicon-css3-plain" />
              <span>CSS</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 150 }} class:visible>
              <i class="devicon-javascript-plain" />
              <span>JavaScript</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 200 }} class:visible>
              <i class="devicon-typescript-plain" />
              <span>TypeScript</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 250 }} class:visible>
              <i class="devicon-bootstrap-plain" />
              <span>Bootstrap</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 300 }} class:visible>
              <i class="devicon-tailwindcss-plain" />
              <span>Tailwind</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 350 }} class:visible>
              <i class="devicon-sass-plain" />
              <span>Sass</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 400 }} class:visible>
              <i class="devicon-react-plain" />
              <span>React</span>
            </li>

            <li in:fly={{ x: "100%", duration: 500, delay: 450 }} class:visible>
              <i class="devicon-svelte-plain" />
              <span>Svelte</span>
            </li>
            <li
              in:fly={{ x: "100%", duration: 500, delay: 500 }}
              class:visible
              class="no-icon"
            >
              <img class="cypress" src={cypressLogo} alt="cypress logo" />
              <span>Cypress</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 550 }} class:visible>
              <i class="devicon-jest-plain" />
              <span>Jest</span>
            </li>
          </ul>
        </div>
        <div class="skills-backend skills-container">
          <h3 in:fade={{ delay: 500 }} class:visible>BackEnd</h3>
          <ul>
            <li in:fly={{ x: "100%", duration: 500, delay: 600 }} class:visible>
              <i class="devicon-express-original" />
              <span>Express</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 650 }} class:visible>
              <i class="devicon-mongodb-plain" />
              <span>MongoDB</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 700 }} class:visible>
              <!-- <i class="devicon-nextjs-original-wordmark white"></i> -->
              <i class="devicon-nextjs-plain"></i>
              <span>Next.JS</span>
            </li>
          </ul>
        </div>
        <div class="skills-design skills-container">
          <h3 in:fade={{ delay: 600 }} class:visible>Design</h3>
          <ul>
            <li in:fly={{ x: "100%", duration: 500, delay: 750 }} class:visible>
              <i class="devicon-xd-plain" />
              <span>Adobe XD</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 800 }} class:visible>
              <i class="devicon-illustrator-plain" />
              <span>Adobe Illustrator</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 850 }} class:visible>
              <i class="devicon-photoshop-plain" />
              <span>Adobe Photoshop</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 900 }} class:visible>
              <i class="devicon-figma-plain" />
              <span>Figma</span>
            </li>
          </ul>
        </div>
      </div>
    {/key}
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1920 107.419"
    class="bow"
    aria-hidden="true"
  >
    <path
      id="Path_96"
      data-name="Path 96"
      d="M6,3061.619H1926v-42.159c-876.847-123.422-1437.421-41.4-1920-.015Z"
      transform="translate(-6 -2954.2)"
      fill="var(--background)"
      style="transition: fill 200ms ease"
    />
  </svg>
</section>

<style lang="scss">
  #skillset {
    min-height: 500px;
    background-color: var(--primary);
    background: var(--gradient-primary);
    color: white;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 3rem;
  }

  h3 {
    font-weight: 400;
    margin-bottom: 0.5em;
    opacity: 0;

    &.visible {
      opacity: 1;
    }
  }

  .container {
    padding-block: 4rem;
  }

  .skills-container {
    & ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, var(--fs-icons));
      gap: 3em 2em;
      list-style-type: none;
      padding: 0;
      margin-bottom: 3rem;

      @for $i from 3 through 8 {
        @media screen and (min-width: calc($i * 100px)) {
          grid-template-columns: repeat(#{$i}, 1fr);
        }
      }

      & li {
        position: relative;
        font-size: var(--fs-icons);
        margin-block: auto;
        height: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;

        &.visible {
          opacity: 1;
        }

        & span {
          width: fit-content;
          text-align: center;
          position: absolute;
          font-size: 1rem;
          bottom: 0;
          left: 50%;
          translate: -50% 150%;
          opacity: 0;
          transition: all 250ms ease-in-out;
        }

        &:hover {
          & span {
            translate: -50% 100%;
            opacity: 1;
          }
        }
      }

      & .no-icon {
        & .cypress {
          width: var(--fs-icons);
        }
      }
    }
  }
  .bow {
    translate: 0 6px;
  }
</style>
