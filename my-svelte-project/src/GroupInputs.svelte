<script>
  const scoups = [1, 2, 3, 4, 5];
  const flavors = [
    'Cookies and Cream'
    ,'Mint Chocolate Chip'
    ,'Rasberry Riple'
    ,'Napoleon'
    ,'Vanilla Swirl'
  ];
  let chosenScoups = [];
  let chosenFlavors = [];

  $: console.log(`Size of chosen scoups is: ${chosenScoups.length}`);
  $: console.log(`Size if chosen flavors is: ${chosenFlavors.length}`);

  function join(flavors) {
    if (flavors.length === 1) {
      return flavors[0];
    } else {
      return `${flavors.slice(0, -1).join(', ')} and ${flavors[flavors.length - 1]}`;
    } //end if
  } //end join
</script>

<h2>Sizes Available</h2>
{#each scoups as scoup}
  <label>
    <input type=radio bind:group={chosenScoups} value={scoup}>
    {scoup} Scoup
  </label>
{/each}

<h2>Current Flavors Available</h2>
{#each flavors as flavor}
  <label class="flavorLabel">
    <input type=checkbox bind:group={chosenFlavors} value={flavor}>
    {flavor}
  </label>
{/each}

{#if chosenScoups.length === 0}
  <p><i>Please choose how many scoups</i>.</p>
{:else if chosenFlavors.length === 0}
  <p><i>Please choose at least one flavor</i>.</p>
{:else}
  <p>
    <strong>You ordered <u>{chosenScoups}</u> {chosenScoups === 1 ? 'scoup' : 'scoups'} of <u>{join(chosenFlavors)}</u></strong>.
  </p>
{/if}