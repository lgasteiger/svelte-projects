<script>
  import { fade } from 'svelte/transition';
  import { visible } from './stores.js';
</script>

<label>
  <input type="checkbox" bind:checked={$visible}>
  Visible
</label>

{#if $visible}
  <p transition:fade>
    Fades in and out.
  </p>
{/if}