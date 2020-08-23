<script>
  let scoops = 1;
  let flavors = ['Mint Chocolate Chip'];

  let menu = [
    'Cookies and cream'
    ,'Mint Chocolate Chip'
    ,'Raspberry Ripple'
  ];

  function join(flavors) {
    if (flavors.length === 1) {
      return flavors[0];
    } else {
      return `${flavors.slice(0, -1).join(', ')} and ${flavors[flavors.length - 1]}`;
    } //end if
  } //end join()
</script>

<section class="content">
  <h2>Size</h2>
  <label>
    <input
      type="radio"
      bind:group={scoops}
      value={1}
    >
    One Scoop
  </label>

  <label>
    <input
      type="radio"
      bind:group={scoops}
      value={2}
    >
    Two Scoops
  </label>

  <label>
    <input
      type="radio"
      bind:group={scoops}
      value={3}
    >
    Three Scoops
  </label>

  <h2>Flavours</h2>
  {#each menu as flavor}
    <label>
      <input
        type="checkbox"
        bind:group={flavors}
        value={flavor}
      >
      {flavor}
    </label>
  {/each}

  {#if flavors.length === 0}
    <p>
      Please select at least one flavor.
    </p>
  {:else if flavors.length > scoops}
    <p>
      Sorry, you cannot order more flavors than scoops.
    </p>
  {:else}
    <p>
      You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'} of {join(flavors)}
    </p>
  {/if} 
</section>