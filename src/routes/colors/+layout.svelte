<script lang="ts">
  const colors = ["ff3e00", "676779", "42b4ff", "invalid"];
  let customColor = "#ff0000";
</script>

<div class="flex flex-col md:flex-row gap-4 mb-6">
  {#each colors as color}
    <a class="p-2" href={"/colors/pick/" + color} style="--color: #{color}">
      #{color}
    </a>
  {/each}

  <div class="flex gap-1">
    <input type="color" bind:value={customColor} />
    <a
      class="p-2"
      href={"/colors/pick/" + customColor.replace("#", "")}
      style="--color: {customColor}"
    >
      {customColor}
    </a>
  </div>
</div>

<slot />

<style>
  a {
    background-color: var(--color);
  }
</style>
