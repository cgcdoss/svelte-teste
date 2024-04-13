import { writable } from "svelte/store";

export const loading = writable(false);
export const error = writable('');
export const isMobile = writable(matchMedia("(max-width: 425px)").matches);
