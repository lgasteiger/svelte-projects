<script>
  //import { onDestroy } from 'svelte';
  import { onInterval } from './utils.js';

  let seconds = 0;
  //const interval = setInterval(() => seconds += 1, 1000);
  onInterval(() => seconds += 1, 1000);

  //onDestroy(() => clearInterval(interval));
</script>

<p>
  The page has been open for {seconds} {seconds == 1 ? 'second' : 'seconds'}
</p>