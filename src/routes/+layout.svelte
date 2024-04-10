<script>
  import Header from "$lib/components/header.svelte";
  import "../app.pcss";
</script>

<Header />

<main class="container mx-auto">
  <slot />
</main>
