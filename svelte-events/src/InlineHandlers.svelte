<script>
  let m = {
    x: 0
    ,y: 0
  };
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  } /* end div */
</style>

<section class="content">
  <div on:mousemove="{e => m = {x: e.clientX, y: e.clientY }}">
    The mouse position is {m.x} x {m.y}.
  </div>
</section>