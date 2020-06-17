<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  function sayHello() {
    dispatch('message', { 
      text: 'Hello!' 
    }); //end dispatch
  } //end sayHello()
</script>

<section class="content">
  <button on:click={sayHello}>
    Click to Say Hello!
  </button>
</section>