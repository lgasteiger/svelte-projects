<script>
  let w;
  let h;
  let size = 42;
  let text = 'Edit Me.';
</script>

<style>
  div {
    display: inline-block;
  }

  span {
    word-break: break-all;
  }
</style>

<h1>Binding Dimensions Example</h1>

<p>
  <input type=range bind:value={size}>
</p>
<p>
  <input bind:value={text}>
</p>

<p>Size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
  <span style="font-size: {size}px">
    {text}
  </span>
</div>