<script>
  let questions = [
    { id: 1, text: `Where did you go to school?` }
    ,{ id: 2, text: `What is your mother's maiden name` }
    ,{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?`}
  ];

  let selected;
  let answer = '';
  
  function handleSubmit() {
    alert(`You answered question ${selected.id} (${selected.text}) with "${answer}".`);
  } //handleSubmit
  
  $: console.log(`The answer given is: ${answer}`);
</script>

<style>
  input {
    display: block;
    width: 500px;
    max-width: 100%;
    text-align: center;
  }

  h2 {
    text-align: left;
  }

  form {
    text-align: left;
  }

  p.selectedResponse {
    text-align: left;
  }
</style>

<h2>Insecure Questions</h2>

<form on:submit|preventDefault={handleSubmit}>
  <select bind:value={selected} on:change="{() => answer = ''}">
    {#each questions as question}
      <option value={question}>
        {question.text}
      </option>
    {/each}
  </select>

  <input bind:value={answer}>

  <p>
    <button disabled={!answer} type=submit>
      Submit
    </button>
  </p>
</form>

<p class="selectedResponse">
  Selected question <strong>{selected ? selected.id : '[waiting...]'}</strong>.
</p>