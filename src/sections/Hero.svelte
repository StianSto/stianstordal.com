<script>
  import { fly } from "svelte/transition";
  import Button from "../lib/components/Button.svelte";
  import ArrowDrawn from "../lib/components/ArrowDrawn.svelte";
  import { lang } from "../lib/stores";
  import profileImg1600 from "../assets/profile/profile-w1600.jpg";
  import profileImg800 from "../assets/profile/profile-w800.jpg";
  import { onMount } from "svelte";
  import { cascade } from "svelte-typewriter";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));

  let visible = false;
  let element;

  onMount(() => {
    visible = true;
  });
</script>

<section
  id="hero"
  bind:this={element}
  class="h-screen min-h-[500px] px-4 md:px-8 flex flex-col justify-center -mb-[7%] overflow-hidden"
>
  {#key visible}
    <div
      class="max-w-screen-lg mx-auto flex flex-nowrap gap-4 items-center relative isolate"
    >
      <div class="flex-[2]" use:cascade={{ interval: 25 }}>
        <h1 class="relative text-transparent font-bold leading-[1.2em]">
          {#if currentLang === "en"}
            FrontEnd / Fullstack developer
            <span aria-hidden="true" class="absolute inset-0">
              FrontEnd / Fullstack developer
            </span>
          {:else}
            FrontEnd / Fullstack Utvikler
            <span aria-hidden="true" class="absolute inset-0">
              FrontEnd / Fullstack Utvikler
            </span>
          {/if}
        </h1>
        <p class="subtitle relative text-transparent mt-6 mb-12 leading-tight">
          {#if currentLang === "en"}
            I'm Stian, a FrontEnd developer with a passion for combining
            creativity and logic. I love being challenged and learning new
            things!
            <span aria-hidden="true" class="absolute inset-0">
              I'm Stian, a FrontEnd developer with a passion for combining
              creativity and logic. I love being challenged and learning new
              things!
            </span>
          {:else}
            Jeg er Stian, en FrontEnd utvikler med en lidenskap for å kombinere
            kreativitet og logikk. Jeg elsker å bli utfordret og lære nye ting!
            <span aria-hidden="true" class="absolute inset-0">
              Jeg er Stian, en FrontEnd utvikler med en lidenskap for å
              kombinere kreativitet og logikk. Jeg elsker å bli utfordret og
              lære nye ting!
            </span>
          {/if}
        </p>
        <div class="flex items-center gap-8">
          <div in:fly={{ y: "20%", duration: 800, delay: 5000 }}>
            <Button
              on:click={() => {
                window.scrollBy({ top: window.innerHeight });
              }}
            >
              {#if currentLang === "en"}
                Check out my projects
              {:else}
                Se noen av mine prosjekter
              {/if}
            </Button>
          </div>
          <ArrowDrawn inDelay={4500} />
        </div>
      </div>

      <div class="flex-1 relative hidden lg:block">
        <img
          id="profileImg"
          src={profileImg1600}
          srcset={`${profileImg1600} 1600w, 
				${profileImg800} 800w,
				`}
          alt="Stian Stordal, author of this page"
        />

        <svg
          id="ring1"
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
          id="ring2"
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
  {/key}
</section>

<style lang="scss">
  #ring1,
  #ring2 {
    position: absolute;
    top: 50%;
    translate: 0 -50%;
    z-index: -1;
    animation: herolines 40s infinite linear;
  }
  #ring2 {
    animation: herolines-back 30s infinite linear;
    transform: rotateY(180deg);
    scale: 1.02;
  }

  #profileImg {
    width: 100%;
    -webkit-mask-image: url("../assets/profile/profile-clip.svg");
    mask-image: url("../assets/profile/profile-clip.svg");
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
  }

  @keyframes herolines {
    from {
      rotate: 0;
      scale: 1;
    }
    50% {
      scale: 0.92;
      rotate: 180deg, 20deg;
    }
    to {
      rotate: 360deg;
      scale: 1;
    }
  }
  @keyframes herolines-back {
    from {
      rotate: 0;
    }
    to {
      rotate: -360deg;
    }
  }
</style>
