<script>
  let name = 'world';
</script>

<section class="content">
  <input bind:value={name}>

  <h1>
    Hello {name}!
  </h1>
</section>