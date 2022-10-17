<script lang="ts">
  import { cleanHtml } from "~/utils/cleanHtml";

  export let name: string;
  export let content: string;
  export let color: string;
</script>

<s-message>
  <id-circle style="background-color:{color}" />
  <container>
    <who>{@html cleanHtml(name)}</who>
    <content>{@html cleanHtml(content)}</content>
  </container>
</s-message>

<style>
  s-message {
    color: #333;
    background-color: #eee;

    border-radius: 9px 9px 9px 0;

    padding: 6px 10px;
    margin: 3px;
  }

  s-message :global(a),
  s-message :global(a:visited) {
    color: cornflowerblue;
  }

  who {
    font-weight: bold;
  }

  content {
    display: block;
    margin-top: 4px;
  }

  id-circle {
    display: block;
    flex-shrink: 0;
    float: right;

    width: 16px;
    height: 16px;
    border: 2px solid white;
    border-radius: 100%;
    margin-left: 0px;
    margin-right: 0px;
  }
</style>
