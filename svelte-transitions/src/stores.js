import { writable } from 'svelte/store'

export let visible = writable(true);
export let status = writable('waiting...');