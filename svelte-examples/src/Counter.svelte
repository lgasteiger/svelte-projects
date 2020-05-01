<script>
  let count = 0;

  function handleIncrement() {
    count += 1;
  } //end handleIncrement()
</script>

<!-- https://github.com/eugenkiss/7guis/wiki#counter -->
<input
  type=number
  bind:value={count}
>

<button on:click="{handleIncrement}">
  Count
</button>