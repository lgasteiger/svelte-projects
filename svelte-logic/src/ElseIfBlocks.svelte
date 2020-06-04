<script>
  const footerImage = './images/machine-learning-playlist.png';

  export let x;
</script>

<section class="content">
  <p>
    This example shall display the Svelte <u>Logic Else If Block</u> Tutorial exercise.
  </p>
  {#if x > 10}
    <p>
      {x} is greater than 10.
    </p>
  {:else if x < 5}
    {x} is less than 5.
  {:else}
    <p>
      {x} is between 5 and 10.
    </p>
  {/if}
</section>