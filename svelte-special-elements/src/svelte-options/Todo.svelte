<svelte:options immutable={true} />

<script>
  import { afterUpdate } from 'svelte';
  import flash from './flash.js';

  export let todo;
  
  let div;

  afterUpdate(() => {
    flash(div);
  }); //end afterUpdate()
</script>

<style>
  div {
    cursor: pointer;
    line-height: 1.5;
  }
</style>

<!--  
  The text will flash red whenever the 'Todo' object changes. 
-->
<div
  bind:this={div}
  on:click
>
  {todo.done ? 'Yeah!' : ''} {todo.text}
</div>