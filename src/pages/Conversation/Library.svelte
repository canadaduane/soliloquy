<script lang="ts">
  import type { Character } from "../../types";

  import { createEventDispatcher } from "svelte";
  import IoIosClose from "svelte-icons/io/IoIosClose.svelte";

  import { characters, makeCharacter } from "../../stores/characters";
  import { me } from "../../stores/me";

  import Persona from "./Persona.svelte";
  import Title from "~/kit/Title.svelte";
  import Button from "~/kit/Button.svelte";
  import Icon from "~/kit/Icon.svelte";

  const dispatch = createEventDispatcher();

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
  <Title>Library</Title>
  <s-close>
    <Button style="none" on:click={() => dispatch("close")}>
      <Icon><IoIosClose /></Icon>
    </Button>
  </s-close>
  <s-container>
    <s-info>
      Click one or more personas to add or remove from the conversation.
    </s-info>
    <s-scroll>
      {#each $characters as character (character.name)}
        <Persona {character} on:click={clickPersona(character)} />
      {/each}
      <Persona character={plusCharacter} on:click={addCharacter} />
    </s-scroll>
  </s-container>
</s-library>

<style>
  s-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 46px);
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

  s-library {
    position: relative;
  }

  s-close {
    position: absolute;
    top: -45px;
  }

  s-info {
    color: var(--fg1);
    display: block;
    padding: 8px 32px 24px 32px;
    text-align: center;
  }
</style>
