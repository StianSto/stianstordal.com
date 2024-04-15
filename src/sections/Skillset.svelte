<script>
  import { fly, fade } from "svelte/transition";
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

<div
  id="divider-top"
  class="bg-gradient -mb-1 w-full min-h-16 aspect-[7/1]"
></div>

<section id="skillset" class="bg-gradient text-white px-8">
  <div class="py-12 mx-auto max-w-screen-lg" bind:this={element}>
    {#key visible}
      <h2 class="font-medium mb-12">
        {#if currentLang === "en"}
          My Skillset
        {:else}
          Min Kompetanse
        {/if}
      </h2>
      <div>
        <div class="skills-container">
          <h3
            in:fade
            class="font-normal mb-2 opacity-0"
            class:opacity-100={visible}
          >
            FrontEnd
          </h3>
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
            <li in:fly={{ x: "100%", duration: 500, delay: 500 }} class:visible>
              <i class="devicon-cypressio-plain"></i>

              <!-- <img class="cypress" src={cypressLogo} alt="cypress logo" /> -->
              <span>Cypress</span>
            </li>
            <li in:fly={{ x: "100%", duration: 500, delay: 550 }} class:visible>
              <i class="devicon-jest-plain" />
              <span>Jest</span>
            </li>
          </ul>
        </div>
        <div class="skills-container">
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
              <i class="devicon-nextjs-plain"></i>
              <span>Next.JS</span>
            </li>
          </ul>
        </div>
        <div class="skills-container">
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
</section>
<div
  id="divider-bottom"
  class="bg-gradient -mt-1 w-full min-h-16 aspect-[7/1]"
></div>
<svg class="svg" style="position: absolute;" width="0" height="0">
  <clipPath id="divider-top-clip" clipPathUnits="objectBoundingBox"
    ><path
      d="
		M0,0 
		C0.22, 0.7,
		0.507,1,
		1,0.3 
		L1,1 
		L0,1
		Z"
    ></path></clipPath
  >
  <clipPath id="divider-bottom-clip" clipPathUnits="objectBoundingBox"
    ><path d="M1,0 L0.999,0.664 C0.64,0.313,0,0.965,0,1 L0,0 L1,0"></path>
  </clipPath>
</svg>

<style lang="scss">
  .bg-gradient {
    background-attachment: fixed;
    background-image: linear-gradient(
      -30deg,
      var(--primary-variant),
      var(--primary)
    );
  }

  #divider-top {
    clip-path: url("#divider-top-clip");
  }
  #divider-bottom {
    clip-path: url("#divider-bottom-clip");
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
          color: var(--cream);
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
    }
  }
</style>
