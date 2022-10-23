import type { Character } from "../types";

import { writable, type Writable } from "svelte/store";
import Color from "colorjs.io";

let color = 0;
const lg = 0.65; // lightness
const ch = 0.1; // chroma
const step = 360 / 12; // divide the color space into 12

export function makeCharacter(traits: {
  name: string;
  color?: string;
  image?: string;
  description?: string;
  isNew?: boolean;
  isSelected?: boolean;
}): Character {
  return {
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

export const characters: Writable<Character[]> = writable([
  makeCharacter({
    name: "Creator",
    image: "creator.webp",
    description:
      "The drive to express and create--to paint, compose, build, innovate.",
  }),

  makeCharacter({
    name: "Explorer",
    image: "explorer.webp",
    description: "Wanderlust, novelty, curiosity.",
  }),

  makeCharacter({
    name: "Outlaw",
    image: "outlaw.webp",
    description: "Rule-breaker, don't cross my boundaries.",
  }),

  makeCharacter({
    name: "Jester",
    image: "jester.webp",
    description: "Comic, fun-lover, goof, enjoys the moment.",
  }),

  makeCharacter({
    name: "Lover",
    image: "lover.webp",
    description:
      "Giving yourself fully, entranced by life, possibly insane but ok with it.",
  }),

  makeCharacter({
    name: "Caregiver",
    image: "caregiver.webp",
    description: "Expanding the self, duty and concern for others.",
  }),

  makeCharacter({
    name: "Everyman",
    image: "everyman.webp",
    description: "Get along, hang with friends, keep things simple & routine.",
  }),

  makeCharacter({
    name: "Innocent",
    image: "innocent.webp",
    description: "The wonder of first experiences, untainted and no judgment.",
  }),

  makeCharacter({
    name: "Ruler",
    image: "ruler.webp",
    description: "Order and prosperity, tight grip, avoid uncertainties.",
  }),

  makeCharacter({
    name: "Sage",
    image: "sage.webp",
    description:
      "Understanding of many generations, patience, influence without control.",
  }),

  makeCharacter({
    name: "Magician",
    image: "magician.webp",
    description:
      "Unexpected, unpredictable, you never know what's around the corner.",
  }),

  makeCharacter({
    name: "Hero",
    image: "hero.webp",
    description: "Action is mine, I will make my mark, right wrongs.",
  }),
]);
