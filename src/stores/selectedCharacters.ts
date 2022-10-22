import type { Character } from "../types";

import { derived, type Readable } from "svelte/store";

import { characters } from "./characters";

export const selectedCharacters: Readable<Character[]> = derived(
  characters,
  ($characters, set) => {
    set($characters.filter((character) => character.isSelected));
  }
);
