<script>
  let user = { loggedIn: false };

  function toggle() {
    user.loggedIn = !user.loggedIn;
  } //end toggle
</script>

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