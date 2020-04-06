import { writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

//const progress = writable(0);
function createProgress() {
  const { subscribe, set } = tweened(0);

  return {
    subscribe
    ,setZero: () => set(0)
    ,set25Per: () => set(0.25)
    ,set50Per: () => set(0.50)
    ,set75Per: () => set(0.75)
    ,set100Per: () => set(1)
    ,duration: 400
    ,easing: cubicOut
  }; //end return
} //end createProgress

export const progress = createProgress();