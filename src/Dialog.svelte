<script lang="ts">
  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  import { characters, type Character } from "./characters";

  import Button from "./Button.svelte";
  import Icon from "./Icon.svelte";
  import Chat from "./Chat.svelte";
  import Profile from "./Profile.svelte";
  import PopTest from "./PopTest.svelte";
  // import Pick from "./Color/Pick.svelte";

  function addCharacter() {
    const newCharacter: Character = {
      name: "New Character",
      color: "#fff",
      image: null,
      details: "Leader",
    };
    $characters = [...$characters, newCharacter];
  }
</script>

<s-container>
  <!-- <s-timeline> t</s-timeline> -->
  <s-dialog>
      <!-- <Pick /> -->
    <PopTest />

    <s-characters-offstage>
      {#each $characters as character, i}
        <Profile {character} />
      {/each}
    </s-characters-offstage>

    <s-buttons>
      <Button on:click={addCharacter}>
        <s-plus>
          <Icon size={18}>
            <IoIosAdd />
          </Icon>
        </s-plus>
        Add Character
      </Button>
    </s-buttons>
  </s-dialog>
</s-container>

<style>
  s-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  /* s-timeline {
    display: block;
    width: 60px;
    margin: 0 8px;
    flex-grow: 0;
  } */

  s-dialog {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  s-characters-offstage {
    display: flex;
    flex-direction: row;
  }
  /* s-plus {
    display: flex;
    padding: 2px 4px 2px 0px;
  }

  s-characters {
    overflow: auto;
  }

  s-character {
  } */
</style>
