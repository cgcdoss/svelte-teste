<script lang="ts">
  import { page } from "$app/stores";
  import { env } from "$env/dynamic/public";

  const id = $page.params.id;
</script>

<h1>
  Path param passado: {id}
</h1>

<hr />

<p class="mt-4">Usando $env/dynamic/public:</p>
<p>{env.PUBLIC_TESTE}</p>
