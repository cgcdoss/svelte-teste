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

  let showItems = false;
</script>

<nav class="bg-primary-950 w-full">
  <div
    class="flex container mx-auto px-8 py-4 gap-4"
    class:flex-col={showItems}
  >
    <button class="block md:hidden" on:click={() => (showItems = !showItems)}>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <ul
      class="hidden md:flex gap-2"
      class:!flex={showItems}
      class:flex-col={showItems}
    >
      {#each routes as route}
        <li class="py-2">
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
  </div>
</nav>
