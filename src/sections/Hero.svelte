<script>
  import profileImg from "../assets/profile_stian.jpg";
  import Button from "../lib/components/Button.svelte";
  import drawnArrow from "../assets/drawn-arrow.svg";
</script>

<section id="hero">
  <div class="container">
    <div class="text">
      <h1>
        Websites should have a <span class="custom-underline">meaningful</span> experience
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
    & img {
      width: 100%;
      border-radius: 40% 70% 40% 70%;
    }
  }

  .custom-underline {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      background: url("../assets/underline.svg") no-repeat bottom left;
      background-size: 100% 10%;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
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
