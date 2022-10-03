<button on:click>
  <slot />
</button>

<style>
  button {
    all: unset;
    display: flex;
    align-items: center;
    border-radius: 32px;

    padding: 8px 16px;
    margin: 12px;

    background-color: #fe5f88;
    color: white;

    font-size: medium;

    cursor: pointer;
  }

  button:hover {
    background-color: #c7446c;
    color: #ddd;
  }
</style>
