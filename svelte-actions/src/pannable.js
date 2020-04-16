export function pannable(node) {
  let x;
  let y;

  function handleMousedown(event) {
    x = event.clientX;
    y = event.clientY;

    node.dispatchEvent(new CustomEvent('panstart', {
      detail: { x, y }
    })); //end node.dispatchEvent

    window.addEventListener('mousemove', handleMousemove);
    window.addEventListener('mouseup', handleMouseup);
  } //end handleMousedown

  function handleMousemove(event) {
    const dx = event.clientX - x;
    const dy = event.clientY - y;
    x = event.clientX;
    y = event.clientY;

    node.dispatchEvent(new CustomEvent('panmove', {
      detail: { x, y, dx, dy }
    })); //end nod.dispatchEvent
  } //end handleMousemove

  function handleMouseup(event) {
    x = event.clientX;
    y = event.clientY;

    node.dispatchEvent(new CustomEvent('panup', {
      detail: { x, y }
    })); //node.dispatchEvent

    window.removeEventListener('mousemove', handleMousemove);
    window.removeEventListener('mouseup', handleMouseup);
  } //end handleMouseup

  node.addEventListener('mousedown', handleMousedown);

  return {
    destroy() {
      node.removeEventListener('mousedown', handleMousedown);
    } //end destroy
  }; //end return
} //end pannable