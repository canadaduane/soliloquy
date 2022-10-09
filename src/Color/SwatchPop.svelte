<script lang="ts">
  import ButtonPop from "../ButtonPop.svelte";
  import Pick from "./Pick.svelte";
  import Swatch from "./Swatch.svelte";

  export let color;

  let open = false;
  let customValue;

  function selectColor({ detail: newColor }) {
    color = newColor;
    open = false;
  }

  function onChange(newColor) {
    color = "#" + newColor;
  }

  $: customValue = color.replace(/^#/, "");
  $: onChange(customValue);
</script>

<s-swatch-pop>
  <ButtonPop bind:open>
    <!-- The clickable swatch that shows the color -->
    <div slot="button">
      <Swatch bind:color />
    </div>

    <!-- Popover allows user to pick a color -->
    <Pick on:select={selectColor} bind:customValue />
  </ButtonPop>
</s-swatch-pop>

<style>
  s-swatch-pop {
    display: block;
  }

  s-swatch-pop > :global(button) {
    all: unset;
    border: 2px solid transparent;
    border-radius: 5px;
  }
  s-swatch-pop > :global(button:hover) {
    all: unset;
    border: 2px solid #999;
    border-radius: 6px;
  }
</style>
