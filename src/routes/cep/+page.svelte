<script lang="ts">
  import { error, loading } from "$lib/store";
  import type { load } from "./+page";
  import Address from "./address.svelte";

  export let data: Awaited<ReturnType<typeof load>>; // Deveria ser apenas PageData, mas está dando erro
  let cep: number | undefined = undefined;
  let address: TAddress | undefined = undefined;

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
  class="mt-4 px-4 py-2 border focus:border-primary-400 outline-none"
  bind:value={cep}
  on:input={findCEP}
  maxlength="8"
/>

<Address {address} />
