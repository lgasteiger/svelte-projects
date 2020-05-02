<!-- https://eugenkiss.github.io/7guis/tasks#timer -->

<script>
  import { onDestroy } from 'svelte';

  let elapsed = 0;
  let duration = 5000;
  let lastTime = window.performance.now();
  let frame;

  (function update() {
    frame = requestAnimationFrame(update);
    const time = window.performance.now();
    elapsed += Math.min(
      time - lastTime
      ,duration - elapsed
    ); //end incremented elapsed variable

    lastTime = time;
  }()); //end update()

  onDestroy(() => {
    cancelAnimationFrame(frame);
  }); //end onDestroy()
</script>

<label>
  Elapsed time:
  <progress value={elapsed / duration} />
</label>

<div>
  {(elapsed / 1000).toFixed(1)}s
</div>

<label>
  Duration:
  <input
    type="range"
    bind:value={duration}
    min="1"
    max="20000"
  >
</label>

<button on:click="{() => elapsed = 0}">
  Reset
</button>