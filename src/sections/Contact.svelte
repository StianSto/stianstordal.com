<script>
  import { fly } from "svelte/transition";
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

  let email = "stordalstiandev@gmail.com";
  let tel = "+47 95 45 96 87";
  let emailCopied = false;
  let telCopied = false;

  let snackbarMessages = [];

  function removeSnackbar(e) {
    snackbarMessages = snackbarMessages.filter((arr) => {
      arr.id !== e.detail.id;
    });
  }

  function copyToClipboard(value) {
    navigator.clipboard.writeText(value);
    switch (value) {
      case tel:
        telCopied = true;
        emailCopied = false;
        break;
      case email:
        emailCopied = true;
        telCopied = false;
        break;
    }
    console.log(value);
    setTimeout(() => {
      emailCopied = false;
      telCopied = false;
    }, 3500);
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
      <div class="contact-info">
        <div>
          <i class="fa fa-solid fa-envelope" />
          <p on:click={() => copyToClipboard(email)}>{email}</p>
          {#if emailCopied}
            <button in:fly={{ x: 10, duration: 600 }}>
              <i class="fa fa-solid fa-thumbs-up" /><span>copied</span>
            </button>
          {:else}
            <button
              on:click={() => copyToClipboard(email)}
              aria-label="copy phone number"
            >
              <i class="fa fa-solid fa-copy" />
            </button>
          {/if}
        </div>
        <div>
          <i class="fa fa-solid fa-phone-alt" />
          <p on:click={() => copyToClipboard(tel)}>{tel}</p>

          {#if telCopied}
            <button in:fly={{ x: 10, duration: 600 }}>
              <i class="fa fa-solid fa-thumbs-up" /><span>copied</span>
            </button>
          {:else}
            <button
              on:click={() => copyToClipboard(tel)}
              aria-label="copy phone number"
            >
              <i class="fa fa-solid fa-copy" />
            </button>
          {/if}
        </div>
      </div>
    </div>
    <div></div>
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

  .contact-info {
    & p:hover {
      cursor: pointer;
    }
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

    & button {
      background: none;
      border: none;
      color: rgba(200, 200, 200);
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      gap: 4px;

      animation: fadeIn 200ms ease-out forwards;

      &:hover {
        cursor: pointer;
      }

      & .fa-thumbs-up {
        color: var(--primary);
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      translate: -10%;
    }
    to {
      opacity: 1;
      translate: 0;
    }
  }
</style>
