<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import { me } from "~/stores/me";
  import { selectedCharacters } from "~/stores/selectedCharacters";

  import Button from "~/kit/Button.svelte";
  import Title from "~/kit/Title.svelte";

  import History from "./History.svelte";
  import ChatInput from "./ChatInput.svelte";
  import Stage from "./Stage.svelte";
  import Library from "./Library.svelte";
  import Persona from "./Persona.svelte";

  const dispatch = createEventDispatcher();

  let libraryOpen = false;
  let chatInput;

  function nextCharacter(plus: number = 1) {
    let found = null;
    $selectedCharacters.forEach((character, i) => {
      if ($me === character) found = i;
    });
    if (found !== null) {
      let i = found + plus;
      if (i < 0) i += $selectedCharacters.length;
      $me = $selectedCharacters[i % $selectedCharacters.length];
    }
  }

  function onKey(event) {
    if (event.key === "Escape") {
      dispatch("return");
    }
  }
</script>

<s-view>
  <s-panes class:open={libraryOpen} class:closed={!libraryOpen}>
    <s-pane>
      <Library on:close={() => (libraryOpen = false)} />
    </s-pane>

    <s-pane>
      <Title>In this Conversation</Title>
      {#if $selectedCharacters.length > 0}
        <Stage on:chosen={() => chatInput?.focus()} />
      {:else}
        <s-empty-msg> No one, yet! </s-empty-msg>
      {/if}
      <s-add-button>
        <Button on:click={() => (libraryOpen = !libraryOpen)}>
          {#if libraryOpen}
            Close Library
          {:else}
            Add from Library
          {/if}
        </Button>
      </s-add-button>
    </s-pane>

    <s-pane style="width:300px">
      <s-chat>
        <History />
        {#if $me}
          <ChatInput
            bind:this={chatInput}
            on:close
            on:prev={() => nextCharacter(-1)}
            on:next={() => nextCharacter(1)}
          />
        {:else}
          <s-no-persona>
            <p>Add one or more personas from the Library to begin chat</p>
          </s-no-persona>
        {/if}
      </s-chat>
    </s-pane>

    <s-pane>
      <s-me>
        {#if $me}
          <Persona character={$me} />
          <s-desc>
            {$me.description}
          </s-desc>
        {:else}
          <s-empty-msg> No persona selected. </s-empty-msg>
        {/if}
      </s-me>
    </s-pane>
  </s-panes>
</s-view>

<svelte:window on:keypress={onKey} />

<style>
  s-chat {
    display: block;
    position: relative;
    height: calc(100vh - 28px);
    border: 2px solid var(--bg3);
    margin: 12px 0;
    border-radius: 18px;
    overflow: hidden;
  }

  s-view {
    display: block;
    overflow: hidden;
    width: 100%;
  }
  s-panes {
    display: flex;
    width: 100%;
  }

  s-pane {
    display: block;
    width: calc(calc(100% - 300px) / 2);
    flex-shrink: 0;
    height: 100%;
  }

  s-no-persona {
    display: block;
    text-align: center;

    position: absolute;
    bottom: 12px;
    width: 300px;
  }
  s-no-persona p {
    padding-left: 16px;
    padding-right: 16px;
  }

  s-add-button {
    display: flex;
    justify-content: center;
    margin: 12px;
  }

  s-empty-msg {
    display: block;
    text-align: center;
    color: var(--fg1);
    margin: 24px 0;
  }

  s-me {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: calc(100vh - 36px);
    padding-top: 36px;
  }

  s-desc {
    display: block;
    color: var(--fg2);
    padding: 8px 12px;
  }

  .open {
    transform: translateX(0);
    /* margin-left: 0%;
    transition: margin-left 0.35s ease; */
    transition: transform 0.35s ease;
  }
  .closed {
    transform: translateX(calc(calc(100% - 300px) / -2));
    /* margin-left: -33.33%;
    transition: margin-left 0.35s ease; */
    transition: transform 0.35s ease;
  }
</style>
