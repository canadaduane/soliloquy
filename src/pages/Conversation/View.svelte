<script lang="ts">
  import { slide, fly } from "svelte/transition";

  import { selectedCharacters } from "~/stores/selectedCharacters";
  import { me } from "~/stores/me";

  import History from "./History.svelte";
  import ChatInput from "./ChatInput.svelte";
  import Persona from "./Persona.svelte";
  import Button from "~/kit/Button.svelte";
  import Library from "./Library.svelte";

  let libraryOpen = false;

  // Inspiring UIs:
  // https://i.pinimg.com/originals/92/e8/29/92e829bf34dd6f30b34136e8381ee696.png
  // https://cdn.dribbble.com/users/2369119/screenshots/10492819/media/22dab10553c050ec60987c101ef6b452.png
  // https://cdn.dribbble.com/users/870342/screenshots/6075713/whatsapp_dark_mode_home___chat_4x.jpg
</script>

<!-- <TopExpand /> -->

<s-view>
  <s-panes class:open={libraryOpen} class:closed={!libraryOpen}>
    <s-pane>
      <Library />
    </s-pane>

    <s-pane>
      <Button on:click={() => (libraryOpen = !libraryOpen)}>Library</Button>
      <s-stage>
        {#each $selectedCharacters as character}
          <Persona
            {character}
            isSelected={character === $me}
            on:click={() => ($me = character)}
          />
        {/each}
      </s-stage>
    </s-pane>

    <s-pane style="width:300px">
      <s-chat>
        <History />
        {#if $me}
          <ChatInput on:close />
        {:else}
          <s-no-persona> Choose a persona to begin</s-no-persona>
        {/if}
      </s-chat>
    </s-pane>

    <s-pane>
      Hello!
      {$me?.description}
    </s-pane>
  </s-panes>
</s-view>

<style global>
  .splitpanes.modern-theme .splitpanes__pane {
    background-color: var(--bg1);
  }
  .splitpanes.modern-theme .splitpanes__splitter {
    background-color: var(--bg2);
    position: relative;
  }
  .splitpanes.modern-theme .splitpanes__splitter:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    transition: opacity 0.4s;
    background-color: var(--blue);
    opacity: 0;
    z-index: 1;
  }
  .splitpanes.modern-theme .splitpanes__splitter:hover:before {
    opacity: 1;
  }
  .splitpanes.modern-theme .splitpanes__splitter.splitpanes__splitter__active {
    z-index: 2;
    /* Fix an issue of overlap fighting with a near hovered splitter */
  }
  .modern-theme.splitpanes--vertical > .splitpanes__splitter {
    border-left: none;
  }
  .modern-theme.splitpanes--vertical > .splitpanes__splitter:before {
    left: -3px;
    right: -3px;
    height: 100%;
    cursor: col-resize;
  }
  .modern-theme.splitpanes--horizontal > .splitpanes__splitter:before {
    top: -3px;
    bottom: -3px;
    width: 100%;
    cursor: row-resize;
  }

  s-chat {
    display: block;
    position: relative;
    height: 100%;
  }

  s-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  s-view {
    display: block;
    width: 100%;
  }
  s-panes {
    display: flex;
    width: 100%;
    overflow: hidden;
  }

  s-pane {
    display: block;
    width: calc(calc(100% - 300px) / 2);
    flex-shrink: 0;
    height: 100%;
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
