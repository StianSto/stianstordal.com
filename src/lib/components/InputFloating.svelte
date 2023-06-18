<script>
  export let type = "text";
  export let name = "";
  export let id;
  export let inputType = "input";
</script>

<div>
  {#if inputType === "textArea"}
    <textarea class="form-input" {name} {id} rows="5" placeholder=" " />
  {:else}
    <input class="form-input" {type} {name} {id} placeholder=" " />
  {/if}

  <label for={id} class="floating-input"><slot /></label>
</div>

<style lang="scss">
  div {
    position: relative;

    & label {
      position: absolute;
      top: 0;
      left: 0;
      color: var(--midnight);
      opacity: 0.8;
      translate: 0 100%;
      margin-left: 1em;
      transition: all 200ms ease;
      text-transform: capitalize;
    }

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

  .form-input {
    background-color: var(--milkywhite);
    padding: 1.25em 1em 0.5em 1em;
    width: 100%;
    border-radius: 5px;
    font-size: 18px;
    font-family: var(--font-family);
  }
</style>
