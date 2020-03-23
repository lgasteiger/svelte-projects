<script>
  let numbers = [1, 2, 3, 4];
  let numberRemoved;
  $: sum = numbers.reduce((t, n) => t + n, 0);

  function addNumbers() {
    numbers = [...numbers, numbers.length + 1];
  } //addNumbers

  function subtractNumbers() {
    numberRemoved = numbers[numbers.length - 1];
    numbers.pop();
    numbers = numbers;
    console.log('Number removed: ' + numberRemoved);
  } //end subtractNumbers
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumbers}>
  Add a number
</button>

<button on:click={subtractNumbers}>
  Subtract a number
</button>