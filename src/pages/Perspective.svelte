<script lang="ts">
  import TopDrawer from "../kit/TopDrawer.svelte";
  import IoIosAdd from "svelte-icons/io/IoIosAdd.svelte";

  import { characters, type Character } from "../characters";

  import Button from "../kit/Button.svelte";
  import Icon from "../kit/Icon.svelte";
  import Profile from "../Profile.svelte";

  function addCharacter() {
    const newCharacter: Character = {
      name: "New Character",
      color: "#f9e",
      image: null,
      details: "Leader",
    };
    $characters = [...$characters, newCharacter];
  }
</script>

<s-container>
  <TopDrawer>
    <s-drawer>
      {#each $characters as character}
        <Profile {character} />
      {/each}
    </s-drawer>
  </TopDrawer>
</s-container>

<!-- <s-characters-offstage>
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
    </s-buttons> -->
<style>
  s-container {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }

  s-drawer {
    display: flex;
    flex-direction: row;
  }
</style>
