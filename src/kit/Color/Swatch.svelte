<script lang="ts">
  export let color: string;
</script>

<s-swatch role="button" on:click>
  <s-color title={color.toUpperCase()} tabindex="0" style="--color: {color}" />
</s-swatch>

<style>
  s-swatch {
    display: block;
    box-shadow: inset 0 0 2px 2px white;
    border-radius: 6px;
  }

  s-color {
    display: block;
    background: var(--color);
    height: 30px;
    width: 30px;
    cursor: pointer;
    outline: currentcolor none medium;
    border-radius: 4px;
  }
</style>
