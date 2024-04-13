<script>
  export let type = "text";
  export let name = "";
  export let id;
  export let inputType = "input";
  export let required = false;
</script>

<div class="relative">
  {#if inputType === "textArea"}
    <textarea
      {name}
      {id}
      {required}
      class="form-input"
      rows="5"
      placeholder=" "
    />
  {:else}
    <input
      class="form-input ps-5 py-4 pe-2 w-full rounded text-lg"
      {type}
      {name}
      {id}
      placeholder=" "
      {required}
    />
  {/if}

  <label
    for={id}
    class="floating-input absolute top-0 left-0 opacity-80 translate-y-100 ms-4 capitalize"
    ><slot /></label
  >
</div>

<style lang="scss">
  div {
    &:has(.form-input:focus),
    &:has(.form-input:not(:placeholder-shown)) {
      & label {
        font-size: smaller;
        translate: 0 20%;
        opacity: 0.5;
      }
    }

    &:has(.form-input:focus) {
      & label {
        opacity: 1;
      }
    }
  }

  label {
    color: var(--midnight);
    transition: all 200ms ease;
  }

  .form-input {
    background-color: var(--milkywhite);
    font-family: var(--font-family);
  }
</style>
