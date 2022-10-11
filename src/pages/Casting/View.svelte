<script lang="ts">
  import type { Character } from "src/types";
  import ProfilePic from "./ProfilePic.svelte";

  export let character: Character;
</script>

<ProfilePic imageUrl={character.image} />
