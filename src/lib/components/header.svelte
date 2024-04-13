<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  const pageSvelteFiles = import.meta.glob("../../routes/**/+page.svelte");
  const pages = Object.keys(pageSvelteFiles).map((item) =>
    item
      .replace("../../routes/", "")
      .replace("+page.svelte", "")
      .replace("/", "")
  );

  $: currentUrl = $page.url.pathname
    .replace("/svelte-teste", "")
    .replaceAll("/", "");
  const routes = pages.map((m) => ({
    path: m,
    name: m === "" ? "Home" : m.substring(0, 1).toUpperCase() + m.substring(1),
  }));
</script>

<nav class="bg-primary-950 w-full">
  <ul class="container mx-auto px-8 py-4 flex gap-4">
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
