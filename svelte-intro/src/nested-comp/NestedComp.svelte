<script>
  import Nested from './Nested.svelte';
</script>

<style>
  p {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;
  }
</style>

<h1 id="top">This is the Top.</h1>
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