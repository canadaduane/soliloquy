<script lang="ts">
  import { slide } from "svelte/transition";
  import IoIosArrowRoundBack from "svelte-icons/io/IoIosArrowRoundBack.svelte";

  import Button from "~/kit/Button.svelte";
</script>

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
      appreciate different sides of an argument; or as a modern reflection, you
      want to inquire further into complex, sometimes tentative positions within
      your psyche.
    </p>

    <p>
      Soliloquy lets you create groups of "personas" (characters) that can be
      part of a conversation. You can recall any group to the stage, where you
      have the opportunity to begin or continue a conversation.
    </p>

    <p>
      <em>Everything is stored locally, on your device.</em> The app never connects
      to the internet. You can save conversations, or delete them for privacy. It's
      up to you.
    </p>

    <s-copyright>
      <a href="https://github.com/canadaduane/soliloquy">Soliloquy</a> is open
      source software&mdash;see the
      <a href="https://github.com/canadaduane/soliloquy/blob/main/LICENSE">
        MIT License.
      </a>
      <br /> Concept and Design by Duane Johnson and Rella Johnson &copy; 2022
    </s-copyright>
  </s-info-paragraph>

  <s-close>
    <Button on:click>
      <s-icon>
        <IoIosArrowRoundBack />
      </s-icon>
      Back
    </Button>
  </s-close>
</s-info>

<style>
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

  s-copyright {
    display: block;
    padding: 12px;
    border: 1px solid var(--red);
    border-radius: 8px;
    text-align: center;
    margin-top: 24px;
  }

  s-close {
    display: flex;
    justify-content: center;
  }

  s-icon {
    display: block;
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
</style>
