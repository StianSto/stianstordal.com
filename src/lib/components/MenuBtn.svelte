<script>
  export let active;
</script>

<svg class="ham hamRotate" viewBox="0 0 120 120" class:active>
  <path
    class="line top"
    d="
		m 30,40 
		h 60 
		C 95,40 100,45 100,50 100,55 95,60 90,60
		h -60
		"
  />
  <path class="line middle" d="m 30,60 h 60" />
  <path
    class="line bottom"
    d="
		m 90,80 
		h -60 
		C 25,80 20,75 20,70 20,65 25,60 30,60
		h 60"
  />
</svg>

<style>
  .ham {
    width: 90%;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    transition: transform 400ms;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin-inline: auto;

    & .top {
      stroke-dasharray: 60 160;
    }
    & .middle {
      stroke-dasharray: 60 142;
      transform-origin: 50%;
      transition: transform 400ms;
    }
    & .bottom {
      stroke-dasharray: 60 90;
      transform-origin: 50%;
      transition:
        transform 400ms,
        stroke-dashoffset 400ms;
    }

    &.active {
      &.hamRotate {
        transform: rotate(45deg);
      }

      & .top {
        stroke-dashoffset: -90px;
      }
      & .middle {
        transform: rotate(90deg);
      }
      & .bottom {
        stroke-dashoffset: -90px;
      }
    }
  }

  .line {
    fill: none;
    transition:
      stroke-dasharray 400ms,
      stroke-dashoffset 400ms;
    stroke: #000;
    stroke-width: 5;
    stroke-linecap: round;
  }
</style>
