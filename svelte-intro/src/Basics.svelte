<script>
  const footerImage = './images/machine-learning-playlist.png';
</script>

<style>
  a {
    transition: 0.5s;
  }

  #heading {
    color: white;
    background-image: url("../images/machine-learning-7.jpg");
    padding: 30px;
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
  <h1>Hello World</h1>
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
    Last Updated: 2020-05-07
  </p>
</footer>