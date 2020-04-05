import { writable, readable, derived} from 'svelte/store';

export const count = writable(0);

export const time = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000); //end setInterval

  return function stop() {
    clearInterval(interval);
  }; //end stop
}); //end start

export const date = readable(null, function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000); //end setInterval

  return function stop() {
    clearInterval(interval);
  }; //end stop
}); //end start

const startTime = new Date();
export const elasped = derived(time, $time => Math.round(($time - startTime) / 1000));

export const name = writable('World');
export const greeting = derived(name, $name => `Hello ${$name}!`);