<script>
  //import marked from 'marked';

  let value = `Some words are <i>*italic*</i>, some are <b>**bold**</b>.`;
</script>

<style>
  textarea {
    width: 100%;
    height: 200 px;
  }
</style>

<textarea bind:value={value}></textarea>

{@html (value)}