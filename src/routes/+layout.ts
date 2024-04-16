import { getCookie } from "$lib/utils";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  const textFromLocalStorage = localStorage.getItem('texto') || '';
  const cookie = getCookie('algum-cookie');

  return {
    titleApplication: 'Svelte testes',
    textFromLocalStorage,
    cookie,
  };
}) satisfies LayoutLoad;

export const ssr = false;
export const prerender = true;
export const trailingSlash = 'always';
