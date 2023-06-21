<script>
  import { createEventDispatcher } from "svelte";
  import { fly } from "svelte/transition";

  export let visible = true;
  export let success = false;
  export let error = false;
  export let message;

  const dispatch = createEventDispatcher();

  function removeSnackbar(id) {
    dispatch("change", { id });
  }
  setTimeout(() => {
    removeSnackbar(message.id);
  }, 8000);
</script>

{#if visible}
  <div
    class="snackbar"
    class:show={visible}
    class:success
    class:error
    transition:fly={{ y: "100%" }}
  >
    <span class="snackbar-msg">{message.msg}</span>
  </div>
{/if}

<style lang="scss">
  .snackbar {
    padding: 1em 1em;
    width: fit-content;
    position: fixed;
    bottom: 0;
    left: 50%;
    translate: -50% 100%;
    background: white;
    border-radius: 4px;
    font-size: var(--fs-p-smaller);
    transition: translate 200ms ease-in-out;

    display: flex;
    gap: 5em;

    &.show {
      translate: -50% -50%;
    }

    &.success {
      background-color: rgb(45, 180, 70);
    }
    &.error {
      background-color: var(--strawberry);
    }
  }
</style>
