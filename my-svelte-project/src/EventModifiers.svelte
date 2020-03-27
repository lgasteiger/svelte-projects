<script>
  function handleClick() {
    alert('Clicked');
  } //end handleClick
</script>

<button on:click|once={handleClick}>
  Click Me
</button>