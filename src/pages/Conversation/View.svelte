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
  <s-left> left </s-left>
  <s-middle>
    <History />
    <ChatInput on:close />
  </s-middle>
  <s-right> right </s-right>
</s-conversation>

<style>
  s-conversation {
    display: flex;
    justify-content: center;

    position: absolute;
    top: 40px;
    left: 0;
    width: 100vw;
    height: calc(100vh - 40px);
  }

  s-middle {
    display: flex;
    flex-direction: column;
    width: 300px;
    flex-shrink: 0;
    flex-grow: 0;

    border: 2px solid #1277d6;
    border-radius: 6px;
    margin: 6px;
  }
</style>
