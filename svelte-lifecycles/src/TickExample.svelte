<script>
  import { tick } from 'svelte'

  let text = `Please select some text and hit the "Tab" key to toggle to uppercase.`;

  async function handleKeydown(event) {
    if (event.which !== 9) {
      return;
    } //end if

    event.preventDefault();

    const { selectionStart, selectionEnd, value } = this;
    const selection = value.slice(selectionStart, selectionEnd);
    const replacement = /[a-z]/.test(selection) ? selection.toUpperCase() : selection.toLowerCase();

    text = (
      value.slice(0, selectionStart) + replacement + value.slice(selectionEnd)
    );

    await tick();
    this.selectionStart = selectionStart;
    this.selectionEnd = selectionEnd;
  } //end handleKeydown
</script>

<style>
  textarea {
    width: 100%;
    height: 100px;
  }
</style>

<textarea value={text} on:keydown={handleKeydown} />