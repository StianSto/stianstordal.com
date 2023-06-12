<script>
  import profileImg from "../assets/profile_stian.jpg";
  import Button from "../lib/components/Button.svelte";
  import drawnArrow from "../assets/drawn-arrow.svg";
  import Underline from "../lib/components/Underline.svelte";
</script>

<section id="hero">
  <div class="container">
    <div class="text">
      <h1>
        Websites should have a
        <Underline>meaningful</Underline>
        experience
      </h1>
      <p class="subtitle">
        Contact me when you are ready for the next adventure!
      </p>
      <div class="get-in-touch">
        <Button>Get in touch</Button>
        <img src={drawnArrow} alt="" />
      </div>
    </div>
    <div class="img-container">
      <img src={profileImg} alt="" />
    </div>
  </div>
</section>

<style>
  #hero {
    height: 100vh;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: -7%;

    & .container {
      display: flex;
      align-items: center;

      & .text {
        flex: 2;

        & p {
          margin-block: 2em 1em;
        }
      }
    }
  }

  .img-container {
    flex: 1;

    @media screen and (max-width: 800px) {
      display: none;
    }
    & img {
      width: 100%;
      border-radius: 40% 70% 40% 70%;
    }
  }

  .get-in-touch {
    display: flex;
    align-items: center;
    gap: 2em;
    & img {
      width: clamp(5rem, 10vw, 10rem);
    }
  }
</style>
