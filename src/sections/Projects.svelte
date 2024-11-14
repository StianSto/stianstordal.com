<script>
  import { onDestroy, onMount } from "svelte";
  import Button from "../lib/components/Button.svelte";
  import projectsJSON from "../lib/content/projects.json";
  import { lang } from "../lib/stores";

  import { fly } from "svelte/transition";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));

  let selectedProject = 0;

  function selectProject(index) {
    selectedProject = index;
  }

  let ready = false;

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
    ready = true;
    setTimeout(() => {
      handleScroll();
    }, 250);
  });

  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<!-- output -->
<section
  class="overflow-hidden px-4 md:px-8 my-24"
  bind:this={element}
  id="myProjects"
>
  <div class="max-w-screen-lg mx-auto">
    <h2>
      {#if currentLang === "en"}
        My Projects
      {:else}
        Mine Prosjekter
      {/if}
    </h2>

    <div id="projectContainer">
      <ul
        id="projectsSlider"
        class="flex list-none gap-[1.5vw] relative py-4 mb-4 overflow-x-scroll snap-x snap-mandatory"
      >
        {#key visible}
          {#each projectsJSON as { id, thumbnail }, index}
            <li
              class="flex-1 rounded-lg overflow-hidden snap-center opacity-0 bg-white border hover:scale-105"
              class:active={index === 0}
              class:opacity-100={visible}
              data-project={id}
              on:click={() => selectProject(index)}
              on:keypress={() => selectProject(index)}
              in:fly={{ x: "100%", duration: 500, delay: 100 * index }}
            >
              <img
                class="p-2 w-full h-full opacity-70 transition-all duration-400 ease-in-out hover:opacity-1 hover:scale-110"
                src={thumbnail.w1600}
                srcset={`${thumbnail.w1600} 1600w, ${thumbnail.w800} 800w`}
                alt=""
                loading="lazy"
              />
            </li>
          {/each}
        {/key}
      </ul>

      {#if ready}
        <div id="projectsMonitor" class="flex-[5] relative flex h-fit mx-auto">
          <div
            id="projectsMonitorPc"
            class:visible
            class={"rounded-lg shadow-md overflow-hidden w-full aspect-video origin-left translate-x-[15%] opacity-0"}
          >
            {#each projectsJSON as { imageDesktop }, index}
              <img
                srcset={`${imageDesktop.w1600} 1600w, ${imageDesktop.w800} 800w`}
                class="w-full h-full object-cover object-left-top absolute opacity-0 transition-opacity duration-300"
                class:opacity-100={selectedProject === index}
                alt=""
              />
            {/each}
          </div>

          <div
            id="projectsMonitorMobile"
            class:visible
            class={"rounded-lg shadow-md overflow-hidden h-full aspect-[9/19.5] absolute right-0 top-0 origin-left opacity-0 translate-x-[30%]"}
          >
            {#each projectsJSON as { imageMobile }, index}
              <img
                srcset={`${imageMobile.w1600} 1600w, ${imageMobile.w800} 800w`}
                class:active={selectedProject === index}
                class="w-full h-full object-cover object-left-top absolute opacity-0 transition-opacity duration-300"
                class:opacity-100={selectedProject === index}
                alt=""
              />
            {/each}
          </div>
        </div>

        <div
          id="projectsBody"
          class="mt-8 flex flex-col justify-center flex-[3]"
        >
          {#key selectedProject}
            <h3 class="my-4">{projectsJSON[selectedProject].title}</h3>
            <p class="mb-10">
              {#if currentLang === "en"}
                {projectsJSON[selectedProject].description.en}
              {:else}
                {projectsJSON[selectedProject].description.no}
              {/if}
            </p>
            <div class="flex gap-6 items-center">
              <a
                href={projectsJSON[selectedProject].websiteLink}
                class="no-underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button theme="secondary"
                  ><i class="fa fa-solid fa-globe me-2" />
                  {#if currentLang === "en"}
                    Go to site
                  {:else}
                    Gå til siden
                  {/if}
                </Button>
              </a>

              <a
                href={projectsJSON[selectedProject].repoLink}
                class="no-underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                <i class="fa fa-brands fa-github me-2" />
                {#if currentLang === "en"}
                  Project Repo
                {:else}
                  Prosjekt Repo
                {/if}
              </a>
            </div>
          {/key}
        </div>
      {/if}
    </div>
  </div>
</section>

<!-- output [end] -->

<style lang="scss">
  #projectsMonitor {
    & > * {
      transform-style: preserve-3d;
    }

    &Pc {
      transition:
        transform 500ms ease,
        opacity 500ms ease;

      &.visible {
        opacity: 1;
        transform: perspective(1000px) rotate3d(0, 1, 0, 12deg) translateX(0);
      }
    }

    &Mobile {
      transition:
        transform 500ms ease,
        opacity 500ms ease;

      &.visible {
        opacity: 1;
        transform: perspective(500px) rotate3d(0, 1, 0, 3deg) translate(0);
      }
    }
  }

  #projectsSlider {
    & li {
      transition: all 200ms ease;
      min-width: min(200px, 50vw);
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
