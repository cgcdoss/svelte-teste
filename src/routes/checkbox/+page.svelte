<script lang="ts">
  const marcas = ["Fiat", "Chevrolet", "Audi", "BMW"];
  let marcasSelecionadas: string[] = [];

  let modelos = [
    { descricao: "Argo" },
    { descricao: "Onix" },
    { descricao: "TT" },
    { descricao: "320i" },
  ];
  $: workModelos = modelos.map((m) => ({ ...m, checked: false }));

  let opcaoSelecionada = "";
  let opcaoSelecionada2 = "";
</script>

<div class="grid grid-cols-2 gap-4">
  <div>
    <h1 class="text-2xl mb-6">Com bind:group</h1>

    <div class="flex flex-col gap-2">
      {#each marcas as marca}
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            id={marca}
            value={marca}
            bind:group={marcasSelecionadas}
          />
          <label for={marca}>{marca}</label>
        </div>
      {/each}

      <hr />

      <h2 class="text-lg">Selecionados:</h2>
      {#each marcasSelecionadas as selecionados}
        <p>{selecionados}</p>
      {/each}
    </div>
  </div>

  <div>
    <h1 class="text-2xl mb-6">Sem bind:group</h1>

    <div class="flex flex-col gap-2">
      {#each workModelos as modelo}
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            id={modelo.descricao}
            bind:checked={modelo.checked}
          />
          <label for={modelo.descricao}>{modelo.descricao}</label>
        </div>
      {/each}

      <hr />

      <h2 class="text-lg">Selecionados:</h2>
      {#each workModelos.filter((m) => m.checked) as selecionados}
        <p>{selecionados.descricao}</p>
      {/each}
    </div>
  </div>
</div>

<hr class="my-6" />

<h1 class="text-2xl">input radio</h1>

<h2 class="text-lg">Sem bind:group</h2>
{#each marcas as marca}
  <div class="flex items-center gap-2">
    <input
      type="radio"
      id={marca + "_radio1"}
      value={marca}
      name="marcas"
      on:change={() => (opcaoSelecionada = marca)}
    />
    <label for={marca + "_radio1"}>{marca}</label>
  </div>
{/each}

Opcão: {opcaoSelecionada}

<div class="my-4"></div>

<h2 class="text-lg">Com bind:group</h2>
{#each marcas as marca}
  <div class="flex items-center gap-2">
    <input
      type="radio"
      id={marca + "_radio2"}
      value={marca}
      name="marcas2"
      bind:group={opcaoSelecionada2}
    />
    <label for={marca + "_radio2"}>{marca}</label>
  </div>
{/each}

Opcão 2: {opcaoSelecionada2}
