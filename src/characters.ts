import { writable, type Writable } from "svelte/store";

export type Character = {
  name: string;
  color: string;
  image: string;
  details: string;
};

export const characters: Writable<Character[]> = writable([
  {
    name: "Worry",
    color: "#9999BB",
    image: null,
    details: "The voice that always thinks something will go wrong",
  },
  {
    name: "Optimist",
    color: "#F5E0BB",
    image: null,
    details: "The hopeful voice that sees possibility and joy ahead",
  },
  {
    name: "The Judge",
    color: "#EFEFEF",
    image: null,
    details: "The even-handed final decision maker",
  },
]);
