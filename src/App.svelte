<script lang="ts">
  import Title from "./Title.svelte";
  import Dialog from "./Dialog.svelte";

  let page: "title" | "dialog" = "title";

  function onKeypress(event) {
    console.log("key", event.key, event.ctrlKey);
    if (!event.ctrlKey) return;
    if (page === "title" && event.key === "ArrowRight") {
      page = "dialog";
    } else if (page === "dialog" && event.key === "ArrowLeft") {
      page = "title";
    }
  }
</script>

<main>
  {#if page === "title"}
    <Title on:begin={() => (page = "dialog")} />
  {:else if page === "dialog"}
    <Dialog />
  {/if}
</main>

<svelte:window on:keydown={onKeypress} />

<style>
  :global(html) {
    height: 100%;
    color: white;
    background-color: #272727;
  }

  :global(body) {
    margin: 0;
    height: 100%;
  }

  main {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    /* font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100%;
  }
</style>
