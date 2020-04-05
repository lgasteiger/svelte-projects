<script>
  import { count } from './stores2.js'
</script>

<h1>The count is now: {$count}</h1>

<button on:click={count.increment}>
  +
</button>

<button on:click={count.decrement}>
  -
</button>

<button on:click={count.reset}>
  Reset
</button>