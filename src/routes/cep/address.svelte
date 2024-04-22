<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let address: TAddress | undefined;
  const dispatcher = createEventDispatcher();

  function dispatchCustomEvent() {
    dispatcher("myEvent", {
      uf: address?.uf,
    });
  }
</script>

{#if address}
  <div class="grid grid-cols-3 gap-2 mt-4">
    <div>
      <b>Estado:</b>
      {address.uf}
    </div>
    <div>
      <b>Cidade:</b>
      {address.localidade}
    </div>
    <div>
      <b>Bairro:</b>
      {address.bairro}
    </div>
    <div>
      <b>Logradouro:</b>
      {address.logradouro}
    </div>
    <div>
      <b>Complemento:</b>
      {address.complemento || "-"}
    </div>
  </div>

  <button class="primary mt-4" on:click={dispatchCustomEvent}>
    Disparar output event
  </button>
{/if}
