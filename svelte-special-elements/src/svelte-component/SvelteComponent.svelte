<script>
  import RedThing from './RedThing.svelte';
  import GreenThing from './GreenThing.svelte';
  import BlueThing from './BlueThing.svelte';

  const options = [
    {
      color: 'red'
      ,component: RedThing
    } //end 1st element
    ,{
      color: 'green'
      ,component: GreenThing
    } //end 2nd element
    ,{
      color: 'blue'
      ,component: BlueThing
    } //end 3rd element
  ]; //end options list

  let selected = options[0];
</script>

<select bind:value={selected}>
  {#each options as option}
    <option value={option}>
      {option.color}
    </option>
  {/each}
</select>

<!-- 
{#if selected.color === 'red'}
  <RedThing />
{:else if selected.color === 'green'}
  <GreenThing />
{:else if selected.color === 'blue'}
  <BlueThing />
{/if}  
-->

<svelte:component this={selected.component} />