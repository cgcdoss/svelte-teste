<script lang="ts">
  import { base } from "$app/paths";
  import imageUrso from "$lib/imgs/header-tess-ai-urso-1.webp";
  import IconHome from "$lib/imgs/iconHome.svelte";
  import SvelteLogo from "$lib/imgs/svelteLogo.svelte";

  let cor = "#FF0000";
</script>

<h1>Imagem da internet</h1>
<img
  src="https://thispersondoesnotexist.com/"
  alt="pessoa não existe"
  class="h-[200px]"
/>

<h1>Imagem da pasta static</h1>
<img src={base + "/imgs/doguinho.avif"} alt="doguinho" class="h-[200px]" />

<h1>Imagem da pasta lib</h1>
<img src={imageUrso} alt="urso" class="h-[200px]" />

<h1>Imagem dentro de componente (svg)</h1>
<IconHome color={cor} class="img" />
<label for="cor">Cor do ícone:</label>
<input type="color" id="cor" bind:value={cor} />

<h1>Imagem dentro de componente (png)</h1>
<SvelteLogo />

<style>
  h1 {
    @apply text-2xl font-bold mb-2;
  }

  img + h1,
  :global(.img) + h1,
  :global(svg) + h1,
  input + h1 {
    @apply border-t-2 mt-6 pt-4;
  }
</style>
