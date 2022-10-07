<script lang="ts">
  export let color: string;
  // #FF6900
</script>

<!-- 

  https://svelte-awesome-color-picker.vercel.app/
  http://casesandberg.github.io/react-color/
  https://github.com/sseemayer/svelte-colorpick
  https://bottosson.github.io/posts/oklab/


 -->
<s-swatch>
  <s-color title={color.toUpperCase()} tabindex="0" style="--color: {color}" />
</s-swatch>

<style>
  s-swatch {
    display: block;
  }

  s-color {
    display: block;
    background: var(--color);
    height: 30px;
    width: 30px;
    cursor: pointer;
    outline: currentcolor none medium;
    border-radius: 4px;
    margin: 0px 6px 6px 0px;
  }
</style>
