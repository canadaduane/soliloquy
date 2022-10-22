<script lang="ts">
  import type { Character } from "../../types";

  import { createEventDispatcher } from "svelte";
  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  import { characters } from "../../stores/characters";

  import TopDrawer from "../../kit/TopDrawer.svelte";
  import Icon from "../../kit/Icon.svelte";

  import Persona from "./Persona.svelte";

  const dispatch = createEventDispatcher();

  function addCharacter() {
    const newCharacter: Character = {
      name: "Edit New Persona",
      color: "#f9e",
      image: null,
      details: null,
      isNew: true,
      isSelected: false,
    };
    $characters = [...$characters, newCharacter];
  }

  const clickPersona = (character: Character) => () => {
    // if (character.isNew) {
    //   dispatch("toCasting", { character });
    // } else {
    //   dispatch("toConversation", { character });
    // }

    character.isSelected = !character.isSelected;

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
