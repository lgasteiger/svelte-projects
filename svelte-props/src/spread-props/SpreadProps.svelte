<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  import Info from './Info.svelte';

  const pkg = {
    name: 'svelte'
    ,version: 3
    ,speed: 'blazing'
    ,website: 'https://svelte.dev'
  }; //end pkg variable
  const footerImage = './images/machine-learning-playlist.png';
</script>

<section class="heading">
</section>
<section class="content">
  <p>
    This Webpage shall display the Svelte Spread Props Tutorial exercise.
  </p>

  <Info
    name={pkg.name}
    version={pkg.version}
    speed={pkg.speed}
    website={pkg.website}
  />
  
<!--
  <Info {...pkg} />
-->
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