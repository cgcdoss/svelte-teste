<script lang="ts">
  import { page } from "$app/stores";
</script>

{#if $page.status === 404}
  <h1 class="text-red-600 text-3xl mt-6">Página não encontrada</h1>
{:else}
  <h1 class="text-red-600 text-3xl mt-6">
    {$page.status}: {$page.error?.message}
  </h1>
{/if}
