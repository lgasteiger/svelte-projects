<script>
  import { fly } from 'svelte/transition';
  import { visible, status } from './stores.js';
</script>

<p>
  Status: {$status}
</p>

<label>
  <input type="checkbox" bind:checked={$visible}>
  Visible
</label>

{#if $visible}
  <p 
    transition:fly="{{ y: 200, duration: 2000 }}"
    on:introstart="{() => $status = 'Intro started'}"
    on:outrostart="{() => $status = 'Outro started'}"
    on:introend="{() => $status = 'Intro ended'}"
    on:outroend="{() => $status ='Outro ended'}"
  >
    Flies in and out.
  </p>
{/if}