export function longpress(node, duration) {
  let timer;

  const handleMousedown = () => {
    timer = setTimeout(() => {
      node.dispatchEvent (
        new CustomEvent('longpress')
      ); //end node.dispatchEvent
    }, 500); //end timer
  }; //end handleMousedown

  const handleMouseup = () => {
    clearTimeout(timer);
  }; //end handleMouseup
} //end longpress