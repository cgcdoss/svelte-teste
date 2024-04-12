<script lang="ts">
  import { error, loading } from "$lib/store";
  import { onDestroy, onMount } from "svelte";
  import type { load } from "./+page";
  import Address from "./address.svelte";

  export let data: Awaited<ReturnType<typeof load>>; // Deveria ser apenas PageData, mas está dando erro
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
      } catch (error) {
      } finally {
        loading.set(false);
      }
    } else {
      address = undefined;
    }
  }
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

<Address {address} />
