import { writable, type Writable } from "svelte/store";

export const currentConversationId: Writable<string> = writable(null);
