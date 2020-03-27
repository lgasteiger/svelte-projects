<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', {
      text: 'Hello!'
    });
  } //end sayHello
</script>

<button on:click={sayHello}>
  Click Hello Button
</button>