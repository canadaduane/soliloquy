<script lang="ts">
  export let size = 32;
</script>

<button on:click style="--size: {size}px">
  <slot />
</button>

<style>
  button {
    all: unset;

    width: var(--size);
    height: var(--size);

    border: 8px solid transparent;
    border-radius: 100%;

    cursor: pointer;
  }
</style>
