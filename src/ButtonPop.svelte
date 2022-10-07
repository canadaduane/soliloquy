<script lang="ts">
  import { writable, type Writable } from "svelte/store";
  import {
    createFloatingActions,
    offset,
    flip,
    shift,
    arrow,
  } from "./Floating";

  import Button from "./Button.svelte";

  let popEl, buttonEl;
  let popped: boolean = false;

  let arrowRef: Writable<HTMLElement> = writable();

  const [floatingRef, floatingContent] = createFloatingActions({
    strategy: "absolute",
    placement: "top",
    middleware: [
      offset(8),
      flip(),
      shift({ padding: 12 }),
      arrow({ element: arrowRef }),
    ],
    onComputed({ placement, middlewareData }) {
      const { x, y } = middlewareData.arrow;
      const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
      }[placement.split("-")[0]];

      Object.assign($arrowRef.style, {
        left: x != null ? `${x}px` : "",
        top: y != null ? `${y}px` : "",
        [staticSide]: "-8px",
      });
    },
  });
</script>

<Button use={floatingRef} on:click={() => (popped = !popped)} bind:buttonEl>
  <slot name="button">Open</slot>
</Button>

{#if popped}
  <s-pop-content use:floatingContent bind:this={popEl}>
    <slot />
    <div class="arrow" bind:this={$arrowRef} />
  </s-pop-content>
{/if}

<svelte:window
  on:click={(event) => {
    if (!popped) return;
    if (!popEl.contains(event.target) && !buttonEl.contains(event.target)) {
      popped = false;
    }
  }}
/>

<style>
  s-pop-content {
    position: absolute;
    display: block;
    background-color: #555;
    color: white;
    border-radius: 6px;
    font-size: 13px;
    padding: 8px;
  }

  .arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12px 12px 12px;
    border-color: transparent transparent #555 transparent;
  }
</style>
