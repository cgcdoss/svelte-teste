<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<svelte:head>
  <title>Svelte teste - Fetch no load</title>
</svelte:head>

<img src={data.results[0].picture.medium} alt="Usuario" />
{data.results[0].name.first}
{data.results[0].name.last}
