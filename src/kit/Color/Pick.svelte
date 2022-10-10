<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import HexInput from "./HexInput.svelte";
  import Swatch from "./Swatch.svelte";

  export let customValue = "FFFFFF";

  const dispatch = createEventDispatcher();

  const colors = [
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#8ED1FC",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
    "#9900EF",
  ];

  let picker: HTMLElement;
</script>

<s-pick bind:this={picker}>
  {#each colors as color}
    <Swatch {color} on:click={() => dispatch("select", color)} />
  {/each}
  <HexInput bind:value={customValue} />
</s-pick>

<style>
  s-pick {
    display: flex;
    flex-wrap: wrap;

    width: 252px;
    padding: 6px 0px 0px 6px;
  }

  s-pick > :global(s-swatch) {
    margin: 0px 6px 6px 0px;
  }
</style>
