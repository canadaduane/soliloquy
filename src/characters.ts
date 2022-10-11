import type { Character } from "./types";

import { writable, type Writable } from "svelte/store";

// import imgCaregiver from "src/archetypes/caregiver.webp";
const imgCaregiver = "/archetypes/caregiver.webp";
// import imgCreator from "src/archetypes/creator.webp";
const imgCreator = "/archetypes/creator.webp";
// import imgEveryman from "src/archetypes/everyman.webp";
const imgEveryman = "/archetypes/everyman.webp";
// import imgExplorer from "src/archetypes/explorer.webp";
const imgExplorer = "/archetypes/explorer.webp";
// import imgHero from "src/archetypes/hero.webp";
const imgHero = "/archetypes/hero.webp";
// import imgInnocent from "src/archetypes/innocent.webp";
const imgInnocent = "/archetypes/innocent.webp";
// import imgJester from "src/archetypes/jester.webp";
const imgJester = "/archetypes/jester.webp";
// import imgLover from "src/archetypes/lover.webp";
const imgLover = "/archetypes/lover.webp";
// import imgMagician from "src/archetypes/magician.webp";
const imgMagician = "/archetypes/magician.webp";
// import imgOutlaw from "src/archetypes/outlaw.webp";
const imgOutlaw = "/archetypes/outlaw.webp";
// import imgRuler from "src/archetypes/ruler.webp";
const imgRuler = "/archetypes/ruler.webp";
// import imgSage from "src/archetypes/sage.webp";
const imgSage = "/archetypes/sage.webp";

export const characters: Writable<Character[]> = writable([
  {
    name: "Creator",
    color: "#0191b7",
    image: imgCreator,
    details: null,
    isNew: false,
  },

  {
    name: "Ruler",
    color: "#0982b7",
    image: imgRuler,
    details: null,
    isNew: false,
  },

  {
    name: "Caregiver",
    color: "#385395",
    image: imgCaregiver,
    details: null,
    isNew: false,
  },

  {
    name: "Everyman",
    color: "#914786",
    image: imgEveryman,
    details: null,
    isNew: false,
  },

  {
    name: "Jester",
    color: "#bb326e",
    image: imgJester,
    details: null,
    isNew: false,
  },

  {
    name: "Lover",
    color: "#cc4e52",
    image: imgLover,
    details: null,
    isNew: false,
  },

  {
    name: "Hero",
    color: "#cb752b",
    image: imgHero,
    details: null,
    isNew: false,
  },

  {
    name: "Magician",
    color: "#d69e1e",
    image: imgMagician,
    details: null,
    isNew: false,
  },

  {
    name: "Outlaw",
    color: "#d0bd19",
    image: imgOutlaw,
    details: null,
    isNew: false,
  },

  {
    name: "Explorer",
    color: "#91ae40",
    image: imgExplorer,
    details: null,
    isNew: false,
  },

  {
    name: "Sage",
    color: "#009d64",
    image: imgSage,
    details: null,
    isNew: false,
  },

  {
    name: "Innocent",
    color: "#1c9287",
    image: imgInnocent,
    details: null,
    isNew: false,
  },
]);
