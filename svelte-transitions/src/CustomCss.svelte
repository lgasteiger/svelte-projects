<script>
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';
  import { visible } from './stores.js';

  function spin(node, { duration }) {
    return {
      duration
      ,css: t => {
        const eased = elasticOut(t);
        return `
          transform: scale(${eased}) rotate(${eased * 1000}deg);
          color: hsl(
            ${~~(t * 360)}
            ,${Math.min(100, 1000 - 1000 * t)}%
            ,${Math.min(50, 500 - 500 * t)}%
          );
        ` //end return
      }
    };
  } //end spin
</script>

<style>
  span {
    font-size: 4em;
  }
</style>

<label>
  <input type="checkbox" bind:checked={$visible}>
    Visible
</label>

{#if $visible}
  <div in:spin="{{duration: 10000}}" out:fade>
    <span>
      Transitions!
    </span>
  </div>
{/if}