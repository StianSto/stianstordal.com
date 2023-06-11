<script>
  import Button from "../lib/components/Button.svelte";
</script>

<section id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.484 156.83">
    <path
      id="Path_97"
      data-name="Path 97"
      d="M6,4003.829H1926.484v147.947C1076.921,4179.408,709.212,4143.032,6,4036.208Z"
      transform="translate(-6 -4003.829)"
      fill="var(--background)"
    />
  </svg>

  <div class="container">
    <h2>Get in Touch</h2>
    <div class="flex">
      <form action="">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="subject" placeholder="Subject" required />
        <textarea name="message" rows="6" placeholder="Message" />
        <Button>Send Message</Button>
      </form>
      <div class="contact-info">
        <div>
          <i class="fa fa-solid fa-envelope" />
          <p>stordalstiandev@gmail.com</p>
        </div>
        <div>
          <i class="fa fa-solid fa-phone-alt" />
          <p>+47 954 59 687</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    background-color: var(--charcoal);
    color: var(--milkywhite);
  }

  .container {
    padding-block: 4rem 10rem;
  }

  h2 {
    font-weight: 500;
    margin-bottom: 4rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 5vw;

    & > * {
      flex: 1;
      min-width: min(300px, 100%);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1em;

    & input,
    & textarea {
      border-radius: 5px;
      font-size: 1rem;
      font-family: var(--font-family);
      padding: 0.75em 1em;
      border: none;
    }

    & button {
      margin-top: 2rem;
    }
  }

  .contact-info {
    & > * {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      gap: 1em;
      margin-bottom: 1rem;

      & i {
        font-size: 2em;
      }
    }
  }
</style>
