<script>
  import { count } from './stores.js';

  function decrement() {
    count.update(n => n - 1);
  } //end decrement
</script>

<button on:click={decrement}>
  Subtract
</button>