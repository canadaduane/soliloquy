<script lang="ts">
  export let imageUrl: string = null;
</script>

<s-profile-pic>
  {#if imageUrl}
    <img src={imageUrl} alt="profile pic" />
  {/if}
</s-profile-pic>

<style>
  s-profile-pic {
    display: block;
    width: 200px;
    height: 200px;

    border: 2px solid #555;
    border-radius: 100%;
  }

  s-profile-pic > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
</style>
