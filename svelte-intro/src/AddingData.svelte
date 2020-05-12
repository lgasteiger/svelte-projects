<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  let name = 'world';
  const footerImage = './images/machine-learning-31.jpg';
</script>

<style>
  a {
    transition: 0.5s;
  }

  #heading {
    background-image: url("../images/machine-learning-30.png");
    color: #000;
    padding: 30px;
  }
  
  #heading p {
    text-shadow: -2px 2px 2px #999;
  }

  footer {
    clear: both;
    background: #ccc;
  }

  footer figure {
    padding: 150px 0 0 0;
  }

  figcaption a {
    color: #f66;
    text-decoration: none;
    border-bottom: 3px solid #f66;
  }

  figcaption a:hover {
    border-color: #c00;
    color: #c00;
  }

  footer p {
    transform: scale(0.75);
  }
</style>

<section id="heading">
  <h1>Hello {name}!</h1>
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
      alt="Footer of machine learning 31."
    >
    <figcaption>
      <a href="https://svelte.dev/">
        Svelte JS Info
      </a>
    </figcaption>
  </figure>
  <p>
    This Webpage is HTML5 compliant.<br />
    Last updated: 2020-05-07
  </p>
</footer>