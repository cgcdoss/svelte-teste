<script lang="ts">
  import { getContext } from "svelte";

  const usuario: { name: string } = getContext("usuario");
</script>

<h1 class="text-3xl">Parent Component</h1>
{usuario.name}

<slot />
