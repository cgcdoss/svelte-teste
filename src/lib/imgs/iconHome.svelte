<!-- Duas formas de usar props nesse componente -->
<!-- Poderia usar também o $$restProps -->
<!-- Porém o uso não recomendado, pois é difícil para o Svelte otimizar, mas é útil em casos raros. -->
<!-- https://svelte.dev/docs/basic-markup#attributes-and-props -->

<script lang="ts">
  export let color = "currentColor";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width="48"
  height="48"
  viewBox="0 -960 960 960"
  class={$$props.class}
  ><path
    d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"
    fill={color}
  /></svg
>
