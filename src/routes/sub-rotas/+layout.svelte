<script lang="ts">
  import { base } from "$app/paths";
</script>

<h1 class="text-2xl">Título no +layout.svelte</h1>

<div class="flex gap-4 mb-4">
  <a class="text-blue-500" href={base + "/sub-rotas/one"}>Página um</a>
  <a class="text-blue-500" href={base + "/sub-rotas/two"}>Página dois</a>
</div>

<slot />
