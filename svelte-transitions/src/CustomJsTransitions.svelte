<script>
  import { visible } from './stores.js'

  function typewriter(node, { speed = 50 }) {
    const valid = (
      node.childNodes.length === 1 && 
      node.childNodes[0].nodeType === 3);

    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child.`);
    } //end if

    const text = node.textContent;
    const duration = text.length * speed;

    return {
      duration
      ,tick: t => {
        const i = ~~(text.length * t);
        node.textContent = text.slice(0, i);
      } //end tick
    }; //end return
  } //end typewriter
</script>

<label>
  <input type="checkbox" bind:checked={$visible}>
    Visible
</label>

{#if $visible}
  <p in:typewriter>
    The quick brown fox jumps over the lazy dog.
  </p>
{/if}