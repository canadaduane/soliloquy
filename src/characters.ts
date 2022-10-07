import { writable, type Writable } from "svelte/store";

export type Character = {
  name: string;
  color: string;
  image: string;
  details: string;
};

export const characters: Writable<Character[]> = writable([]);
