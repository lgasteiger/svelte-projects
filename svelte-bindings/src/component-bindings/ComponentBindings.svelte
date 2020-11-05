<script>
  import Keypad from './Keypad.svelte';
  
  let pin;
  $: view = pin ? pin.replace(/\d(?!$)/g, '.') : 'Please enter PIN.';

  function handleSubmit() {
    alert(`Submitted PIN ${pin}`);
  } //end handleSubmit
</script>

<h1 style="color: {pin ? '#333' : '#ccc'}">
  {view}
</h1>

<Keypad bind:value={pin} 
        on:submit={handleSubmit} 
/>
