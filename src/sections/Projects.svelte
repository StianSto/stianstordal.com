<script>
  import Button from "../lib/components/Button.svelte";
  import sliderIndicator from "../assets/sliderIndicator.svg";
  import { onMount } from "svelte";
  import projectsJSON from "../lib/content/projects.json";

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

    slideIndicator(projectsSlider, clickedItem);
  }

  function slideIndicator(parent, child) {
    const parentRect = parent.getBoundingClientRect();
    const childRect = child.getBoundingClientRect();
    const slideTo = childRect.x - parentRect.x;

    const indicator = document.querySelector(".indicator");
    // @ts-ignore
    indicator.style.translate = `${slideTo}px -15%`;
  }

  onMount(() => {
    const projectsSlider = document.querySelector("#projectsSlider");
    const projectItem = projectsSlider.querySelector("li.active");
    slideIndicator(projectsSlider, projectItem);
  });
</script>

<!-- output -->
<section>
  <div class="container">
    <h2>My Projects</h2>

    <div id="projectContainer">
      <div id="projectsMonitor">
        <div id="projectsMonitorPc">
          <img src={activeProject.imageDesktop} alt="" />
        </div>
        <div id="projectsMonitorMobile">
          <img src={activeProject.imageMobile} alt="" />
        </div>
      </div>
      <div id="projectsBody">
        <p class="description">
          <b>"{activeProject.title}" </b>{activeProject.description}
        </p>
        <div class="btn-group">
          <Button theme="secondary"
            ><i class="fa fa-solid fa-globe" />Go to site</Button
          >
          <a href="https://github.com/StianSto/stianstordal.com"
            ><i class="fa fa-brands fa-github" />Project Repo</a
          >
        </div>
      </div>
    </div>

    <ul id="projectsSlider">
      <img src={sliderIndicator} alt="" class="indicator" />

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
  </div>
</section>

<!-- output [end] -->

<style lang="scss">
  h2 {
    margin-block: 4rem;
  }

  #projectContainer {
    display: flex;
    padding-inline: 2rem;
  }

  #projectsMonitor {
    flex: 5;
    max-width: 600px;
    position: relative;
    display: flex;
    height: fit-content;
    align-self: center;

    & > * {
      border-radius: 10px;
      background-color: white;
      box-shadow: 2px 1px 4px 2px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transform-style: preserve-3d;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &Pc {
      width: 90%;
      aspect-ratio: 16 / 9;
      transform: perspective(1000px) rotate3d(0, 1, 0, 20deg);
    }

    &Mobile {
      height: 100%;
      aspect-ratio: 9 / 16;
      position: absolute;
      right: 0;
      top: 0px;
      transform: perspective(500px) rotate3d(0, 1, 0, 5deg);
    }
  }

  #projectsBody {
    padding: 2rem;
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
    gap: 1rem;
    margin: 4rem 1rem;
    position: relative;
    & li {
      aspect-ratio: 16 / 9;
      flex: 1;
      background-color: white;
      border: 1px solid var(--secondary);
      border-radius: 10px;
      transition: all 200ms ease;
      overflow: hidden;

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

    & .indicator {
      position: absolute;
      top: 0;
      left: 0;
      height: 150%;
      transition: translate 300ms ease-in-out;
      z-index: -1;
    }
  }
</style>
