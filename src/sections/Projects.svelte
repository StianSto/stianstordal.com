<script>
  import { onDestroy, onMount } from "svelte";
  import Button from "../lib/components/Button.svelte";
  import projectsJSON from "../lib/content/projects.json";
  import { lang } from "../lib/stores";
  import { fade, fly } from "svelte/transition";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));

  let activeProject = projectsJSON[0];

  let selectedIndex = 0;
  function selectProject(index) {
    selectedIndex = index;
  }

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

<!-- output -->
<section id="myProjects" bind:this={element}>
  <div class="container">
    <h2>
      {#if currentLang === "en"}
        My Projects
      {:else}
        Mine Prosjekter
      {/if}
    </h2>

    <div id="projectContainer">
      <ul id="projectsSlider">
        {#key visible}
          {#each projectsJSON as { id, thumbnail }, index}
            <li
              class:active={index === 0}
              class:visible
              data-project={id}
              on:click={() => selectProject(index)}
              on:keypress={() => selectProject(index)}
              in:fly={{ x: "100%", duration: 500, delay: 100 * index }}
            >
              <img
                src={thumbnail.w1600}
                srcset={`${thumbnail.w1600} 1600w, ${thumbnail.w800} 800w`}
                alt=""
                loading="lazy"
              />
            </li>
          {/each}
        {/key}
      </ul>

      <div id="projectsMonitor">
        <div id="projectsMonitorPc">
          {#key selectedIndex}
            <img
              transition:fade
              srcset={`${projectsJSON[selectedIndex].imageDesktop.w1600} 1600w, ${projectsJSON[selectedIndex].imageDesktop.w800} 800w`}
              src={projectsJSON[selectedIndex].imageDesktop.w1600}
              alt=""
            />
          {/key}
        </div>

        <div id="projectsMonitorMobile">
          {#key selectedIndex}
            <img
              transition:fade
              srcset={`${projectsJSON[selectedIndex].imageMobile.w1600} 1600w, ${projectsJSON[selectedIndex].imageMobile.w800} 800w`}
              src={projectsJSON[selectedIndex].imageMobile.w1600}
              alt=""
            />
          {/key}
        </div>
      </div>

      <div id="projectsBody">
        {#key selectedIndex}
          <h3>{projectsJSON[selectedIndex].title}</h3>
          <p class="description">
            {#if currentLang === "en"}
              {projectsJSON[selectedIndex].description.en}
            {:else}
              {projectsJSON[selectedIndex].description.no}
            {/if}
          </p>
          <div class="btn-group">
            <a
              href={projectsJSON[selectedIndex].websiteLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button theme="secondary"
                ><i class="fa fa-solid fa-globe" />
                {#if currentLang === "en"}
                  Go to site
                {:else}
                  Gå til siden
                {/if}
              </Button>
            </a>

            <a
              href={projectsJSON[selectedIndex].repoLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <i class="fa fa-brands fa-github" />
              {#if currentLang === "en"}
                Project Repo
              {:else}
                Prosjekt Repo
              {/if}
            </a>
          </div>
        {/key}
      </div>
    </div>
  </div>
</section>

<!-- output [end] -->

<style lang="scss">
  #myProjects {
    overflow: hidden;
    max-width: 1000px;
    margin-inline: auto;
    margin-block: 1rem;
  }
  h2 {
    margin-top: 4rem;
  }

  h3 {
    margin-block: 1rem;
  }

  #projectsMonitor {
    flex: 5;
    position: relative;
    display: flex;
    height: fit-content;
    margin-inline: auto;

    & > * {
      border-radius: 10px;
      background-color: var(--background);
      box-shadow: 2px 1px 4px 2px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transform-style: preserve-3d;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
        position: absolute;
      }
    }

    &Pc {
      width: 100%;
      aspect-ratio: 16 / 9;
      transform-origin: left;
      transform: perspective(1000px) rotate3d(0, 1, 0, 12deg);
    }

    &Mobile {
      height: 100%;
      aspect-ratio: 9 / 19.5;
      position: absolute;
      right: 0;
      top: 0px;
      transform-origin: left;
      transform: perspective(500px) rotate3d(0, 1, 0, 3deg);
    }
  }

  #projectsBody {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 3;

    .description {
      margin-bottom: 2.5rem;
    }

    .btn-group {
      display: flex;
      gap: 1.5rem;
      align-items: center;
      & .fa {
        margin-right: 8px;
      }
      & a {
        text-decoration: none;
        color: var(--clr);
      }
    }
  }

  #projectsSlider {
    display: flex;
    list-style-type: none;
    gap: 1.5vw;
    position: relative;
    isolation: isolate;
    padding: 2rem 1rem 1rem;
    margin-bottom: 1rem;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;

    /* width */
    &::-webkit-scrollbar {
      display: none;
    }

    & li {
      aspect-ratio: 16 / 9;
      flex: 1;
      background-color: var(--milkywhite);
      border: 1px solid var(--secondary);
      border-radius: 10px;
      transition: all 200ms ease;
      overflow: hidden;
      min-width: min(200px, 50vw);
      max-width: 250px;
      scroll-snap-align: center;
      opacity: 0;

      &.visible {
        opacity: 1;
      }

      &:first-child {
        margin-left: auto;
      }
      &:last-child {
        margin-right: auto;
      }

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.7;
        transition: all 400ms ease;
      }

      &:hover {
        scale: 1.05;

        & img {
          opacity: 1;
          scale: 1.1;
        }
      }
    }
  }
</style>
