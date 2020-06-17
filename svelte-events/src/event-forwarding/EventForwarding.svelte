<script>
  import Outer from './Outer.svelte';

  function handleMessage(event) {
    alert(event.detail.text);
  } //end handleMessage()
</script>

<section class="content">
  <Outer on:message={handleMessage} />
</section>
