<script lang="ts">
  import type { Character } from "./characters";

  export let character: Character;
</script>

<s-chat>
  <s-history> {character.name} </s-history>
  <s-input>
    <input type="text" />
  </s-input>
</s-chat>

<style>
  s-chat {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 350px;
    border: 1px solid #555;
    border-radius: 24px;
  }
  s-history {
    display: block;
    flex-grow: 1;
  }
  s-input {
    display: block;
    flex-grow: 0;
  }
</style>
