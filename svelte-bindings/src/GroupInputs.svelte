<script>
  let scoops = [
    { id: 1, number: 'ONE' }
    ,{ id: 2, number: 'TWO'}
    ,{ id: 3, number: 'THREE' }
    ,{ id: 4, number: 'FOUR' }
  ]; //end scoops list
  let numOfScoops = 1;

  let menuFlavors = [
    { id: 1, flavor: 'UBE' }
    ,{id: 2, flavor: 'VANILLA' }
    ,{id: 3, flavor: 'NAPOLEON' }
    ,{id: 4, flavor: 'CHOCOLATE CHIP'}
  ]; //end menuFlavors list
  let chosenFlavors = [];

  function join(flavors) {
    if (chosenFlavors.length === 1) {
      return chosenFlavors[0];
    } else {
      return `${ chosenFlavors.slice(0, -1).join(', ') } and ${ chosenFlavors[chosenFlavors.length - 1] }`;
    } //end if
  } //end join()
</script>

<section class="content">
  <h2>Number of Scoops</h2>
  <label>
    <input
      type="radio"
      bind:group={numOfScoops}
      value={1}
    >
    One Scoop
  </label>
  <label>
    <input
      type="radio"
      bind:group={numOfScoops}
      value={2}
    >
    Two Scoops
  </label>
  <label>
    <input
      type="radio"
      bind:group={numOfScoops}
      value={3}
    >
    Three Scoops
  </label>
  <label>
    <input
      type="radio"
      bind:group={numOfScoops}
      value={4}
    >
    Four Scoops
  </label>

  <h2>Flavors</h2>
  {#each menuFlavors as availableFlavor (availableFlavor.id)}
    <label>
      <input
        type="checkbox"
        bind:group={chosenFlavors}
        value={availableFlavor.flavor}
      >
      {availableFlavor.flavor}
    </label>
  {/each}

  {#if chosenFlavors.length === 0}
    <p>
      Please select at least one flavor.
    </p>
  {:else if chosenFlavors.length > numOfScoops}
    <p>
      Sorry, can not order more flavors than scoops. Please try again.
    </p>
  {:else}
    <p>
      You ordered {numOfScoops} {numOfScoops === 1 ? 'scoop' : 'scoops'} of {join(chosenFlavors)} ice cream.
    </p>
  {/if}
</section>