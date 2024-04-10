<script lang="ts">
  import { loading } from "$lib/store";
  import type { PageData } from "../$types";
  import Address from "./address.svelte";

  export let data: PageData;
  let cep: number | undefined = undefined;
  let address: TAddress | undefined = undefined;

  async function findCEP() {
    if (cep?.toString().length === 8) {
      loading.set(true);

      try {
        const resp = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const json = await resp.json();
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
  class="mt-4 px-4 py-2 border focus:border-primary-400 outline-none"
  bind:value={cep}
  on:input={findCEP}
  maxlength="8"
/>

<Address {address} />
