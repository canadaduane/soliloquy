import type { Character } from "../types";

import { writable, type Writable } from "svelte/store";

export const me: Writable<Character> = writable(null);
