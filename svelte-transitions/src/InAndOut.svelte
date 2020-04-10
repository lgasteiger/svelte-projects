<script>
  import { fade, fly } from 'svelte/transition';
  import { visible } from './stores.js';
</script>

<label>
  <input type="checkbox" bind:checked={$visible}>
    Visible
</label>

{#if $visible}
  <p in:fly="{{ y: 40, duration: 2000 }}" out:fade>
    Flies in, fades out.
  </p>
{/if}