<script>
  export let theme = "primary";
</script>

<button
  class="btn px-6 py-2 rounded-lg border-none text-base font-medium cursor-pointer text-white {theme}"
  on:click><slot /></button
>

<style>
  .btn {
    &.primary {
      background: transparent
        linear-gradient(136deg, var(--primary) 0%, var(--primary-variant) 100%)
        0% 0% no-repeat padding-box;
    }
    &.secondary {
      background-color: var(--secondary);
      color: var(--clr-inverse) !important;

      &:focus,
      &:focus-visible {
        outline-color: var(--primary-variant);
      }
    }

    &:hover {
      box-shadow:
        inset -2px -3px 6px #00000029,
        0px 3px 6px #00000029;
      translate: -1px -1px;
    }

    &:active {
      box-shadow: inset 1px 1px 6px #00000091;
      translate: 0;
    }
  }
</style>
