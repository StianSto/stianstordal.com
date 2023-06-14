<script>
  import Button from "../lib/components/Button.svelte";
  import sliderIndicator from "../assets/sliderIndicator.svg";
  import { onMount } from "svelte";
  import projectsJSON from "../lib/content/projects.json";
  import SliderIndicator from "../lib/components/SliderIndicator.svelte";

  let activeProject = projectsJSON[0];

  function viewProject(e) {
    const projectsSlider = document.querySelector("#projectsSlider");
    const projectItems = projectsSlider.querySelectorAll("li");
    const clickedItem = e.currentTarget;

    projectItems.forEach((item) => item.classList.remove("active"));
    clickedItem.classList.add("active");

    activeProject = projectsJSON.find(
      (project) => project.id === clickedItem.dataset.project
    );

    // execute slide indicator and slide indicator on window resize
    slideIndicator(projectsSlider, clickedItem);
    window.onresize = () => slideIndicator(projectsSlider, clickedItem);
  }

  function slideIndicator(parent, child) {
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const slideTo = childRect.x - parentRect.x;

    const indicator = document.querySelector(".indicator");
    // @ts-ignore
    indicator.style.translate = `${slideTo}px 0`;
  }

  onMount(() => {
    const projectsSlider = document.querySelector("#projectsSlider");
    const projectItem = projectsSlider.querySelector("li.active");
    slideIndicator(projectsSlider, projectItem);
  });
</script>

<!-- output -->
<section id="myProjects">
  <div class="container">
    <h2>My Projects</h2>

    <div id="projectContainer">
      <ul id="projectsSlider">
        <div class="indicator">
          <SliderIndicator />
        </div>

        {#each projectsJSON as { id, thumbnail }, index}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <li
            class:active={index === 0}
            data-project={id}
            on:click={(e) => viewProject(e)}
          >
            <img src={thumbnail} alt="" />
          </li>
        {/each}
      </ul>

      <div id="projectsMonitor">
        <div id="projectsMonitorPc">
          <img src={activeProject.imageDesktop} alt="" />
        </div>
        <div id="projectsMonitorMobile">
          <img src={activeProject.imageMobile} alt="" />
        </div>
      </div>

      <div id="projectsBody">
        <h3>{activeProject.title}</h3>
        <p class="description">{activeProject.description}</p>
        <div class="btn-group">
          <a
            href={activeProject.websiteLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Button theme="secondary"
              ><i class="fa fa-solid fa-globe" />Go to site</Button
            >
          </a>

          <a
            href="https://github.com/StianSto/stianstordal.com"
            target="_blank"
            rel="noreferrer noopener"
            ><i class="fa fa-brands fa-github" />Project Repo</a
          >
        </div>
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
    margin-block: 4rem;
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
        color: var(--secondary);
      }
    }
  }

  #projectsSlider {
    display: flex;
    list-style-type: none;
    gap: 1.5vw;
    margin: 2rem 0;
    position: relative;
    isolation: isolate;
    padding: 0;

    & li {
      aspect-ratio: 16 / 9;
      flex: 1;
      background-color: var(--milkywhite);
      border: 1px solid var(--secondary);
      border-radius: 10px;
      transition: all 200ms ease;
      overflow: hidden;
      min-width: min(200px, 50vw);

      & img {
        width: 100%;
        height: 100%;
        object-fit: contain;
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

    & .indicator {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      transition: translate 300ms ease-in-out;
      z-index: -1;
    }
  }
</style>
