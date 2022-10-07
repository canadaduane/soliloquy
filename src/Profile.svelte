<script lang="ts">
  import type { Character } from "./characters";
  // import { Color } from "colorjs.io";

  export let character: Character;

  function pickColor(character: Character) {
    // TODO: pick color based on character attributes, e.g. name
    return character.color ?? "#fff";
  }


  // Design cues:
  // https://search.muz.li/Yzc4ZmJmMDBl?utm_source=muz.li-insp
</script>

<s-profile style="--bg: {character.color}">
  <s-thumbnail>
    {#if character.image}
      <img src={character.image} alt="profile pic" />
    {:else}
      <s-bg style="--bg: {pickColor(character)}" />
    {/if}
  </s-thumbnail>
  <s-name> {character.name} </s-name>
  <s-details>{character.details}</s-details>
</s-profile>

<style>
  s-profile {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    border-radius: 12px;
    background-color: var(--bg);
    padding: 18px;
    margin: 6px;
  }

  s-name {
    display: block;
    font-size: medium;
    font-weight: normal;
    margin-top: 12px;
  }

  s-details {
    display: block;
    font-size: small;
    font-weight: 100;
    margin-top: 4px;
  }

  s-thumbnail {
    display: block;
    width: 100px;
    height: 100px;
    border: 2px solid #333;
    border-radius: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }

  s-bg {
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--bg);
  }
</style>
