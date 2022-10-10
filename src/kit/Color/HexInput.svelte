<script lang="ts">
  export let value: string;
</script>

<s-input>
  <div>#</div>
  <input bind:value on:keypress />
</s-input>

<style>
  div {
    background: rgb(240, 240, 240);
    height: 30px;
    width: 30px;
    border-radius: 4px 0px 0px 4px;
    float: left;
    color: rgb(152, 161, 164);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 100px;
    font-size: 14px;
    color: rgb(102, 102, 102);
    border: 0px none;
    outline: currentcolor none medium;
    height: 28px;
    box-shadow: rgb(240, 240, 240) 0px 0px 0px 1px inset;
    border-radius: 0px 4px 4px 0px;
    padding-left: 8px;
  }
</style>
