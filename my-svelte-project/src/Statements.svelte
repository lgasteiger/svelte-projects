<script>
  let count = 0;
  $: console.log(`The count is ${count}`);
  //$: alert(`I said the is: ${count}`);
  $: if (count >= 10) {
    alert(`Count is dangerouly high!`);
    count = 0;
  } //end if

  function handleClick() {
    count += 1;
  } //end handleClick
</script>

<p>
  <button on:click={handleClick}>
    Click {count} {count === 1 ? 'time' : 'times'}
  </button>
</p>