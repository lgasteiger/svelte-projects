<script>
  import { progress } from './stores.js';
</script>

<progress value={$progress} />
<button on:click={progress.setZero}>
  0%
</button>

<button on:click={progress.set25Per}>
  25%
</button>

<button on:click={progress.set50Per}>
  50%
</button>

<button on:click={progress.set75Per}>
  75%
</button>

<button on:click={progress.set100Per}>
  100%
</button>