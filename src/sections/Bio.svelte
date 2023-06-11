<script>
  import Button from "../lib/components/Button.svelte";
</script>

<section id="bio">
  <div class="container">
    <h2>Who am I?</h2>
    <p>
      Hi! My name is Stian. I am a Front-End / aspiring Full-stack developer,
      with a passion for combining creativity and logic. I am a Norwegian
      28-year old, and i speak scandinavian languages and english fluently.
    </p>
    <p>
      I value teamwork and discipline above all else and I like to work with
      people who have the same interest in their work as i do, and love what
      they do as much as i do.
    </p>
    <p>
      As a developer i have an unquenchable thirst for knowledge and have a need
      for continously expanding my knowledge in my field. I like working with JS
      to try and solve logical puzzles. I am also fond of working with design,
      and the balance between learning, logical thinking and creativity is what
      keeps me going as a developer
    </p>

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
