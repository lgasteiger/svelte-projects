<script>
  import CustomButton from './CustomButton.svelte';

  function handleClick() {
    alert('Clicked');
  } //end handleClick()
</script>

<section class="content">
  <CustomButton on:click={handleClick} />
</section>