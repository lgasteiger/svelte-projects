<script>
  let hereKitty = false;

  const handleMouseEnter = () => hereKitty = true;
  const handleMouseLeave = () => hereKitty = false;
</script>

<style>
  img {
    position: absolute;
    left: 0;
    bottom: -60px;
    transform: translate(-80%,0) rotate(-30deg);
    transform-origin: 100% 100%;
    transition: transform 0.4s;
  }

  .curious {
    transform: translate(-15%,0) rotate(0deg);
  }

  :global(body) {
    overflow: hidden;
  }
</style>

<svelte:body 
  on:mouseenter={handleMouseEnter}
  on:mouseleave={handleMouseLeave}
/>

<img
  class:curious={hereKitty}
  alt="Kitten wants to know what is going on."
  src="./images/luke-yawning.jpg"
>