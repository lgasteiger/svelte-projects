<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  const footerImage = './images/machine-learning-playlist.png';
</script>

<section class="heading">
  <h1>Hello World</h1>
</section>
<section class="content">
  <p>
    This Webpage shall be the Svelte Introduction => Basic exercise.
  </p>
</section>
<footer>
  <figure>
    <img
      src={footerImage}
      width="125"
      height="75"
      alt="Footer of machine learning playlist."
    >
    <figcaption>
      <a href="https://svelte.dev/">
        Svelte JS Info
      </a>
    </figcaption>
  </figure>
  <p>
    This Webpage is HTML5 compliant.<br />
    Last Updated: 2020-05-11
  </p>
</footer>