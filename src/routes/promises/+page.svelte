<script lang="ts">
  import { onMount } from "svelte";

  let userPromise = getUser();

  let user: any;
  let loading = false;

  onMount(() => {
    getNewUserAsync();
  });

  function getUser(skipLoading = false) {
    return fetch("https://randomuser.me/api/", undefined, skipLoading);
  }

  async function getNewUserAsync() {
    try {
      loading = true;
      const response = await getUser(true);

      if (response.ok) {
        const json = await response.json();
        user = json;
      } else {
        console.error("Erro ao obter usuário");
      }
    } catch (error) {
      console.error("Erro ao obter usuário");
    } finally {
      loading = false;
    }
  }
</script>

<svelte:head>
  <title>Svelte teste - Promises</title>
</svelte:head>

<h1 class="font-bold text-2xl my-4">Usando bloco await do Svelte</h1>

<button
  class="bg-primary-700 text-white p-2 hover:bg-primary-500 mb-4"
  on:click={() => (userPromise = getUser())}>Novo usuário</button
>

<div class="mb-3">
  {#await userPromise}
    <div class="animate-bounce">
      <h1 class="font-bold text-xl">Carregando...</h1>
    </div>
  {:then resp}
    {#if resp.ok}
      {#await resp.json() then json}
        <div>
          <img src={json.results[0].picture.medium} alt="Usuario" />
          {json.results[0].name.first}
          {json.results[0].name.last}
        </div>
      {/await}
    {:else}
      <div>Erro ao obter usuário</div>
    {/if}
  {:catch}
    <div>Erro ao obter usuário</div>
  {/await}
</div>

<hr />

<h1 class="font-bold text-2xl my-4">
  Usando async/await nativo do JS:
  <p class="inline-block text-sm">(Sem loading global)</p>
</h1>

<button
  class="bg-primary-700 text-white p-2 hover:bg-primary-500 mb-4"
  on:click={getNewUserAsync}>Novo usuário</button
>

{#if !user || loading}
  <div class="animate-bounce">
    <h2 class="font-bold text-xl">Carregando...</h2>
  </div>
{:else}
  <div>
    <img src={user.results[0].picture.medium} alt="Usuario" />
    {user.results[0].name.first}
    {user.results[0].name.last}
  </div>
{/if}

<hr class="my-4" />

<div>
  API em uso no exemplo:
  <a class="text-blue-500" href="https://randomuser.me/" target="_blank"
    >https://randomuser.me/</a
  >
</div>
