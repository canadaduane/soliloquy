<script lang="ts">
  import { messages } from "~/stores/messages";
  import { me } from "~/stores/me";

  import Message from "./Message.svelte";

  let outerEl;

  function scrollToBottom(_messages, outerEl) {
    if (outerEl) {
      setTimeout(() => {
        outerEl.scrollTop = outerEl.scrollHeight;
      }, 0);
    }
  }

  // Automatically scroll to the bottom whenever a message is added
  $: scrollToBottom($messages, outerEl);
</script>

<s-history bind:this={outerEl}>
  {#if $messages.length === 0}
    <note>Empty chat history</note>
  {:else if $me}
    <s-scrollable>
      {#each $messages as message}
        <Message
          name={message.persona.name}
          color={message.persona.color}
          image={message.persona.image}
          side={message.persona.id === $me.id ? "right" : "left"}
        >
          {@html message.content}
        </Message>
      {/each}
    </s-scrollable>
  {/if}
</s-history>

<style>
  s-history {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    height: calc(100% - 52px);
    margin-bottom: 60px;

    overflow-y: auto;
  }

  s-scrollable {
    display: flex;
    flex-direction: column;
  }

  note {
    display: flex;
    justify-content: center;
    margin: 16px;
    color: #888;
  }
</style>
