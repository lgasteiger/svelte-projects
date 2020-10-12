<script>
  let w;
  let h;
  let size = 42;
  let text = 'Edit Me.';
</script>

<style>
  input {
    display: block;
  } /* end input */

  div {
    display: inline block;
  } /* end div */

  span {
    word-break: break-all;
  } /* end span */
</style>

<section class="content">
  <input
    type="range"
    bind:value={size}
  >

  <input
    bind:value={text}
  >

  <p>
    Size: {w}px x {h}px
  </p>

  <div 
    bind:clientHeight={h}
    bind:clientWidth={w}
  >
    <span style="font-size: {size}px">
      {text}
    </span>
  </div>
</section>