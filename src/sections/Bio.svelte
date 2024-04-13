<script>
  import { fly } from "svelte/transition";
  import { lang } from "../lib/stores";
  import { onDestroy, onMount } from "svelte";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));

  let element;
  let visible = false;

  function handleScroll() {
    const bounding = element.getBoundingClientRect();

    if (bounding.top <= document.documentElement.clientHeight) {
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

<section id="bio" bind:this={element} class="py-40 px-4 md:px-8 my-0">
  {#key visible}
    <div
      class="opacity-0 max-w-3xl mx-auto"
      class:opacity-100={visible}
      in:fly={{ y: "20%", duration: 1000, delay: 200 }}
    >
      <h2>
        {#if currentLang === "en"}
          Who am I?
        {:else}
          Hvem er jeg?
        {/if}
      </h2>
      {#if currentLang === "en"}
        <p>
          Hi! My name is Stian. I am a Front-End / aspiring Full-stack
          developer, with a passion for combining creativity and logic. I am a
          Norwegian 28-year old, and I speak scandinavian languages and english
          fluently.
        </p>
        <p>
          I value teamwork and discipline above all else and I like to work with
          people who have the same interest in their work as i do, and love what
          they do as much as i do.
        </p>
        <p>
          As a developer I have an unquenchable thirst for knowledge and have a
          need for continously expanding my knowledge in my field. I like
          working with JS to try and solve logical puzzles. I am also fond of
          working with design, and the balance between learning, logical
          thinking and creativity is what keeps me going as a developer
        </p>
      {:else}
        <p>
          Hei! Mitt navn er Stian. Jeg er en front-end / aspirerende
          fullstack-utvikler, med en lidenskap for å kombinere kreativitet og
          logikk. Jeg er 28 år gammel nordmann, og jeg snakker skandinaviske
          språk og engelsk flytende.
        </p>
        <p>
          Jeg verdsetter teamarbeid og disiplin fremfor alt annet og liker å
          jobbe med folk som har samme interesse for arbeidet sitt som meg, og
          elsker hva de gjør like mye som jeg gjør.
        </p>
        <p>
          Som utvikler har jeg en uslukkelig tørst for kunnskap og har en behov
          for å kontinuerlig utvide min kunnskap innenfor mitt felt. Jeg liker å
          jobbe med JavaScript for å prøve å løse logiske gåter. Jeg er også
          glad i å jobbe med design, og balansen mellom læring, logisk tenkning
          og kreativitet er det som holder meg gående som utvikler.
        </p>
      {/if}

      <div class="mt-8 flex gap-8">
        <a
          href="https://www.linkedin.com/in/stian-stordal-51222b15b/"
          class="text-2xl no-underline flex items-center gap-2 transition-all duration-200 ease-in-out"
        >
          <i class="devicon-linkedin-plain text-[1.75em]" />
          LinkedIn
        </a>
        <a
          href="https://github.com/StianSto"
          class="text-2xl no-underline flex items-center gap-2 transition-all duration-200 ease-in-out"
        >
          <i class="devicon-github-plain text-[1.75em]" />
          GitHub
        </a>
      </div>
    </div>
  {/key}
</section>
