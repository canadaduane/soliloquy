import type { Character } from "../types";

import { writable, type Writable } from "svelte/store";
import Color from "colorjs.io";

let color = -20;
const lg = 0.9; // lightness
const ch = 0.1; // chroma
const step = 360 / 12;

export const characters: Writable<Character[]> = writable([
  {
    name: "Creator",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/creator.webp",
    details:
      "The drive to express and create--to paint, compose, build, innovate.",
    isNew: false,
  },

  {
    name: "Explorer",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/explorer.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Outlaw",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/outlaw.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Jester",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/jester.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Lover",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/lover.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Caregiver",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/caregiver.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Everyman",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/everyman.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Innocent",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/innocent.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Ruler",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/ruler.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Sage",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/sage.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Magician",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/magician.webp",
    details: null,
    isNew: false,
  },

  {
    name: "Hero",
    color: new Color("oklch", [lg, ch, (color += step)]),
    image: "/archetypes/hero.webp",
    details: null,
    isNew: false,
  },
]);
