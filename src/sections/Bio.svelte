<script>
  import { lang } from "../lib/stores";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));
</script>

<section id="bio">
  <div class="container">
    <h2>
      {#if currentLang === "en"}
        Who am I?
      {:else}
        Hvem er jeg?
      {/if}
    </h2>
    {#if currentLang === "en"}
      <p>
        Hi! My name is Stian. I am a Front-End / aspiring Full-stack developer,
        with a passion for combining creativity and logic. I am a Norwegian
        28-year old, and I speak scandinavian languages and english fluently.
      </p>
      <p>
        I value teamwork and discipline above all else and I like to work with
        people who have the same interest in their work as i do, and love what
        they do as much as i do.
      </p>
      <p>
        As a developer I have an unquenchable thirst for knowledge and have a
        need for continously expanding my knowledge in my field. I like working
        with JS to try and solve logical puzzles. I am also fond of working with
        design, and the balance between learning, logical thinking and
        creativity is what keeps me going as a developer
      </p>
    {:else}
      <p>
        Hei! Mitt navn er Stian. Jeg er en front-end / aspirerende
        fullstack-utvikler, med en lidenskap for å kombinere kreativitet og
        logikk. Jeg er 28 år gammel nordmann, og jeg snakker skandinaviske språk
        og engelsk flytende.
      </p>
      <p>
        Jeg verdsetter teamarbeid og disiplin fremfor alt annet og liker å jobbe
        med folk som har samme interesse for arbeidet sitt som meg, og elsker
        hva de gjør like mye som jeg gjør.
      </p>
      <p>
        Som utvikler har jeg en uslukkelig tørst for kunnskap og har en behov
        for å kontinuerlig utvide min kunnskap innenfor mitt felt. Jeg liker å
        jobbe med JavaScript for å prøve å løse logiske gåter. Jeg er også glad i å
        jobbe med design, og balansen mellom læring, logisk tenkning og
        kreativitet er det som holder meg gående som utvikler.
      </p>
    {/if}

    <div class="link-group">
      <a href="https://www.linkedin.com/in/stian-stordal-51222b15b/">
        <i class="devicon-linkedin-plain" />
        LinkedIn
      </a>
      <a href="https://github.com/StianSto">
        <i class="devicon-github-plain" />
        GitHub
      </a>
    </div>
  </div>
</section>

<style>
  .container {
    max-width: 800px;
  }

  p {
    margin-block: 1rem;
  }

  .link-group {
    margin-top: 2rem;
    display: flex;
    gap: 2rem;
  }

  a {
    font-size: var(--fs-subtitle);
    color: var(--secondary);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5em;
    transition: all 200ms ease;

    & i {
      font-size: 1.5em;
    }

    &:hover,
    &:focus-visible {
      scale: 1.05;
    }
  }
</style>
