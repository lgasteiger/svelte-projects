<script>
  import { onMount } from 'svelte';

  let photos = [];

  onMount(async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
    photos = await res.json();
  }); //end onMount
</script>

<style>
  .photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  } /* end .photos */

  figure, img {
    width: 100%;
    margin: 0;
  } /* end figure, img */
</style>

<h1>Photo Album</h1>

<div class="photos">
  {#each photos as photo}
    <figure>
      <img src={photo.thumbnailURL}
           alt={photo.title}
      >
      <figcaption>{photo.title}</figcaption>
    </figure>
  {:else}
    <!-- This block renders when photos.length === 0 -->
    <p>loading...</p>
  {/each}
</div>