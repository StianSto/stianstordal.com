<script>
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
    setTimeout(() => {
      emailCopied = false;
      telCopied = false;
    }, 3500);
  }
</script>

<div
  id="divider-contact-top"
  class="w-full min-h-20 m-0 -mb-1 aspect-[8/1]"
></div>
<section id="contact" class="m-0 text-slate-100 px-4">
  <div class="max-w-3xl mx-auto pt-12 pb-20 w-full">
    <h2 class="font-medium mb-4">
      {#if currentLang === "en"}
        Get in Touch
      {:else}
        Ta Kontakt
      {/if}
    </h2>
    <div>
      <div class="flex items-center gap-4">
        <i class="fa fa-solid fa-envelope text-4xl" />
        <p
          on:click={() => copyToClipboard(email)}
          on:keydown={() => copyToClipboard(email)}
          class="hover:cursor-pointer text-slate-100"
        >
          {emailCopied ? "Copied Email" : email}
        </p>
      </div>
      <div class="flex items-center gap-4">
        <i class="fa fa-solid fa-phone-alt text-4xl" />
        <p
          on:click={() => copyToClipboard(tel)}
          on:keydown={() => copyToClipboard(tel)}
          class="hover:cursor-pointer text-slate-100"
        >
          {telCopied ? "Copied Number" : tel}
        </p>
      </div>
    </div>
  </div>
</section>
<svg class="svg" style="position: absolute;" width="0" height="0">
  <clipPath id="divider-top-clip" clipPathUnits="objectBoundingBox"
    ><path
      d="
		M0,0 
		C0.22, 0.7,
		0.507,1,
		1,0.3 
		L1,1 
		L0,1
		Z"
    ></path></clipPath
  >
</svg>

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
  #contact {
    background-color: var(--charcoal);
  }

  #divider-contact-top {
    rotate: y 180deg;
    background: var(--charcoal);
    clip-path: url("#divider-top-clip");
  }
</style>
