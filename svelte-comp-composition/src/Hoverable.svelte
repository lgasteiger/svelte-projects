<script>
  let hovering;

  function enter() {
    hovering = true;
  } //end enter

  function leave() {
    hovering = false;
  } //end leave
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
  <slot hovering={hovering}>
  </slot>
</div>