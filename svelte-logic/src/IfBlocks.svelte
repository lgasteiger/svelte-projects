<script>
  const footerImage = './images/machine-learning-playlist.png';

  export let user;

  function toggle() {
    user.loggedIn = !user.loggedIn;
  } //end toggle()
</script>

<section class="content">
  <p>
    This example shall display the Svelte <u>Logic If Blocks</u> Tutorial exercise.
  </p>
  {#if user.loggedIn}
    <button on:click={toggle}>
      Log Out
    </button>
  {/if}
  {#if !user.loggedIn}
    <button on:click={toggle}>
      Log In
    </button>
  {/if}
</section>