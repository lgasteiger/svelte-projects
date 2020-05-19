<script>
  import Nested from './Nested.svelte';

  const footerImage = './images/machine-learning-6.jpg';
</script>

<style>
  .content p {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
    text-align: left;
  }
</style>

<section class="heading">
  <h1>Nested Components</h1>
</section>
<section class="content">
  <p>
    This Webpage shall be the Svelte Introduction => Nested Components exercise.
  </p>
  <h2 id="top">This is the Top.</h2>
  <p>
    This is a paragraph.
  </p>
  <p>
    You can go to the next paragraph at 
    <a href="#nested" alt="Nested Component anchor.">
      Nested Component.
    </a>
  </p>

  <!-- [content to load] -->
  <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas consequat dui sit amet est pharetra luctus. Morbi ut lacus. Ut volutpat rutrum pede. Donec quis erat. Maecenas accumsan consectetuer tortor. Aliquam non enim. Morbi tristique mi ut quam.
  </p>
  <p>
    Etiam porta, erat in placerat sodales, tortor mauris gravida sapien, non congue erat mauris vitae purus. Nam eget ipsum non libero fermentum varius. In hac habitasse platea dictumst. Ut non neque. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
  <p>
    Suspendisse augue. Morbi elit nisl, commodo in, nonummy sit amet, eleifend a, quam. Mauris lorem. Nullam nec sem. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum nulla sem, hendrerit sit amet, adipiscing quis, rhoncus nec, purus.
  </p>
  <p>
    Duis quis mi eget nisi pharetra venenatis. Ut sagittis erat vitae turpis tristique adipiscing.
  </p>
  <h2 id="nested">Nested Component</h2>
  <p>
    <Nested />
  </p>
  <p>
    <a href="#top">Go to Top</a>
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