<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  import Nested from './Nested.svelte';

  const footerImage = './images/machine-learning-playlist.png';
</script>

<section class="heading">
  
</section>
<section class="content">
  <p>
    This Webapage shall display the Svelte Declaring Props Tutorial exercise.
  </p>
  <Nested answer={42} />
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
    Last Updated: 2020-05-11
  </p>
</footer>