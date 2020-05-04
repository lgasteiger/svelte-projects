<svelte:options immutable />

<script>
  import { afterUpdate } from 'svelte';
  import flash from './flash.js';

  export let todo;
  export let toggle;

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

<!-- The text will flash when the 'Todo' object changes. -->
<div 
  bind:this={div}
  on:click
>
  {todo.done ? 'Yes' : ''} {todo.text} 
</div>