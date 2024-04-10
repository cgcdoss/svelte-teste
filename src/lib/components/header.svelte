<script lang="ts">
  import { page } from "$app/stores";

  $: currentUrl = $page.url.pathname;
  const routes = [
    { path: "cep", name: "CEP" },
    { path: "paises", name: "Países" },
  ];
</script>

<nav class="bg-primary-950 w-full">
  <ul class="container mx-auto py-4 flex gap-4">
    {#each routes as route}
      <li>
        <a
          href={route.path}
          class="text-white hover:bg-primary-700 px-4 py-2 transition-all"
          class:!bg-primary-500={currentUrl.includes(route.path)}
        >
          {route.name}
        </a>
      </li>
    {/each}
  </ul>
</nav>
