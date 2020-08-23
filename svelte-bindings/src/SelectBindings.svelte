<script>
  let questions = [
    {
      id: 1, text: `Where did you go to school?`
    }
    ,{
      id: 2, text: `What is your Mother's maiden name?`
    }
    ,{
      id: 3, text: `What is another personal fact that an attacker could easily find with Google?`
    }
  ]; //end questions list

  let selected;
  let answer = '';

  function handleSubmit() {
    alert(`Answered question: ${selected.id} (${selected.text}) with "${answer}"`);
  } //end handleSubmit()
</script>

<style>
  input {
    display: block;
    width: 500px;
    max-width: 100%;
  } /* end input */
</style>

<section class="content">
  <h2>Insecurity Questions</h2>
  <form on:submit|preventDefault={handleSubmit}>
    <select 
      bind:value={selected} 
      on:change="{() => answer = ''}"
    >
      {#each questions as question}
        <option value={question}>
          {question.text}
        </option>
      {/each}
    </select>

    <input bind:value={answer}>

    <button
      disabled={!answer}
      type=submit
    >
      Submit
    </button>
  </form>

  <p>
    Selected question {selected ? selected.id : '[waiting...'}
  </p>
</section>