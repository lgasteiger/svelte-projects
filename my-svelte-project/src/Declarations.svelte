<script>
  let count = 0;
  $: doubled = count * 2;

  function handleClick() {
    count += 1;
  } //end handleClick
</script>

<p>
  <button on:click={handleClick}>
    Click {count} {count === 1 ? 'time' : 'times'}
 </button>

  {count} doubled is {doubled}
</p>