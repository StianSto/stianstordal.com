<script>
  import { fly } from "svelte/transition";
  import { lang } from "../lib/stores";
  import { onDestroy, onMount } from "svelte";
  import bioJSON from "../lib/content/bio.json";

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
    <div class="opacity-0 max-w-3xl mx-auto" class:opacity-100={visible}>
      <h2 in:fly={{ y: "20%", duration: 1000 }}>
        {currentLang === "en" ? "Who am I?" : "Hvem er jeg?"}
      </h2>
      {#each bioJSON.body[currentLang] as paragraph, index}
        <p in:fly={{ y: "20%", duration: 1000, delay: 250 + 200 * index }}>
          {paragraph}
        </p>
      {/each}

      <div
        class="mt-8 flex gap-8"
        in:fly={{ y: "20%", duration: 1000, delay: 1000 }}
      >
        {#each bioJSON.links as { href, text, icon }}
          <a
            {href}
            class="text-2xl no-underline flex items-center gap-2 transition-all duration-200 ease-in-out"
          >
            <i class="{icon} text-[1.75em]" />
            {text}
          </a>
        {/each}
      </div>
    </div>
  {/key}
</section>
