<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { isMobile } from "$lib/store";
  import { spring } from "svelte/motion";

  // usando apenas um * para não entrar nas subpastas
  const pageSvelteFiles = import.meta.glob("../../routes/*/+page.svelte");
  const pages = Object.keys(pageSvelteFiles).map((item) =>
    item
      .replace("../../routes/", "")
      .replace("+page.svelte", "")
      .replace("/", "")
  );
  const routes = pages.map((m) => ({
    path: m,
    name: m.substring(0, 1).toUpperCase() + m.substring(1).replaceAll("-", " "),
  }));
  addManuallySomeRoutes();

  $: currentUrl = $page.url.pathname
    .replace("/svelte-teste", "")
    .replaceAll("/", "");

  let showItems = false;
  const height = spring(72, { stiffness: 0.1, damping: 0.27 });
  $: height.set(showItems ? ulHeight() : 72);

  export let title: string;

  function ulHeight() {
    const initialHeight = 72;
    const gapColumn = 16;
    const itemsHeight = routes.length * 46;
    return itemsHeight + initialHeight + gapColumn;
  }

  function collapseMenuWhenItemClicked(elem: HTMLLIElement) {
    elem.addEventListener("click", () => {
      if ($isMobile) {
        showItems = false;
      }
    });
  }

  function addManuallySomeRoutes() {
    routes.unshift({
      name: "Home",
      path: "",
    });
    routes.push({
      name: "Rotas dinâmicas",
      path: "rotas-dinamicas/" + Math.floor(Math.random() * 100),
    });
    routes.push({
      name: "Agrupado",
      path: "agrupado",
    });
  }
</script>

<header>
  <nav class="bg-primary-950 w-full" style="height: {$height}px;">
    <div
      class="flex container mx-auto px-8 py-4 gap-4"
      class:flex-col={showItems}
    >
      <div class="flex gap-4">
        <button
          class="block md:hidden ml-2"
          on:click={() => (showItems = !showItems)}
        >
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

        <!-- Logo Svelte -->
        <img
          src="https://api.iconify.design/vscode-icons:file-type-svelte.svg"
          alt="svelte logo"
          class="h-[40px]"
        />

        {#if $isMobile}
          <h1 class="text-xl text-white py-1">{title}</h1>
        {/if}
      </div>

      <ul
        class="hidden md:flex gap-2"
        class:!flex={showItems}
        class:flex-col={showItems}
      >
        {#each routes as route}
          <li use:collapseMenuWhenItemClicked>
            <a
              href="{base}/{route.path}"
              class="block w-full text-white hover:bg-primary-700 px-4 py-2 transition-all"
              class:bg-primary-500={currentUrl === route.path}
            >
              {route.name}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</header>
