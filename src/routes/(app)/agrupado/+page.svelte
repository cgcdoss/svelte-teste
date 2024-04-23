<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>
  O titleApplication irá sobrescrever o titleApplication do +layout.ts na raiz
  da pasta routes:
</h1>

<h1>{data.titleApplication}</h1>

<hr />

<p class="mt-4">Usando $env/static/public:</p>
<h2>{data.teste}</h2>
