<script lang="ts">
    import { error, loading } from "$lib/store";
    import { fly, type FlyParams } from "svelte/transition";
    import type { PageData } from "./$types";
    import Address from "./address.svelte";
    import Button from "$lib/components/button-on-clicked.svelte";
    import Button2 from "$lib/components/button.svelte";

    export let data: PageData; // Deveria ser apenas PageData, mas está dando erro
    let cep: string | undefined = undefined;
    let address: TAddress | undefined = undefined;

    const flyOptions: FlyParams = {
        y: 200,
    };

    async function findCEP() {
        if (cep?.length === 9) {
            error.set("");
            loading.set(true);

            try {
                const resp = await fetch(
                    `https://viacep.com.br/ws/${cep.replace("-", "")}/json/`
                );
                const json = await resp.json();

                if (!resp.ok) {
                    error.set("Falha na comunicação com o servidor");
                    return;
                }

                if (json.erro) {
                    error.set("CEP inválido");
                    return;
                }

                address = json;
            } finally {
                loading.set(false);
            }
        } else {
            address = undefined;
            error.set("");
        }
    }

    function autoFocusCep(
        node: HTMLInputElement,
        { timeout }: { timeout: number }
    ) {
        setTimeout(() => {
            node.focus();
        }, timeout);

        return {
            destroy: () => {
                // se estiver logando mais de uma vez é por conta do {#key...} no +layout.svelte na raíz da /routes
                console.log("vai ser chamado quando a tela for destruída");
            },
        };
    }

    function listenerMyEvent(ev: CustomEvent<{ uf: string }>) {
        alert(ev.detail.uf);
    }

    function cepMask(node: HTMLInputElement) {
        const listener = () => {
            node.value = adicionarMascara(node.value);
        };

        node.addEventListener("input", listener);

        return {
            destroy: () => {
                removeEventListener("input", listener);
            },
        };
    }

    function adicionarMascara(valor: string) {
        return valor.replace(/\D+/, "").replace(/(\d{5})(\d+)$/g, "$1-$2");
    }
</script>

<svelte:head>
    <title>Svelte teste - CEP</title>
</svelte:head>

<h1 class="text-3xl">
    {data.title}

    {#if cep}
        - {cep}
    {/if}
</h1>

<input
    type="text"
    inputmode="numeric"
    placeholder="CEP"
    maxlength="9"
    class="mt-1 rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
    bind:value={cep}
    on:input={findCEP}
    use:autoFocusCep={{ timeout: 10 }}
    use:cepMask
/>

{#if address}
    <div in:fly={flyOptions}>
        <Address {address} on:myEvent={listenerMyEvent} --mt-4="teste" />
    </div>
{/if}

<br />
<br />

<Button onClicked={(t) => console.log("clicou", t)}>Teste</Button>

<Button2 on:click={() => console.log("botão 2")}>Teste 2</Button2>
