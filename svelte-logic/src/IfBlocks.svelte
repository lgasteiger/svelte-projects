<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  const footerImage = './images/machine-learning-playlist.png';

  export let user;

  function toggle() {
    user.loggedIn = !user.loggedIn;
  } //end toggle()
</script>

<section class="heading">
</section>
<section class="content">
  <p>
    This Webpage shall display the Svelte Logic If Blocks exercises.
  </p>
  {#if user.loggedIn}
    <button on:click={toggle}>
      Log Out
    </button>
  {/if}
  {#if !user.loggedIn}
    <button on:click={toggle}>
      Log In
    </button>
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
    Last Updated: 2020-05-11
  </p>
</footer>