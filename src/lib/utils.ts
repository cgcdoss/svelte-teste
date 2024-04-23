import { get } from "svelte/store";
import { isMobile } from "./store";

export function getCookie(name: string) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2)
    return parts.pop()?.split(';').shift();
}

// Função get() serve para obter valor de stores quando estamos fora do contexto de um componente
export function mobile() {
  return get(isMobile);
}
