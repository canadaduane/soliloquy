<script lang="ts">
  import History from "./History.svelte";
  import ChatInput from "./ChatInput.svelte";
  import TopExpand from "./TopExpand.svelte";

  // Inspiring UIs:
  // https://i.pinimg.com/originals/92/e8/29/92e829bf34dd6f30b34136e8381ee696.png
  // https://cdn.dribbble.com/users/2369119/screenshots/10492819/media/22dab10553c050ec60987c101ef6b452.png
  // https://cdn.dribbble.com/users/870342/screenshots/6075713/whatsapp_dark_mode_home___chat_4x.jpg
</script>

<TopExpand />

<s-conversation>
  <s-left>left</s-left>
  <s-middle>
    <History />
    <ChatInput on:close />
  </s-middle>
  <s-right>right</s-right>
</s-conversation>

<style>
  s-conversation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 60px;
    height: calc(100vh - 60px);
  }

  s-middle,
  s-left,
  s-right {
    margin: 6px;
    width: 300px;
    min-height: 240px;
  }

  s-middle {
    position: relative;

    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    flex-grow: 0;

    height: calc(100vh - 95px);
    max-height: 650px;

    border: 2px solid #1277d6;
    border-radius: 6px;
  }

  s-left {
    border: 1px solid red;
    border-radius: 6px;
  }

  s-right {
    border: 1px solid red;
    border-radius: 6px;
  }

  @media (max-width: 660px) {
    s-conversation {
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      height: auto;
    }

    s-left {
      order: 1;
    }

    s-right {
      order: 2;
    }
  }
</style>
