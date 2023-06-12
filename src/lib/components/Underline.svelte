<script>
  import { children } from "svelte/internal";
</script>

<span class="custom-underline">
  <span>
    <slot />
  </span>
  <svg
    id="underline"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 254.801 4.644"
  >
    <defs>
      <linearGradient
        id="underlineGradientFill"
        x1="0.5"
        x2="0.5"
        y2="1"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0" stop-color="var(--primary)" />
        <stop offset="1" stop-color="var(--primary-variant)" />
      </linearGradient>
    </defs>
    <path
      id="Path_61"
      data-name="Path 61"
      d="M0,4,0,3C.787,3,79.628,2.491,142.6,1.626S254.3-.487,254.78-.5l.015,1C254.31.512,205.573,1.761,142.6,2.626S.79,4,0,4Z"
      transform="translate(0.005 0.644)"
      fill="url(#underlineGradientFill)"
    />
    <path
      id="Path_59"
      data-name="Path 59"
      d="M0,2.5l-.008-1C1.012,1.486,102.475.1,165.444-.391c24.714-.194,43.756-.253,57.782-.253,21.712,0,31.41.142,31.565.144l-.009,1c-.156,0-9.858-.144-31.558-.144-14.025,0-33.057.059-57.775.253C102.481,1.1,1.02,2.486,0,2.5Z"
      transform="translate(0.005 0.644)"
      fill="url(#underlineGradientFill)"
    />
    <path
      id="Path_62"
      data-name="Path 62"
      d="M252.783.5c-.681-.009-68.8-.857-131.272-.857S.586.491,0,.5l-.008-1c.583-.009,59.04-.857,121.516-.857s130.6.848,131.279.857Z"
      transform="translate(2.005 1.644)"
      fill="url(#underlineGradientFill)"
    />
    <path
      id="Path_60"
      data-name="Path 60"
      d="M252.78,2.5C252.259,2.485,200,.994,137.53.5S.745.5,0,.5l0-1c.494,0,33.527-.221,73.969-.221,20.38,0,42.634.055,63.568.221,62.477.494,114.741,1.985,115.262,2Z"
      transform="translate(2.005 2.144)"
      fill="url(#underlineGradientFill)"
    />
  </svg>
</span>

<style>
  .custom-underline {
    position: relative;
    isolation: isolate;
  }
  #underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: -1;
  }
</style>
