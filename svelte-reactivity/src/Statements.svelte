<script>
  let count = 0;
  let doubled = 0;

  const footerImage = './images/machine-learning-playlist.png';

  $: {
    console.log(`The count is ${count}`);
    console.log(`The count doubled is ${doubled}`);
  } //end reactive declarations

  $: if (count >= 10) {
    alert(`The count, ${count} is dangerously high.`);
  } //end if reactive declaration

  function handleClick() {
    count += 1;
    doubled = count * 2;
  } //end handleClick()
</script>

<section class="heading">

</section>
<section class="content">
  <p>
    This Webpage shall display the Reactivity ==> Statements exercise.
  </p>
  
  <button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}  
  </button>

  <p>
    The count doubled is {doubled}.
  </p>
</section>
<footer>
  <figure>
    <img
      src={footerImage}
      width="125"
      height="75"
      alt="Footer of machine learning."
    >
    <figcaption>
      <a href="https://svelte.dev/">
        Svelte JS Info
      </a>
    </figcaption>
  </figure>
  <p>
    This Webpage is HTML5 compliant.<br />
    Last Updated: 2020-05-19
  </p>
</footer>