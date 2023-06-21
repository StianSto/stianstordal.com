<script>
  import Button from "../lib/components/Button.svelte";
  import InputFloating from "../lib/components/InputFloating.svelte";
  import Snackbar from "../lib/components/Snackbar.svelte";
  import { lang } from "../lib/stores";
  import emailjs from "@emailjs/browser";

  let currentLang;
  lang.subscribe((data) => (currentLang = data));

  (() => {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY);
  })();

  let snackbarMessages = [];
  function handleSubmit(e) {
    let emailError = false;
    let emailSuccess = false;
    let msg = "";

    const submitBtn = e.target.querySelector("button");
    submitBtn.disabled = true;

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        data
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          emailSuccess = true;
          msg =
            "Message Sent! Thank you for your message, i will be in touch shortly :)";
          giveResponseToUser();
          submitBtn.disabled = false;
        },
        function (error) {
          console.log("FAILED...", error);
          msg = "Ooops, seems there was an error while sending the message :(";
          emailError = true;
          giveResponseToUser();
          submitBtn.disabled = false;
        }
      );

    function giveResponseToUser() {
      const id = Math.floor(Math.random() * 999);
      snackbarMessages = [
        ...snackbarMessages,
        { msg, id, emailError, emailSuccess },
      ];
    }
  }

  function removeSnackbar(e) {
    snackbarMessages = snackbarMessages.filter((arr) => {
      arr.id !== e.detail.id;
    });
  }
</script>

<section id="contact">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920.484 156.83">
    <path
      id="Path_97"
      data-name="Path 97"
      d="M6,4003.829H1926.484v147.947C1076.921,4179.408,709.212,4143.032,6,4036.208Z"
      transform="translate(-6 -4003.829)"
      fill="var(--background)"
      style="transition: fill 200ms ease"
    />
  </svg>

  <div class="container">
    <h2>
      {#if currentLang === "en"}
        Get in Touch
      {:else}
        Ta Kontakt
      {/if}
    </h2>
    <div class="flex">
      <form on:submit|preventDefault={handleSubmit}>
        {#if currentLang === "en"}
          <InputFloating type="text" name="name" id="name" required
            >Name</InputFloating
          >
          <InputFloating type="email" name="email" id="email"
            >Email</InputFloating
          >
          <InputFloating type="text" name="subject" id="subject"
            >subject</InputFloating
          >

          <InputFloating inputType="textArea" name="message" id="message"
            >Message</InputFloating
          >
          <Button>Send Message</Button>
        {:else}
          <InputFloating type="text" name="name" id="name">Navn</InputFloating>
          <InputFloating type="email" name="email" id="email"
            >Email</InputFloating
          >
          <InputFloating type="text" name="subject" id="subject"
            >Emne</InputFloating
          >

          <InputFloating inputType="textArea" name="message" id="message"
            >Melding</InputFloating
          >
          <Button>Send Melding</Button>
        {/if}
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

{#each snackbarMessages as snack (snack.id)}
  <Snackbar
    message={snack}
    success={snack.emailSuccess}
    error={snack.emailError}
    visible={true}
    on:change={removeSnackbar}
  />
{/each}

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
    margin-bottom: 2rem;
  }

  .flex {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 5vw;

    & > * {
      min-width: min(300px, 100%);
    }
  }

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1em;
    max-width: max(500px, 50vw);

    & button {
      margin-top: 2rem;
    }
  }

  .contact-info {
    & > * {
      display: flex;
      align-items: center;
      font-size: clamp(0.75rem, 1vw + 1rem, 1.5rem);
      gap: 1em;
      margin-bottom: 1rem;

      & i {
        font-size: 1.5em;
      }
    }
  }
</style>
