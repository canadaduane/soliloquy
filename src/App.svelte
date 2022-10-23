<script lang="ts">
  import type { Page, Character } from "./types";

  import TitlePage from "./pages/TitlePage.svelte";
  import Conversation from "./pages/Conversation/View.svelte";
  import Casting from "./pages/Casting/View.svelte";

  import { me } from "~/stores/me";

  let page: Page = "title";
  let castingCharacter: Character;

  function toConversation({ detail }) {
    if (page != "conversation") page = "conversation";
    $me = detail.character;
  }

  function toCasting({ detail }) {
    if (page != "casting") page = "casting";
    castingCharacter = detail.character;
  }
</script>

{#if page === "title"}
  <TitlePage on:begin={() => (page = "conversation")} />
{:else if page === "conversation"}
  <Conversation on:toCasting={toCasting} on:toConversation={toConversation} />
{:else if page === "casting"}
  <Casting character={castingCharacter} />
{/if}
