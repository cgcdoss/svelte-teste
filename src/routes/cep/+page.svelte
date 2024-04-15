<script lang="ts">
  import { error, loading } from "$lib/store";
  import { onDestroy, onMount } from "svelte";
  import { fly, type FlyParams } from "svelte/transition";
  import type { PageData } from "./$types";
  import Address from "./address.svelte";

  export let data: PageData; // Deveria ser apenas PageData, mas está dando erro
  let cep: number | undefined = undefined;
  let address: TAddress | undefined = undefined;

  onMount(() => {
    // Igual OnInit
  });

  onDestroy(() => {
    // Igual OnDestroy
  });

  async function findCEP() {
    if (cep?.toString().length === 8) {
      error.set("");
      loading.set(true);

      try {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await resp.json();

        if (!resp.ok) {
          error.set("Falha na comunicação com o servidor");
          return;
        }

        if (json.erro) {
          error.set("CEP inválido");
          return;
        }

        address = json;
      } finally {
        loading.set(false);
      }
    } else {
      address = undefined;
      error.set("");
    }
  }

  const flyOptions: FlyParams = {
    y: 200,
  };
</script>

<svelte:head>
  <title>Svelte teste - CEP</title>
</svelte:head>

<h1 class="text-3xl">
  {data.title}

  {#if cep}
    - {cep}
  {/if}
</h1>

<input
  type="text"
  placeholder="CEP"
  class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
  bind:value={cep}
  on:input={findCEP}
  maxlength="8"
  inputmode="numeric"
/>

{#if address}
  <div in:fly={flyOptions}>
    <Address {address} />
  </div>
{/if}
