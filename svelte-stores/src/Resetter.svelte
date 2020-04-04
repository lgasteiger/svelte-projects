<script>
  import { count } from './stores.js';

  function reset() {
    count.set(0);
  } //end reset
</script>

<button on:click={reset}>
  Reset
</button>