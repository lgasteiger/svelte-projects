<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', { text: 'Hello using Event Forwarding!' });
  } //end sayHello()
</script>

<section class="content">
  <button on:click={sayHello}>
    Say Hello
  </button>
</section>
