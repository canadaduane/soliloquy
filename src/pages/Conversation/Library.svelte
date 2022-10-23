<script lang="ts">
  import type { Character } from "../../types";

  import { fly } from "svelte/transition";
  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  import { characters, makeCharacter } from "../../stores/characters";
  import { me } from "../../stores/me";

  import Icon from "../../kit/Icon.svelte";

  import Persona from "./Persona.svelte";

  const plusCharacter = makeCharacter({
    name: "Add Character",
  });

  function addCharacter() {
    const newCharacter: Character = {
      name: "Edit New Persona",
      color: "#f9e",
      image: null,
      description: null,
      isNew: true,
      isSelected: false,
    };
    $characters = [...$characters, newCharacter];
  }

  const clickPersona = (character: Character) => () => {
    character.isSelected = !character.isSelected;

    if (!$me) $me = character;

    // Notify svelte store that an item changed
    $characters = $characters;
  };
</script>

<s-library>
  <s-title>Persona Library</s-title>
  <s-container>
    <s-scroll>
      {#each $characters as character}
        <Persona {character} on:click={clickPersona(character)} />
      {/each}
      <Persona character={plusCharacter} on:click={addCharacter} />
    </s-scroll>
  </s-container>
</s-library>

<style>
  s-title {
    display: block;
    font-size: 18px;
    font-weight: bold;
    margin: 12px auto;
    text-align: center;
  }

  s-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    overflow-y: auto;
    margin: 0 12px;
  }

  s-scroll {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
