<script>
  import Inner from './Inner.svelte';
  //import { createEventDispatcher } from 'svelte';

  //const dispatch = createEventDispatcher();

  //function forward(event) {
  //  dispatch('message', event.detail);
    
    //dispatch('message', {
    //  text: 'Hello World!'
    //});
  //} //end forward
</script>

<Inner on:message />