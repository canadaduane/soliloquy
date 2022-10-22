<script lang="ts">
  import type { Character } from "src/types";

  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  import Color from "colorjs.io";

  export let character: Character;
  export let isSelected: boolean = undefined;

  let bgColor;
  $: bgColor = character.color ?? "#FF9999";

  let bgDarker;
  $: bgDarker = darkerColor(bgColor);

  let fgColor;
  $: fgColor = highContrastColor(bgColor);

  function highContrastColor(hexColor: string) {
    const color = new Color(hexColor);
    if (color.lch.l >= 60) return "#333";
    else return "#efefef";
  }

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
  transition:fly={{ opacity: 1, y: -160, easing: quintOut }}
  class:outlined={isSelected ?? character.isSelected}
  on:click
>
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

  s-thumbnail {
    display: block;
    width: 100px;
    height: 100px;
    border: 2px solid var(--color, white);
    border-radius: 100%;
    overflow: hidden;
    flex-shrink: 0;
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
</style>
