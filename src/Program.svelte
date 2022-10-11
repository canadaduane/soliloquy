<script lang="ts">
  import type { Page, Character } from "./types";

  import Title from "./pages/Title.svelte";
  import Conversation from "./pages/Conversation/View.svelte";
  import Casting from "./pages/Casting/View.svelte";

  let page: Page = "title";
  let castingCharacter: Character;
  let converseCharacter: Character;

  function toConversation({ detail }) {
    if (page != "conversation") page = "conversation";
    converseCharacter = detail.character;
  }

  function toCasting({ detail }) {
    if (page != "casting") page = "casting";
    castingCharacter = detail.character;
  }
</script>

{#if page === "title"}
  <Title on:begin={() => (page = "conversation")} />
{:else if page === "conversation"}
  <Conversation
    character={converseCharacter}
    on:toCasting={toCasting}
    on:toConversation={toConversation}
  />
{:else if page === "casting"}
  <Casting character={castingCharacter} />
{/if}
