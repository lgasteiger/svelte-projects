<svelte:head>
  <link rel="stylesheet" href="./svelteIntro.css">
</svelte:head>

<script>
  import Thing from './Thing.svelte';

  let things = [
    { id: 1, color: '#0d0887' }
    ,{ id: 2, color: '#6a00a8' }
    ,{ id: 3, color: '#b12a90' }
    ,{ id: 4, color: '#e16462' }
    ,{ id: 5, color: '#fca636' }
  ];

  function handleClick() {
    things = things.slice(1);
  } //end handleClick()
</script>

<section class="content">
  <p>
    This example shall display the Svelte Logic Keyed Each Blocks exercise.
  </p>

  <button on:click={handleClick}>
    Remove First Thing
  </button>

  {#each things as thing (thing.id)}
    <Thing current={thing.color} />
  {/each}
</section>