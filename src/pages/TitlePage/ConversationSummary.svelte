<script lang="ts">
  import type { Conversation } from "~/types";

  import ago from "s-ago";

  import { characters as personas } from "~/stores/characters";

  export let conversation: Conversation;

  function urlForPersona(personaId) {
    return $personas.find((persona) => persona.id === personaId)?.image;
  }
</script>

<button on:click>
  <s-personas>
    {#each conversation.personaIds.slice(0, 6) as personaId}
      <s-persona>
        <img src={urlForPersona(personaId)} alt="persona" />
      </s-persona>
    {/each}
  </s-personas>
  <div class="light">{ago(conversation.lastModifiedAt)}</div>
  <div>size: <b>{conversation.messageCount}</b> msgs</div>
</button>

<style>
  button {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 120px;
    height: 120px;

    background-color: var(--bg2);
    border: 2px solid var(--bg3);
    border-radius: 8px;

    margin: 0 6px;

    cursor: pointer;
  }
  button:focus {
    box-shadow: 0 0 2px 2px var(--fg2);
  }

  s-personas {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    max-height: 60px;
    padding: 4px;
  }

  s-persona {
    display: block;
    width: 32px;
    height: 32px;
    margin: 1px;
    border-radius: 100%;
    overflow: hidden;
  }

  s-persona img {
    object-fit: cover;
    width: 32px;
    height: 32px;
  }

  div {
    display: block;
    margin: 0 6px;
    color: var(--fg1);
    font-size: 12px;
    text-align: center;
  }
  div.light {
    color: var(--fg2);
  }
</style>
