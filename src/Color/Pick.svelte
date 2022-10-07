<script lang="ts">
  import ButtonPop from "../ButtonPop.svelte";
  import HexInput from "./HexInput.svelte";
  import Swatch from "./Swatch.svelte";

  // export let x: number = null
  // export let y: number = null

  let picker: HTMLElement;

  // onMount(() => {
  //   const rect = picker.getBoundingClientRect()

  //   picker.style.left = `${rect.width/2}px`
  // });
</script>

<ButtonPop>
  <span slot="button">Color</span>
  <s-pick bind:this={picker}>
    <Swatch color="#FF6900" />
    <Swatch color="#FCB900" />
    <Swatch color="#7BDCB5" />
    <Swatch color="#00D084" />
    <Swatch color="#8ED1FC" />
    <Swatch color="#0693E3" />
    <Swatch color="#ABB8C3" />
    <Swatch color="#EB144C" />
    <Swatch color="#F78DA7" />
    <Swatch color="#9900EF" />
    <HexInput value="FFFFFF" />
  </s-pick>
</ButtonPop>

<style>
  s-pick {
    display: flex;
    flex-wrap: wrap;

    width: 252px;
    padding: 6px 0px 0px 6px;
  }
</style>
