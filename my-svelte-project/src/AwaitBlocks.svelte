<script>
  let promise = getRandomNumber();

  async function getRandomNumber() {
    const res = await fetch(`tutorial/random-number`);
    const text = await res.text();

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    } //end if
  } //end getRandomNumber

  function handleClick() {
    promise = getRandomNumber();
  } //end handleClick
</script>

<button on:click={handleClick}>
  Generate Random Number
</button>

<p>Promise</p>

<!--
{#await promise}
	<p>...waiting</p>
{:then number}
	<p>The number is {number}</p>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
-->