<script lang="ts">
  import { cleanHtml } from "~/utils/cleanHtml";
  import { highContrastColor } from "~/utils/highContrastColor";

  export let name: string;
  export let color: string;
  export let image: string;
  export let side: "left" | "right" = "left";

  let fgColor;

  $: fgColor = highContrastColor(color);
</script>

<s-message
  class:right={side === "right"}
  style="--bg: {color}; --fg: {fgColor}"
>
  {#if image}
    <s-photo>
      <img src={image} alt="{name} persona" />
    </s-photo>
  {/if}
  <s-container>
    <who>{@html cleanHtml(name)}</who>
    <content>
      <slot />
    </content>
  </s-container>
</s-message>

<style>
  s-message {
    display: flex;

    align-self: flex-start;

    color: var(--fg);
  }

  s-message :global(a),
  s-message :global(a:visited) {
    color: cornflowerblue;
  }

  s-message.right {
    align-self: flex-end;
    text-align: left;
  }

  .right s-container {
    border-radius: 9px 9px 0 9px;
  }

  who {
    font-weight: bold;
  }

  .right who {
    text-align: right;
  }

  content {
    display: block;
    margin-top: 4px;
  }

  s-container {
    display: block;

    background-color: var(--bg);
    border-radius: 9px 9px 9px 0;

    padding: 6px 10px;
    margin: 3px;
  }

  s-photo {
    display: block;
    flex-shrink: 0;

    align-self: flex-end;

    width: 24px;
    height: 24px;
    border: 1px solid white;
    border-radius: 100%;
    overflow: hidden;

    margin: 0 2px 3px 5px;
  }

  .right s-photo {
    order: 1;
    margin: 0 5px 3px 2px;
  }

  s-photo img {
    object-fit: cover;
    width: 24px;
    height: 24px;
  }
</style>
