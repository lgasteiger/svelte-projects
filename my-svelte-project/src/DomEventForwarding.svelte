<script>
  import CustomButton from './CustomButton.svelte';

  let count = 0;
  $: console.log(`The count is: ${count}`);

  function handleClick() {
    count += 1;
    //alert(`Clicked ${count} ${count === 1 ? 'time' : 'times'}`);
  } //end handleClick
</script>

<CustomButton on:click={handleClick} count={count}/>