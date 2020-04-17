export function longpress(node, duration) {
  let timer;

  const handleMousedown = () => {
    timer = setTimeout(() => {
      node.dispatchEvent (
        new CustomEvent('longpress')
      ); //end node.dispatchEvent
    }, duration); //end timer
  }; //end handleMousedown

  const handleMouseup = () => {
    clearTimeout(timer);
  }; //end handleMouseup

  node.addEventListener('mousedown', handleMousedown);
  node.addEventListener('mouseup', handleMouseup);

  return {
    update(newDuration) {
      duration = newDuration; 
    } //end update

    ,destroy() {
      node.removeEventListener('mousedown', handleMousedown);
      node.removeEventListener('mouseup', handleMouseup);
    } //end destroy 
  }; //end return
} //end longpress