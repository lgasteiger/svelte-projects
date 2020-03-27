<script>
    let m = { x: 0, y: 0 };

    function handleMouseMove(event) {
      m.x = event.clientX;
      m.y = event.clientY;
    } //end handleMouseMove
</script>

<style>
  div {
    width: 100%;
    height: 100%
  }
</style>

<div>
  The mouse position is {m.x} x {m.y}.
</div>