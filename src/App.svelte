<script lang="ts">
  import type { Page, Character } from "./types";

  import TitlePage from "./pages/TitlePage/View.svelte";
  import Conversation from "./pages/Conversation/View.svelte";
  import Casting from "./pages/Casting/View.svelte";

  let page: Page = "title";
  let castingCharacter: Character;
</script>

{#if page === "title"}
  <TitlePage on:begin={() => (page = "conversation")} />
{:else if page === "conversation"}
  <Conversation on:return={() => (page = "title")} />
{:else if page === "casting"}
  <Casting character={castingCharacter} />
{/if}
