<script>
  import { onMount, setContext } from 'svelte';
  import { mapbox, key } from './mapbox.js';

  export let lat;
  export let lon;
  export let zoom;

  let container;
  let map;

  onMount(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';

    link.onload = () => {
      map = new mapbox.Map({
        container
        ,style: 'mapbox://styles/mapbox/street-v9'
        ,center: [lon, lat]
        ,zoom
      }); //end map
    }; //end link.onload

    document.head.appendChild(link);

    return () => {
      map.remove();
      link.parentNode.removeChild(link);
    }; //end return
  }); //end onMount

  setContext(key, {
    getMap: () => map
  }); //end setContext
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
</style>

<div bind:this={container}>
  {#if map}
    <slot>
    </slot>
  {/if}
</div>