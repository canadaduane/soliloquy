<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let open = false;

  // Possible alternative sliding mechanism: https://svelte.dev/repl/03f0be0c4dc54eb4af5a168f644f5c31?version=3.19.1
</script>

<s-top-drawer>
  {#if open}
    <s-content transition:slide={{ easing: quintOut }}>
      <div>
        <slot />
      </div>
    </s-content>
  {/if}
  <s-tab role="button" on:click={() => (open = !open)}>
    <span>Personas</span>
  </s-tab>
</s-top-drawer>

<style>
  s-top-drawer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;

    display: flex;
    flex-direction: column;
  }

  s-content {
    display: block;
    background-color: #555;
    border-bottom: 1px solid black;
  }

  s-content > div {
    padding: 8px 12px;
  }

  s-tab {
    display: block;
    margin: 0 auto;
    padding: 0.625rem 3rem;
    position: relative;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;

    /* Fix flickering during slide animation */
    top: -1px;
    border-top: 1px solid #555;
    background: #333;
  }

  s-tab::before {
    background: #555;
    content: "";
    position: absolute;
    left: 1px;
    bottom: 1px;
    right: 1px;
    height: 100%;
    display: block;
    z-index: -1;
  }

  s-tab,
  s-tab::before {
    /* https://www.cssportal.com/css-clip-path-generator/ */
    clip-path: polygon(
      4% 0%,
      4% 24%,
      6% 26%,
      8% 28%,
      10% 38%,
      13% 70%,
      15% 82%,
      17% 89%,
      19% 93%,
      22% 95%,
      33% 98%,
      43% 100%,
      57% 100%,
      67% 98%,
      78% 95%,
      81% 93%,
      83% 89%,
      85% 82%,
      87% 70%,
      90% 38%,
      92% 28%,
      94% 26%,
      96% 24%,
      96% 0%
    );
  }

  s-tab span {
    color: #333;
    text-shadow: 0px -1px 0px #222, 0px 0.5px 0px #888;
  }
</style>
