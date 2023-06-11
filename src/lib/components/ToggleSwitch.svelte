<script>
  export let name = "";
  export let checked = false;
  export let size = "10px";
</script>

<label class="switch" style="font-size: {size};">
  <input type="checkbox" {name} bind:checked />
  <span class="slider">
    <span class="slider-btn">
      {#if checked}
        <i class="fa fa-solid fa-moon" />
      {:else}
        <i class="fa fa-solid fa-sun" />
      {/if}
    </span>
    <span class="background">
      <i class="star" />
      <i class="star" />
      <i class="star" />
      <i class="star" />
      <i class="star" />
    </span>
    <span class="background">
      <i class="cloud" />
      <i class="cloud" />
    </span>
  </span>
</label>

<style lang="scss">
  .switch {
    position: relative;
  }
  input {
    display: none;
  }
  .slider {
    --size: 1em;
    --height: calc(var(--size) * 3);
    --paddding: calc(var(--height) / 4);
    --width: calc(2.75 * var(--height));

    width: var(--width);
    height: var(--height);
    padding: var(--paddding);
    border-radius: 100vw;
    background-color: #95e2ff;

    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, 0.3),
      inset -2px -2px 3px rgba(255, 255, 255, 0.2);
    border: 1px solid #95e2ff;

    position: absolute;
    transition: 200ms ease;

    &-btn {
      height: var(--height);
      aspect-ratio: 1;
      border-radius: 100vw;
      background-color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 50%;
      translate: calc(var(--width) - 100%) -50%;
      transition: translate 200ms ease;

      box-shadow: inset -1px -1px 1px rgba(0, 0, 0, 0.1);

      & .fa {
        font-size: calc(var(--size) * 2);
        color: #ffce00;
      }
    }
  }

  .background {
    & i {
      position: absolute;
      transition: all 200ms ease;
    }

    .cloud {
      content: url("../../assets/cloud.svg");
      width: 2em;

      &:nth-child(1) {
        translate: 0% 50%;
        font-size: 1.25em;
      }
      &:nth-child(2) {
        translate: 150% 0%;
      }
    }

    .star {
      content: url("../../assets/star.svg");
      position: absolute;
      margin-left: calc(var(--height) + 5px);

      transform: translateY(var(--width));

      width: 1em;

      &:nth-child(2) {
        translate: 50% 250%;
        width: 0.75em;
      }
      &:nth-child(3) {
        translate: 150% 90%;
        width: 1.25em;
      }
      &:nth-child(4) {
        translate: 350% -30%;
        width: 0.75em;
      }
      &:nth-child(5) {
        translate: 400% 90%;
      }
    }
  }

  input:checked ~ .slider {
    border: 1px solid var(--secondary);
    background: var(--secondary);

    & .slider-btn {
      translate: 0px -50%;
    }

    & .star,
    & .cloud {
      transform: translateY(0);
    }

    & .cloud {
      transform: translateY(var(--width));
    }
  }
</style>
