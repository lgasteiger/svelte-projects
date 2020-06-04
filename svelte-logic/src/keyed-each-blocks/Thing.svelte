<script>
  //current is updated whenever the prop value changes.
  export let current;

  //initial is fixed upon initialization.
  const initial = current;
</script>

<style>
  span {
    display: inline-block;
    padding: 0.2em 0.5em;
    margin: 0 0.2em 0.2em 0;
    width: 4em;
    text-align: center;
    border-radius: 0.2em;
    color: white;
  } /* end span */
</style>

<section class="content">
  <p>
    <span style="background-color: {initial}">
      Initial
    </span>
    <span style="background-color: {current}">
      Current
    </span>
  </p>
</section>
