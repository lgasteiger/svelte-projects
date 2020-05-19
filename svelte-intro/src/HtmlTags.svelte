<script>
  const string = `This string contains some <strong>HTML!!!</strong>`;
  const footerImage = './images/machine-learning-6.jpg';
</script>

<section class="heading">
  <h1>HTML Tags</h1>
</section>
<section class="content">
  <p>
    This Webpage shall be the Svelte Introduction => HTML Tags exercise.
  </p>
  <pre>
    {@html string}
  </pre>
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