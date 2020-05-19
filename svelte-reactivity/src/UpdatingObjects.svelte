<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  const footerImage = './images/machine-learning-playlist.png';
  let numbers = [1,2,3,4];
  $: sum = numbers.reduce((t,n) => t + n, 0);

  function addNumbers() {
    numbers[numbers.length] = numbers.length + 1;
  } //end addNumbers
</script>

<section class="heading">

</section>
<section class="content">
  <p>
    {numbers.join(' + ')} = {sum}
  </p>

  <button on:click={addNumbers}>
    Add Number
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