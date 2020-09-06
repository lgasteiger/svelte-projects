<script>
  let html = '<p>Write some text!</p>'
</script>

<style>
  [contenteditable] {
    padding: 0.5em;
    border: 1px solid #eee;
    border-radius: 4px;
  } /* end contenteditable */
</style>

<section class="content">
  <div contenteditable="true">
  </div>
  <pre>
    {html}
  </pre>
</section>