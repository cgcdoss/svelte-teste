<script lang="ts">
  const colors = ["ff3e00", "676779", "42b4ff", "invalid"];
</script>

<div class="flex flex-col md:flex-row gap-4 mb-6">
  {#each colors as color}
    <a class="p-2" href={"/colors/pick/" + color} style="--color: #{color}">
      #{color}
    </a>
  {/each}
</div>

<slot />

<style>
  a {
    background-color: var(--color);
  }
</style>
