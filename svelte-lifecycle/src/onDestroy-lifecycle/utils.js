import { onDestroy } from 'svelte';

export function onInterval(callback, milliseconds) {
  const interval = setInterval(callback, milliseconds);

  onDestroy(() => {
    clearInterval(interval);
  }); //end onDestroy()
} //end onInterval(callback, milliseconds)