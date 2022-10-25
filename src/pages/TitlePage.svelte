<script lang="ts">
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import IoIosInformationCircleOutline from "svelte-icons/io/IoIosInformationCircleOutline.svelte";
  import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";
  import IoIosArrowRoundBack from "svelte-icons/io/IoIosArrowRoundBack.svelte";

  import { messages } from "~/stores/messages";
  import { selectedCharacters } from "~/stores/selectedCharacters";

  import Icon from "~/kit/Icon.svelte";
  import Button from "~/kit/Button.svelte";

  const dispatch = createEventDispatcher();

  let moreInfo = false;
  let exported = null;

  function exportConversation() {
    exported = JSON.stringify(
      {
        personas: $selectedCharacters,
        history: $messages.map((msg) => ({
          id: msg.character.id,
          ts: msg.timestamp,
          msg: msg.content,
        })),
      },
      null,
      2
    );
  }
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
    <Button on:click={() => dispatch("begin")}>
      Begin
      <s-arrow>
        <Icon size={18}>
          <IoIosArrowForward />
        </Icon>
      </s-arrow>
    </Button>
  </s-begin>

  {#if $messages.length > 0}
    <s-begin>
      <Button on:click={exportConversation}>Export Conversation</Button>
    </s-begin>
  {/if}

  {#if moreInfo}
    <s-info transition:slide|local>
      <s-info-heading>What is this?</s-info-heading>
      <s-info-paragraph>
        <p>
          Soliloquy is a chat app designed to help you <em>
            explore dialog between two (or more) imaginary characters.
          </em>
        </p>

        <p>
          Perhaps like the ancient Greek philosophers, you want to more fully
          appreciate different sides of an argument; or as a modern reflection,
          you want to inquire further into complex, sometimes tentative
          positions within your psyche.
        </p>

        <p>
          Soliloquy lets you create groups of "personas" (characters) that can
          be part of a conversation. You can recall any group to the stage,
          where you have the opportunity to begin or continue a conversation.
        </p>

        <p>
          <em>Everything is stored locally, on your device.</em> The app never connects
          to the internet. You can save conversations, or delete them for privacy.
          It's up to you.
        </p>

        <s-copyright>
          <a href="https://github.com/canadaduane/soliloquy">Soliloquy</a> is
          open source software&mdash;see the
          <a href="https://github.com/canadaduane/soliloquy/blob/main/LICENSE">
            MIT License.
          </a>
          <br /> Concept and Design by Duane Johnson and Rella Johnson &copy; 2022
        </s-copyright>
      </s-info-paragraph>

      <s-close>
        <Button on:click={() => (moreInfo = !moreInfo)}>
          <s-icon>
            <IoIosArrowRoundBack />
          </s-icon>
          Back
        </Button>
      </s-close>
    </s-info>
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

  s-copyright {
    display: block;
    padding: 12px;
    border: 1px solid var(--red);
    border-radius: 8px;
    text-align: center;
    margin-top: 24px;
  }

  s-close {
    display: flex;
    justify-content: center;
  }

  s-info {
    display: block;
  }
  s-info-heading {
    display: block;
    font-size: large;
    color: white;
    align-self: flex-start;
    margin-top: 16px;
  }
  s-info-paragraph {
    display: block;
    margin: 12px 0 24px 0;
    font-size: medium;
    font-weight: 100;
    color: #ccc;
    line-height: 22px;
  }
</style>
