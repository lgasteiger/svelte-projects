<script>
  import Inner from './Inner.svelte';
  import Outer from './Outer.svelte';

  function handleMessage(event) {
    alert(event.detail.text);
  } //end handleMessage
</script>

<Outer on:message={handleMessage} />