<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";

  import { messages } from "~/stores/messages";
  import { me } from "~/stores/me";

  const dispatch = createEventDispatcher();

  let messageEl;
  let message;

  function addMessage(text) {
    if (text.match(/^\s*$/)) {
      dispatch("close");
    } else {
      // add message
      messages.update((msgs) => {
        const message = {
          character: $me,
          content: text,
          timestamp: new Date(),
        };
        console.log("message", JSON.stringify(message));
        msgs.push(message);
        return msgs;
      });
    }
  }

  function sendMessage() {
    console.log(JSON.stringify(message));
    const htmlMsg = message.replace("\n", "<br/>");
    addMessage(htmlMsg);
    message = "";
  }

  function onKeydown(event) {
    if (event.key === "Escape") {
      dispatch("close");
    } else if (
      (event.key === "Enter" || event.key === "Return") &&
      !event.shiftKey
    ) {
      sendMessage();
    }
  }

  onMount(() => {
    setTimeout(() => {
      messageEl.focus();
    }, 50);
  });
</script>

<r-chat-input>
  <r-message
    contenteditable
    on:keydown={onKeydown}
    bind:textContent={message}
    bind:this={messageEl}
  />
  <r-send on:click={sendMessage} role="button" />
</r-chat-input>

<style>
  r-chat-input {
    position: absolute;
    bottom: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    background-color: var(--bg2);
    border-radius: 4px;
    width: 100%;
  }

  r-message {
    display: block;
    align-self: center;

    font-size: 16px;
    line-height: 18px;
    min-height: 1em;
    max-height: 150px;
    width: 100%;

    padding: 4px 8px;

    overflow-y: auto;
    white-space: pre-line;
  }

  r-send {
    display: block;
    width: 48px;
    height: 48px;
    flex-shrink: 0;
    flex-grow: 0;

    background-color: var(--green-alt);
    color: var(--fg2);
  }
  r-send:hover {
    background-color: var(--green-alt);
    color: var(--fg1);
  }
</style>
