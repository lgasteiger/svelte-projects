<script>
  import { count } from './stores.js';

  function increment() {
    count.update(n => n + 1);
  } //end increment
</script>

<button on:click={increment}>
  Add
</button>