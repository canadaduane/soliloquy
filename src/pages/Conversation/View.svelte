<script lang="ts">
  import { me } from "~/stores/me";

  import Button from "~/kit/Button.svelte";
  import Title from "~/kit/Title.svelte";

  import History from "./History.svelte";
  import ChatInput from "./ChatInput.svelte";
  import Stage from "./Stage.svelte";
  import Library from "./Library.svelte";

  let libraryOpen = false;
  let chatInput;

  // Inspiring UIs:
  // https://i.pinimg.com/originals/92/e8/29/92e829bf34dd6f30b34136e8381ee696.png
  // https://cdn.dribbble.com/users/2369119/screenshots/10492819/media/22dab10553c050ec60987c101ef6b452.png
  // https://cdn.dribbble.com/users/870342/screenshots/6075713/whatsapp_dark_mode_home___chat_4x.jpg
</script>

<s-view>
  <s-panes class:open={libraryOpen} class:closed={!libraryOpen}>
    <s-pane>
      <Library on:close={() => (libraryOpen = false)} />
    </s-pane>

    <s-pane>
      <Title>In this Conversation</Title>
      <Stage on:chosen={() => chatInput?.focus()} />
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
          <ChatInput bind:this={chatInput} on:close />
        {:else}
          <s-no-persona>
            <p>Add one or more personas from the Library to begin chat</p>
          </s-no-persona>
        {/if}
      </s-chat>
    </s-pane>

    <s-pane>
      Hello!
      {$me?.description}
    </s-pane>
  </s-panes>
</s-view>

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
