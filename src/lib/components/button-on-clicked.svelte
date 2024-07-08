<script lang="ts">
    export let onClicked: (teste: string) => void = () => {};
</script>

<button on:click={() => onClicked('oi')}>
    <slot />
</button>
