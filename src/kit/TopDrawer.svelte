<script lang="ts">
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  let open = false;
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    flex-direction: column;
  }

  s-content {
    display: block;
    background-color: #555;
  }

  s-content > div {
    padding: 8px 12px;
  }

  s-tab {
    display: block;
    background: #555;
    margin: 0 auto;
    padding: 0.625rem 2rem;
    position: relative;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    cursor: pointer;

    /* Fix flickering during slide animation */
    top: -1px;
    border-top: 1px solid #555;
  }

  s-tab:after,
  s-tab:before {
    content: "";
    height: 20px;
    width: 20px;
    background: #555;
    position: absolute;
    top: -1px;
    right: -20px;
    z-index: 1;
  }

  s-tab:before {
    right: auto;
    left: -20px;
  }

  s-tab span {
    color: #ccc;
  }

  s-tab span:after,
  s-tab span:before {
    content: "";
    height: 40px;
    width: 40px;
    background: #272727;
    position: absolute;
    top: 0;
    right: -40px;
    z-index: 2;
    border-radius: 50%;
  }

  s-tab span:before {
    right: auto;
    left: -40px;
  }

  /* s-tab {
    position: relative;

    display: block;
    margin: 0 auto;
    height: 20px;

    padding: 6px 4px 4px 4px;
    border-bottom: 1px solid #555;
  }
  s-tab::before {
    position: absolute;
    top: 10px;
    left: -20px;
    content: "";
    border-right: 1px solid #555;
    transform: skew(35deg);
    display: block;
    width: 20px;
    height: 20px;
    z-index: -1;
  } */
</style>
