<script>
  import { onMount } from "svelte";
  import { theme } from "../stores";

  let currentTheme = "dark";
  theme.subscribe((data) => (currentTheme = data));

  let blob;

  function updateBlobPos(e) {
    const { clientX, clientY } = e;
    blob.style.left = `${clientX}px`;
    blob.style.top = `${clientY}px`;

    blob.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 10000, fill: "forwards" }
    );
  }

  document.body.onpointermove = (e) => updateBlobPos(e);

  onMount(() => {
    blob = document.getElementById("blobContainer");
  });
</script>

<div id="blobContainer">
  <div id="bgBlob"></div>
</div>
<div id="blurBlob"></div>

<style lang="scss">
  #blobContainer {
    z-index: -1;
    position: fixed;
    width: 70vw;
    height: 70vw;

    min-width: 200px;
    min-height: 200px;

    top: 50%;
    left: 50%;

    @media only screen and (max-width: 560px) {
      display: none;
    }
  }

  #bgBlob {
    background: var(--primary);
    background: radial-gradient(
      at left top,
      var(--primary) 20%,
      var(--primary-variant)
    );

    width: 100%;
    height: 100%;

    border-radius: 70% 30% 50% 20%;
    animation: animateBlob 10000ms linear infinite forwards;

    z-index: -1;
    translate: -50% -50%;
  }

  @keyframes animateBlob {
    0% {
      rotate: 0;
      scale: 1;
      opacity: 0.15;
      border-radius: 70% 30% 50% 20%;
    }
    50% {
      scale: 0.8;
      opacity: 0.1;
      border-radius: 60% 40% 20% 50%;
    }
    to {
      rotate: 360deg;
      scale: 1;
      opacity: 0.15;
      border-radius: 70% 30% 50% 20%;
    }
  }

  #blurBlob {
    width: 100vw;
    height: 100vh;
    backdrop-filter: blur(80px);
    position: fixed;
    z-index: -1;
  }
</style>
