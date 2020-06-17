<script>
  import Inner from './Inner.svelte';

  function handleMessage(event) {
    alert(event.detail.text);
  } //end handleMessage()
</script>

<section class="content">
  <Inner on:message={handleMessage} />
</section>
