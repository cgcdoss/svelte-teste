import { browser } from "$app/environment";
import { writable } from "svelte/store";

export const loading = writable(false);
export const error = writable('');
export const isMobile = writable(false);

if (browser) {
  const matchedMedia = matchMedia("(max-width: 425px)");
  isMobile.set(matchedMedia.matches);
  matchedMedia.addEventListener("change", (ev) =>
    isMobile.set(ev.matches)
  );
}
