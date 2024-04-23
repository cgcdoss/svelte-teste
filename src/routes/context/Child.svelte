<script lang="ts">
  import { getContext } from "svelte";

  const usuario: { name: string } = getContext("usuario");
  const alertar: () => void = getContext("alertar");
</script>

<h1 class="text-3xl">Child Component</h1>
<p>{usuario.name}</p>

<button class="primary" on:click={alertar}>Teste</button>
