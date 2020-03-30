<script>
  let html = '<p>Please write some test data.</p>'
</script>

<style>
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  }
</style>

<div contenteditable="true" bind:innerHTML={html}></div>
<pre>{html}</pre>