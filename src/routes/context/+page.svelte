<script lang="ts">
  import { setContext } from "svelte";
  import Child from "./Child.svelte";
  import Parent from "./Parent.svelte";

  function alertar() {
    alert("Olá, mundo");
  }

  setContext("usuario", { name: "Fulano" });
  setContext("alertar", alertar);
</script>

<Parent>
  <Child />
</Parent>
