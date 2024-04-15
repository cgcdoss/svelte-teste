<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import Error from "$lib/components/error.svelte";
  import Header from "$lib/components/header.svelte";
  import Loading from "$lib/components/loading.svelte";
  import { loading } from "$lib/store";
  import { fly } from "svelte/transition";
  import "../app.pcss";

  // browser não é mais necessário devido ao ssr=false
  // Interceptando requisições via window.fetch
  if (browser) {
    const originalFetch = window.fetch;
    window.fetch = async (
      input: RequestInfo | URL,
      config: RequestInit | undefined,
      skipLoading = false
    ) => {
      // request interceptor here
      if (!skipLoading) loading.set(true);

      const response = await originalFetch(input, config);

      // response interceptor here
      if (!skipLoading) loading.set(false);

      return response;
    };
  }
</script>

<svelte:head>
  <meta name="theme-color" content="#356169" />
</svelte:head>

<Header />
<Error />
<Loading />

{#key $page.url.pathname}
  <main class="container mx-auto px-8 mt-6" in:fly={{ y: 200, delay: 200 }}>
    <slot />
  </main>
{/key}
