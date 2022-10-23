<script lang="ts">
  export let use = (_) => {};
  export let buttonEl = null;
  export let style: "none" | "round" = "round";
</script>

<button
  class:none={style === "none"}
  on:click|stopPropagation
  bind:this={buttonEl}
  use:use
>
  <slot />
</button>

<style>
  button {
    all: unset;
    display: flex;
    align-items: center;
    border-radius: 32px;

    padding: 8px 16px;

    background-color: var(--red);
    color: var(--bg2);
    font-weight: bold;

    font-size: medium;

    cursor: pointer;
  }

  button:hover {
    background-color: var(--red-alt);
    color: var(--bg1);
  }

  button.none {
    background-color: transparent;
    color: var(--fg1);
    font-size: small;
    font-weight: normal;
  }
  button.none:hover {
    background-color: transparent;
    color: var(--fg2);
  }
</style>
