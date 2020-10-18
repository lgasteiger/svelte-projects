<script>
  import { onMount } from 'svelte';

  let canvas;

  onMount(() => {
    const ctx = canvas.getContext('2d');
    let frame;

    (function loop() {
      frame = requestAnimationFrame(loop);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let p = 0; p < imageData.data.length; p += 4) {
        const i = p / 4;
        const x = i % canvas.width;
        const y = i / canvas.width >>> 0;
        const t = window.performance.now();
        const r = 64 + (128 * x / canvas.width) + (64 * Math.sin(t / 1000));
        const g = 64 + (128 * y / canvas.height) + (64 * Math.cos(t / 1000));
        const b = 128;

        imageData.data[p + 0] = r;
        imageData.data[p + 1] = g;
        imageData.data[p + 2] = b;
        imageData.data[p + 3] = 255;
      } //end for

      ctx.putImageData(imageData, 0, 0);
    }()); //end loop()

    return () => {
      cancelAnimationFrame(frame);
    };
  }); //end onMount()
</script>

<style>
  canvas {
    width: 100%;
    height: 100%;
    background-color: #666;
    -webkit-mask: url('./images/CAM00009.jpg') 50% 50% no-repeat;
    mask: url('./images/CAM00009.jpg') 50% 50% no-repeat;
  } /* end canvas */
</style>

<canvas
  bind:this={canvas}
  width={32};
  height={32};
>
</canvas>