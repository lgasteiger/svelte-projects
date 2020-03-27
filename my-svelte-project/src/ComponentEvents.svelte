<script>
  import Inner from './Inner.svelte';

  function handleMessage(event) {
    alert(event.detail.text);
  } //end handleMessage
</script>

<Inner on:message={handleMessage} />