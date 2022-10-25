import type { Character } from "../types";
import type { Writable } from "svelte/store";

import { writable } from "svelte-local-storage-store";
import Color from "colorjs.io";
import { nanoid } from "nanoid";

let color = 0;
const lg = 0.65; // lightness
const ch = 0.1; // chroma
const step = 360 / 12; // divide the color space into 12

export function makePersona(traits: {
  name: string;
  color?: string;
  image?: string;
  description?: string;
  isNew?: boolean;
  isSelected?: boolean;
}): Character {
  return {
    id: nanoid(10),
    name: traits.name,
    color: traits.color ?? new Color("oklch", [lg, ch, (color += step)]),
    image: traits.image
      ? traits.image.charAt(0) === "/"
        ? traits.image
        : `/archetypes/${traits.image}`
      : null,
    description: traits.description ?? null,
    isNew: traits.isNew ?? false,
    isSelected: traits.isSelected ?? false,
  };
}

export const characters: Writable<Character[]> = writable("personas", [
  makePersona({
    name: "Creator",
    image: "creator.webp",
    description:
      "The drive to express and create--to paint, compose, build, innovate.",
  }),

  makePersona({
    name: "Explorer",
    image: "explorer.webp",
    description: "Wanderlust, novelty, curiosity.",
  }),

  makePersona({
    name: "Outlaw",
    image: "outlaw.webp",
    description: "Rule-breaker, don't cross my boundaries.",
  }),

  makePersona({
    name: "Jester",
    image: "jester.webp",
    description: "Comic, fun-lover, goof, enjoys the moment.",
  }),

  makePersona({
    name: "Lover",
    image: "lover.webp",
    description:
      "Giving yourself fully, entranced by life, possibly insane but ok with it.",
  }),

  makePersona({
    name: "Caregiver",
    image: "caregiver.webp",
    description: "Expanding the self, duty and concern for others.",
  }),

  makePersona({
    name: "Everyman",
    image: "everyman.webp",
    description: "Get along, hang with friends, keep things simple & routine.",
  }),

  makePersona({
    name: "Innocent",
    image: "innocent.webp",
    description: "The wonder of first experiences, untainted and no judgment.",
  }),

  makePersona({
    name: "Ruler",
    image: "ruler.webp",
    description: "Order and prosperity, tight grip, avoid uncertainties.",
  }),

  makePersona({
    name: "Sage",
    image: "sage.webp",
    description:
      "Understanding of many generations, patience, influence without control.",
  }),

  makePersona({
    name: "Magician",
    image: "magician.webp",
    description:
      "Unexpected, unpredictable, you never know what's around the corner.",
  }),

  makePersona({
    name: "Hero",
    image: "hero.webp",
    description: "Action is mine, I will make my mark, right wrongs.",
  }),
]);
