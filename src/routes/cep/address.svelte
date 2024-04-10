<script lang="ts">
  export let address: TAddress | undefined;
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
{/if}
