<script lang="ts">
  import { page } from "$app/stores";
  import { env } from "$env/dynamic/public";

  const id = $page.params.id;
</script>

<h1>
  Path param passado: {id}
</h1>

{env.PUBLIC_TESTE}
