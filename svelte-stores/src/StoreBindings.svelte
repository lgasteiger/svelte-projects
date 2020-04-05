<script>
  import { name, greeting } from './stores.js';
</script>

<h1>{$greeting}</h1>

<p>
  <input bind:value={$name}>
</p>

<button on:click="{() => $name += '!'}">
  Add an Exclamation Mark!
</button>