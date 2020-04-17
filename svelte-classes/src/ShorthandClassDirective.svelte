<script>
  let big = false;
</script>

<style>
  .big {
    font-size: 4em;
  }
</style>

<label>
  <input 
    type=checkbox
    bind:checked={big}
  >
  Big
</label>

<div class:big={big}>
  Some {big ? 'big' : 'small'} text
</div>