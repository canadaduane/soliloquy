<script lang="ts">
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  import IoIosInformationCircleOutline from "svelte-icons/io/IoIosInformationCircleOutline.svelte";
  import IoIosArrowForward from "svelte-icons/io/IoIosArrowForward.svelte";

  import Icon from "../kit/Icon.svelte";
  import Button from "../kit/Button.svelte";

  const dispatch = createEventDispatcher();

  let moreInfo = false;
</script>

<s-container>
  <s-image />
  <s-title>Soliloquy</s-title>
  <s-subtitle> Give voice to every aspect of your intelligence </s-subtitle>
  <s-begin>
    <Button on:click={() => dispatch("begin")}>
      Begin
      <s-arrow>
        <Icon size={18}>
          <IoIosArrowForward />
        </Icon>
      </s-arrow>
    </Button>
  </s-begin>
  {#if moreInfo}
    <s-info transition:slide|local>
      <s-info-heading>What is this?</s-info-heading>
      <s-info-paragraph>
        <p>
          Soliloquy is a chat app designed to help you <em>
            explore dialog between two (or more) imaginary characters.
          </em>
        </p>

        <p>
          Perhaps like the ancient Greek philosophers, you want to more fully
          appreciate different sides of an argument; or as a modern reflection,
          you want to inquire further into complex, sometimes tentative
          positions within your psyche.
        </p>

        <p>
          Soliloquy lets you create pairs, or groups of "people" that can be
          stored as a set. You can recall any set to the stage, where you have
          the opportunity to begin a conversation.
        </p>

        <p>
          <em>Everything is stored locally, on your device.</em> The app never connects
          to the internet. You can save conversations, or delete them for privacy.
          It's up to you.
        </p>

        <p>By Duane Johnson and Rella Johnson &copy; 2022</p>
      </s-info-paragraph>
    </s-info>
  {/if}
  <s-footer>
    <Button style="none" on:click={() => (moreInfo = !moreInfo)}>
      <s-icon>
        <IoIosInformationCircleOutline />
      </s-icon>
      Learn more
    </Button>
  </s-footer>
</s-container>

<style>
  s-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0 90px;
    justify-content: center;
    padding-bottom: 60px;
  }
  s-container > * {
    flex-shrink: 0;
  }
  s-image {
    display: block;
    width: 120px;
    height: 120px;
    background-image: url("/assets/soliloquy.png");
    background-size: 120px 120px;
    background-position: center;
  }

  s-title {
    font-size: x-large;
    font-weight: bold;
    margin: 1rem;
  }

  s-subtitle {
    display: flex;
    align-items: center;

    font-size: large;
    font-weight: 100;
    color: #ccc;

    margin-bottom: 6px;
  }

  s-icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  s-begin {
    display: block;
    margin-top: 12px;
  }

  s-begin s-arrow {
    display: flex;
    padding: 2px 0px 2px 4px;
  }

  s-footer {
    position: fixed;
    bottom: 0;

    /* Solid bg in case it's a short window */
    background-color: var(--bg1);
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  s-info {
    display: block;
  }
  s-info-heading {
    display: block;
    font-size: large;
    color: white;
    align-self: flex-start;
    margin-top: 16px;
  }
  s-info-paragraph {
    display: block;
    margin: 12px 0 24px 0;
    font-size: medium;
    font-weight: 100;
    color: #ccc;
    line-height: 22px;
  }
</style>
