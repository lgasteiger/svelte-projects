<svelte:head>
  <link rel="stylesheet" href=".\svelteIntro.css">
</svelte:head>

<script>
  let count = 0;

  const footerImage = './images/machine-learning-playlist.png';
  
  function handleClick() {
    count += 1;
  } //end handleClick()
</script>

<section class="heading">
  
</section>
<section class="content">
  <p>
    This Webpage shall be the Reactivity ==> Assignments exercise.
  </p>
  <button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
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