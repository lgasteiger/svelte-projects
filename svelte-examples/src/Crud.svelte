<!-- https://eugenkiss.github.io/7guis/tasks#crud -->

<script>
  let people = [
    { first: 'Mark', last: 'Zuckerberg' }
    ,{ first: 'Evan', last: 'Yu'}
    ,{ first: 'Rich', last: 'Harris'}
  ]; //end people list

  let prefix = '';
  let first = '';
  let last = '';
  let i = 0;

  $: filteredPeople = prefix ? people.filter(person => {
    const name = `${person.last}, ${person.first}`;
    return name.toLowerCase().startsWith(prefix.toLowerCase());
  }) : people; //end filteredPeople reactive variable

  $: selected = filteredPeople[i];
  $: resetInputs(selected);

  function create() {
    people = people.concat({ first, last });
    i = people.length - 1;
    first = last = '';
  } //end create()

  function update() {
    selected.first = first;
    selected.last = last;
    people = people;
  } //end update()

  function remove() {
    //Remove selected person from the source People array not the filtered People array.
    const index = people.indexOf(selected);
    people = [...people.slice(0, index), ...people.slice(index + 1)];
    first = last = '';
    i = Math.min(i, filteredPeople.length - 2);
  } //end remove()

  function resetInputs(person) {
    first = person ? person.first : '';
    last = person ? person.last : '';
  } //end resetInputs()
</script>

<style>
  * {
    font-family: inherit;
    font-size: inherit;
  }

  input {
    display: block;
    margin: 0 0 0.5em 0;
  }

  select {
    float: left;
    margin: 0 1em 1em 0;
    width: 14em;
  }

  .buttons {
    clear: both;
  }
</style>

<input
  placeholder="filter-prefix"
  bind:value={prefix}
>

<select 
  bind:value={i}
  size={5}
>
  {#each filteredPeople as person, i}
    <option value={i}>
      {person.last}, {person.first}
    </option>
  {/each}
</select>

<label>
  <input
    bind:value={first}
    placeholder="first"
  >
</label>
<label>
  <input
    bind:value={last}
    placeholder="last"
  >
</label>

<div class="buttons">
  <button
    on:click={create}
    disabled="{!first || !last}"
  >
    Create
  </button>
  <button
    on:click={update}
    disabled="{!first || !last || !selected}"
  >
    Update
  </button>
  <button
    on:click={remove}
    disable="{!selected}"
  >
    Remove
  </button>
</div>
