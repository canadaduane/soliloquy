<script lang="ts">
  import type { Character } from "~/types";

  import { createEventDispatcher } from "svelte";

  import { selectedCharacters } from "~/stores/selectedCharacters";
  import { characters } from "~/stores/characters";
  import { me } from "~/stores/me";

  import Persona from "./Persona.svelte";

  const dispatch = createEventDispatcher();

  const chooseCharacter = (character: Character) => () => {
    $me = character;
    dispatch("chosen", character);
  };

  const removeCharacterFromStage = (character: Character) => () => {
    character.isSelected = false;

    if ($me === character) {
      // Select the next available character as "me"
      if ($selectedCharacters.length > 1) {
        for (let selChar of $selectedCharacters) {
          if (character !== selChar) {
            $me = selChar;
            break;
          }
        }
      } else {
        $me = null;
      }
    }

    $characters = $characters;
  };
</script>

<s-stage>
  {#each $selectedCharacters as character (character.name)}
    <Persona
      {character}
      size="small"
      isSelected={character === $me}
      on:click={chooseCharacter(character)}
      on:close={removeCharacterFromStage(character)}
    />
  {/each}
</s-stage>

<style>
  s-stage {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
  }
</style>
