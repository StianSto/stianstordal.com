<script>
  import Skillset from "./Skillset.svelte";
  import cypressLogo from "../assets/cypress-logo.svg";
  import skillsetTopBow from "../assets/skillsetTopBow.svg";
  import { lang } from "../lib/stores";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
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
    />
  </svg>

  <div class="container">
    <h2>
      {#if currentLang === "en"}
        My Skillset
      {:else}
        Min Kompetanse
      {/if}
    </h2>
    <div>
      <div class="skills-frontend skills-container">
        <h3>FrontEnd</h3>
        <ul>
          <li>
            <i class="devicon-html5-plain" />
            <span>HTML</span>
          </li>
          <li>
            <i class="devicon-css3-plain" />
            <span>CSS</span>
          </li>
          <li>
            <i class="devicon-javascript-plain" />
            <span>JavaScript</span>
          </li>
          <li>
            <i class="devicon-typescript-plain" />
            <span>TypeScript</span>
          </li>
          <li>
            <i class="devicon-bootstrap-plain" />
            <span>Bootstrap</span>
          </li>
          <li>
            <i class="devicon-tailwindcss-plain" />

            <span>Tailwind</span>
          </li>
          <li>
            <i class="devicon-sass-plain" />
            <span>Sass</span>
          </li>
          <li>
            <i class="devicon-react-plain" />
            <span>React</span>
          </li>
          <li>
            <i class="devicon-svelte-plain" />
            <span>Svelte</span>
          </li>
          <li class="no-icon">
            <img class="cypress" src={cypressLogo} alt="cypress logo" />
            <span>Cypress</span>
          </li>
          <li>
            <i class="devicon-jest-plain" />
            <span>Jest</span>
          </li>
        </ul>
      </div>
      <div class="skills-backend skills-container">
        <h3>BackEnd</h3>
        <ul>
          <li>
            <i class="devicon-express-original" />
            <span>Express</span>
          </li>
          <li>
            <i class="devicon-mongodb-plain" />

            <span>MongoDB</span>
          </li>
        </ul>
      </div>
      <div class="skills-design skills-container">
        <h3>Design</h3>
        <ul>
          <li>
            <i class="devicon-xd-plain" />
            <span>Adobe XD</span>
          </li>
          <li>
            <i class="devicon-illustrator-plain" />
            <span>Adobe Illustrator</span>
          </li>
          <li>
            <i class="devicon-photoshop-plain" />
            <span>Adobe Photoshop</span>
          </li>
          <li>
            <i class="devicon-figma-plain" />
            <span>Figma</span>
          </li>
        </ul>
      </div>
    </div>
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

      @for $i from 3 through 10 {
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
