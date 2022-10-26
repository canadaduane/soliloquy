import type { Message } from "~/types";

import { writable, type Writable } from "svelte/store";

export const messages: Writable<Message[]> = writable([]);
