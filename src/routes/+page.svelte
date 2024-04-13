<script lang="ts">
  const modo = import.meta.env.MODE;
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
