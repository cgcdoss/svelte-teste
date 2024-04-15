<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;

  const modo = import.meta.env.MODE;

  let texto = data.textFromLocalStorage;

  function saveInLocalStorage() {
    localStorage.setItem("texto", texto);
  }
</script>

<svelte:head>
  <title>Svelte teste</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<hr class="my-4" />

{#if modo === "dev"}
  <p>O ambiente atual é: "dev"</p>
{:else if modo === "prod"}
  <p>O ambiente atual é: "prod"</p>
{/if}

<hr class="my-4" />

<div class="space-x-2">
  <label for="localStorage">Texto no localStorage:</label>
  <input
    type="text"
    id="localStorage"
    autocomplete="off"
    bind:value={texto}
    on:change={saveInLocalStorage}
  />
  <sub>Recarregue a página para obter o valor atual</sub>
</div>
