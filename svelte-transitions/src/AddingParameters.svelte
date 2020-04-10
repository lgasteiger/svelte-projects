<script>
  import { fly } from 'svelte/transition';
  import { visible } from './stores.js';
</script>

<label>
  <input type="checkbox" bind:checked={$visible}>
  Visible
</label>

{#if $visible}
  <p transition:fly="{ { y: 40, duration: 2000 } }">
    Flies in and out.
  </p>
{/if}