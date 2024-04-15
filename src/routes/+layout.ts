import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const textFromLocalStorage = localStorage.getItem('texto') || '';

  return {
    titleApplication: 'Svelte testes',
    textFromLocalStorage,
  };
}) satisfies LayoutLoad;

export const ssr = false;
export const prerender = true;
export const trailingSlash = 'always';
