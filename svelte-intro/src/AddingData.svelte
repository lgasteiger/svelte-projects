<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  let name = 'world';
  const footerImage = './images/machine-learning-31.jpg';
</script>

<section class="heading">
  <h1>Hello {name}!</h1>
</section>
<section class="content">
  <p>
    This Webpage shall be the Svelte Introduction => Adding Data exercise.
  </p>
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
    Last updated: 2020-05-11
  </p>
</footer>