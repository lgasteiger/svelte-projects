<script>
  const footerImage = './images/machine-learning-playlist.png';

  let dailyEquations = [
    { id: 'G_NlwfA8x0o', name: 'E=MC^2' }
    ,{ id: 'nnVq6gmatHU', name: 'Time Dilation' }
    ,{ id: 'On35HsNSx5k&t=380s', name: 'Lorentz Contraction' }
    ,{ id: '558zAduRYMk', name: 'Relativity of Simultaneity' }
    ,{ id: '5GwSxahtyKk', name: '1=.9999...'}
  ]; //end dailyEquations list
</script>

<style>
  li {
    text-align: left;
  }
</style>

<section class="content">
  <p>
    This example shall display the <u>Svelte Logic Each Block</u> Tutorial exercise.
  </p>
  <h1>
    Dr. Brian Greene's Daily Equation Lectures 
  </h1>
  <ol>
    {#each dailyEquations as de, i}
      <li>
        <a 
          target="_blank"
          href="https://www.youtube.com/watch?v={de.id}"
        >
          {de.name}
        </a>
      </li>
    {/each}
  </ol>
</section>