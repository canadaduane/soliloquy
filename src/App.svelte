<script lang="ts">
  import Title from "./pages/Title.svelte";
  import Perspective from "./pages/Perspective.svelte";

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
    <Perspective />
  {/if}
</main>

<svelte:window on:keydown={onKeypress} />

<style>
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
