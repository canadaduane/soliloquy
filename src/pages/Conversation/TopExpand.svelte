<script lang="ts">
  import type { Character } from "../../types";

  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  import { characters } from "../../stores/characters";
  import { me } from "../../stores/me";

  import TopDrawer from "../../kit/TopDrawer.svelte";
  import Icon from "../../kit/Icon.svelte";

  import Persona from "./Persona.svelte";

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

<s-top>
  <TopDrawer>
    <s-drawer>
      {#each $characters as character}
        <Persona {character} on:click={clickPersona(character)} />
      {/each}
      <s-add-button role="button" on:click={addCharacter}>
        <Icon size={48}>
          <IoIosAdd />
        </Icon>
      </s-add-button>
    </s-drawer>
  </TopDrawer>
</s-top>

<style>
  s-top {
    display: flex;
    flex-direction: row;
    width: 100vw;
  }

  s-drawer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;

    max-height: 436px;
    overflow-y: scroll;
  }

  s-add-button {
    display: block;
    cursor: pointer;
  }

  s-add-button:hover {
    background-color: #777;
    border-radius: 6px;
  }
</style>
