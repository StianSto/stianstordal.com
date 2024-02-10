<script>
  import { draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.901 51.861">
  <g
    id="Group_105"
    data-name="Group 105"
    transform="translate(-627.936 -629.643)"
  >
    <path
      id="Path_21"
      data-name="Path 21"
      d="M797.888,627.888s-13.035,23.984-48.625,31.316-93.737-1.989-93.737-1.989"
      transform="translate(-0.729 2.461)"
      fill="none"
      stroke="var(--primary-variant)"
      stroke-linecap="round"
      stroke-width="1"
      in:draw={{ duration: 1500, easing: quintOut }}
    />
    <path
      id="Path_22"
      data-name="Path 22"
      d="M672.426,654.876s-91.65,18.2-8.125,38.35"
      transform="translate(-0.729 -16)"
      fill="none"
      stroke="var(--primary-variant)"
      stroke-linecap="round"
      stroke-width="1"
      in:draw={{ duration: 1500, easing: quintOut, delay: 300 }}
    />
    <path
      id="Path_21-2"
      data-name="Path 21"
      d="M780.811,627.888c-4.841,5.487-27.553,33.1-60.489,35.754s-75.871-9.575-75.871-9.575"
      transform="translate(13.271 2.461)"
      fill="none"
      stroke="var(--primary)"
      stroke-linecap="round"
      stroke-width="1"
      in:draw={{ duration: 1500, easing: quintOut }}
    />
    <path
      in:draw={{ duration: 1500, easing: quintOut, delay: 300 }}
      id="Path_22-2"
      data-name="Path 22"
      d="M672.426,654.876s-91.6,18.487-8.079,38.637"
      transform="matrix(0.999, 0.035, -0.035, 0.999, 24.917, -35.677)"
      fill="none"
      stroke="var(--primary)"
      stroke-linecap="round"
      stroke-width="1"
    />
  </g>
</svg>

<style>
  svg {
    width: clamp(100px, 10vw, 200px);
  }
</style>
