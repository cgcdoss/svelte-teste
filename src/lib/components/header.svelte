<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  $: currentUrl = $page.url.pathname
    .replace("/svelte-teste", "")
    .replaceAll("/", "");
  const routes = [
    { path: "", name: "Home" },
    { path: "cep", name: "CEP" },
    /* { path: "paises", name: "Países" },
    { path: "not-fount", name: "Not found" }, */
  ];
</script>

<nav class="bg-primary-950 w-full">
  <ul class="container mx-auto py-4 flex gap-4">
    {#each routes as route}
      <li>
        <a
          href="{base}/{route.path}"
          class="text-white hover:bg-primary-700 px-4 py-2 transition-all"
          class:bg-primary-500={currentUrl === route.path}
        >
          {route.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>