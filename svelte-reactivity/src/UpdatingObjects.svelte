<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  const footerImage = './images/machine-learning-playlist.png';
  let numbers = [1,2,3,4];
  $: sum = numbers.reduce((t,n) => t + n, 0);

  function addNumber() {
    numbers[numbers.length] = numbers.length + 1;
  } //end addNumbers

  function delNumber() {
    if (numbers.length > 0) {
      let n = numbers.pop();
      numbers = numbers;
      console.log(`The popped number from the array is: ${n}`);
    } else {
      alert('Sorry, no numbers to remove.');
      console.log('Array is empty; no numbers to remove.');
    } //end if
  } //end delNumber

  function delFromBeginning() {
    if (numbers.length > 0) {
      let n = numbers.shift();
      numbers = numbers;
      console.log(`The number removed is: ${n}`);
    } else {
      alert('Sorry, no numbers to remove.');
      console.log('Array is empty; no numbers to remove.');
    } //end if
  } //end addToBeginning()

  function addToBeginning() {
    let n = numbers.length - 1;
    numbers.unshift(n);
    numbers = numbers;
  } //end addToBeginning
</script>

<section class="heading">

</section>
<section class="content">
  <p>
    This Webpage shall display the Reactivity ==> Updating Arrays and Objects exercise.
  </p>
  <p>
    {numbers.join(' + ')} = {sum}
  </p>

  <button on:click={addNumber}>
    Add Number
  </button>
  <button on:click={delNumber}>
    Delete Number
  </button>
  <button on:click={delFromBeginning}>
    Remove From Beginning
  </button>
  <button on:click={addToBeginning}>
    Add to Beginning
  </button>
</section>
<footer>
  <figure>
    <img
      src={footerImage}
      width="125"
      height="75"
      alt="Footer of machine learning."
    >
    <figcaption>
      <a href="https://svelte.dev/">
        Svelte JS Info
      </a>
    </figcaption>
  </figure>
  <p>
    This Webpage is HTML5 compliant.<br />
    Last Updated: 2020-05-19
  </p>
</footer>