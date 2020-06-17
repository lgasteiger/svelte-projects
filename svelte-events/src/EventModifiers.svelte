<script>
  function handleClick() {
    alert('Clicked');
  } //handleClick()

  function handleClickOnce() {
    alert('No more alerts.');
  } //end handleClickOnce()
</script>

<section class="content">
  <button on:click={handleClick}>
    Click Me
  </button>

  <button on:click|once={handleClickOnce}>
    Click Me Too
  </button>
</section>
