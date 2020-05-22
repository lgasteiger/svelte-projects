<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  const footerImage = './images/machine-learning-playlist.png';

  export let x;
</script>

<section class="heading">

</section>
<section class="content">
  <p>
    This Webpage shall display the Svelte <u>Logic Else If Block</u> Tutorial exercise.
  </p>
  {#if x > 10}
    <p>
      {x} is greater than 10.
    </p>
  {:else if x < 5}
    {x} is less than 5.
  {:else}
    <p>
      {x} is between 5 and 10.
    </p>
  {/if}
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
    Last Updated: 2020-05-21
  </p>
</footer>