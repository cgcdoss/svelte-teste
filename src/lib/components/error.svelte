<script lang="ts">
  import { error } from "$lib/store";
  import { fly } from "svelte/transition";
</script>

{#if $error}
  <div
    class="fixed top-16 right-3 bg-red-200 text-red-900 p-4"
    transition:fly={{ x: 200 }}
  >
    {$error}
    <button class="ml-2" on:click={() => error.set("")}>&times;</button>
  </div>
{/if}
