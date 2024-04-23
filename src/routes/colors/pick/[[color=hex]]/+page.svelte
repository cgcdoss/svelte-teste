<script lang="ts">
  import { page } from "$app/stores";
  let color = $page.params.color;
</script>

<h1 class="text-3xl p-4" style="--color: #{$page.params.color}">
  Color is: {color}
</h1>

<style>
  h1 {
    background-color: var(--color);
  }
</style>
