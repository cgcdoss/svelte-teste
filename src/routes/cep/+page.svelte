<script lang="ts">
  import { loading } from "$lib/store";
  import Address from "./address.svelte";

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

<h1 class="text-3xl">
  Encontrar CEP
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
