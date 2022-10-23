<script lang="ts">
  import type { Character } from "src/types";

  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { createEventDispatcher } from "svelte";

  import Color from "colorjs.io";
  import IoIosClose from "svelte-icons/io/IoIosClose.svelte";

  import { highContrastColor } from "~/utils/highContrastColor";
  import Button from "~/kit/Button.svelte";
  import Icon from "~/kit/Icon.svelte";

  export let character: Character;
  export let size: "small" | "normal" = "normal";
  export let isSelected: boolean = undefined;
  export let showClose: boolean = false;

  const dispatch = createEventDispatcher();

  let bgColor;
  $: bgColor = character.color ?? "#FF9999";

  let bgDarker;
  $: bgDarker = darkerColor(bgColor);

  let fgColor;
  $: fgColor = highContrastColor(bgColor);

  function darkerColor(hexColor: string) {
    const color = new Color(hexColor);
    color.lch.l *= 0.8;
    return color.toString();
  }

  // Design cues:
  // https://search.muz.li/Yzc4ZmJmMDBl?utm_source=muz.li-insp
</script>

<s-profile
  style="--bg: {bgColor}; --bg-darker: {bgDarker}; --color: {fgColor}"
  in:fly={{ opacity: 1, y: -160, easing: quintOut }}
  class:outlined={isSelected ?? character.isSelected}
  class:small={size === "small"}
  on:click
>
  {#if showClose}
    <s-close>
      <Button style="none" on:click={() => dispatch("close")}>
        <Icon><IoIosClose /></Icon>
      </Button>
    </s-close>
  {/if}
  <s-thumbnail>
    {#if character.image}
      <img src={character.image} alt="profile pic" />
    {:else}
      <s-bg />
    {/if}
  </s-thumbnail>
  <s-name>
    {character.name}
  </s-name>
</s-profile>

<style>
  s-profile {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 120px;
    height: 160px;

    border: 1px solid transparent;

    border-radius: 12px;
    background-color: var(--bg);
    padding: 18px;
    margin: 6px;

    cursor: pointer;
  }
  s-profile.small {
    width: 60px;
    height: 80px;
    border-radius: 6px;
    padding-top: 12px;
  }

  s-profile.outlined {
    border: 1px solid #333;
    box-shadow: 0px 0px 4px 4px white;
  }

  s-name {
    display: block;
    font-size: medium;
    font-weight: normal;
    margin-top: 12px;
    color: var(--color, inherit);
  }
  .small s-name {
    margin-top: 8px;
  }

  s-thumbnail {
    display: block;
    width: 100px;
    height: 100px;
    border: 2px solid var(--color, white);
    border-radius: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .small s-thumbnail {
    width: 50px;
    height: 50px;
    border-width: 1px;
  }

  s-thumbnail > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  s-bg {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--bg-darker);
  }

  s-close {
    position: absolute;
    top: -6px;
    right: -14px;
  }
  s-close :global(button) {
    color: var(--bg2) !important;
  }
  .small s-close {
    top: -12px;
    right: -20px;
  }
</style>
