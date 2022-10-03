<script lang="ts">
  export let size = 32;
</script>

<div style="--size: {size}px">
  <slot />
</div>

<style>
  div {
    width: var(--size);
    height: var(--size);
  }
</style>
