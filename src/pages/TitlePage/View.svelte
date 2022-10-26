<script lang="ts">
  import type { Conversation } from "~/types";

  import { createEventDispatcher } from "svelte";

  import IoIosInformationCircleOutline from "svelte-icons/io/IoIosInformationCircleOutline.svelte";
  import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";

  import { messages } from "~/stores/messages";
  import { conversations } from "~/stores/conversations";
  import { currentConversationId } from "~/stores/currentConversationId";
  import { selectedCharacters } from "~/stores/selectedCharacters";

  import Icon from "~/kit/Icon.svelte";
  import Button from "~/kit/Button.svelte";

  import ConversationSummary from "./ConversationSummary.svelte";
  import MoreInfo from "./MoreInfo.svelte";
  import { loadConversation } from "~/utils/persistMessages";

  const dispatch = createEventDispatcher();

  let moreInfo = false;
  let exported = null;

  // function exportConversation() {
  //   exported = JSON.stringify(
  //     {
  //       personas: $selectedCharacters,
  //       history: $messages.map((msg) => ({
  //         id: msg.persona.id,
  //         ts: msg.timestamp,
  //         msg: msg.content,
  //       })),
  //     },
  //     null,
  //     2
  //   );
  // }

  const openConversation = (conversationId: string | null) => () => {
    loadConversation(conversationId);
    dispatch("begin");
  };
</script>

<s-container>
  {#if !exported}
    <s-image />
    <s-title>Soliloquy</s-title>
    <s-subtitle> Give voice to every aspect of your intelligence </s-subtitle>
  {:else}
    <s-title>Exported:</s-title>
    <s-export contenteditable>{exported}</s-export>
  {/if}

  <s-begin>
    <Button on:click={openConversation(null)}>
      {#if Object.keys($conversations).length > 0}
        New conversation
      {:else}
        Begin
      {/if}
      <s-arrow>
        <Icon size={18}>
          <IoIosArrowForward />
        </Icon>
      </s-arrow>
    </Button>
  </s-begin>
  {#if Object.keys($conversations).length > 0}
    <s-conversations>
      {#each Object.values($conversations) as conversation}
        <ConversationSummary
          {conversation}
          on:click={openConversation(conversation.id)}
        />
      {/each}
    </s-conversations>
  {/if}

  {#if moreInfo}
    <MoreInfo on:click={() => (moreInfo = !moreInfo)} />
  {:else}
    <s-footer>
      <Button style="none" on:click={() => (moreInfo = !moreInfo)}>
        <s-icon>
          <IoIosInformationCircleOutline />
        </s-icon>
        Learn more
      </Button>
    </s-footer>
  {/if}
</s-container>

<style>
  s-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    padding: 60px 90px;
    min-height: calc(100vh - 120px);
  }
  s-container > * {
    flex-shrink: 0;
  }
  s-image {
    display: block;
    width: 120px;
    height: 120px;
    background-image: url("/assets/soliloquy.png");
    background-size: 120px 120px;
    background-position: center;
  }

  s-title {
    font-size: x-large;
    font-weight: bold;
    margin: 1rem;
  }

  s-subtitle {
    display: flex;
    align-items: center;

    font-size: large;
    font-weight: 100;
    color: #ccc;

    margin-bottom: 6px;
  }

  s-icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  s-begin {
    display: block;
    margin-top: 12px;
  }

  s-begin s-arrow {
    display: flex;
    padding: 2px 0px 2px 4px;
  }

  s-export {
    display: block;
    font-family: monospace;
    max-height: 100px;
    width: 50vw;
    overflow-y: auto;
    margin: 12px 0;
    white-space: pre;
    border: 2px solid var(--fg0);
    border-radius: 6px;
  }

  s-footer {
    position: fixed;
    bottom: 0;

    /* Solid bg in case it's a short window */
    background-color: var(--bg1);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  s-conversations {
    display: flex;
    flex-wrap: wrap;
    margin: 16px;
  }
</style>
