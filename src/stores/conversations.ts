import type { Writable } from "svelte/store";
import type { Conversation } from "~/types";

import { writable } from "svelte-local-storage-store";

export const conversations: Writable<Record<string, Conversation>> = writable(
  "conversations",
  {} /* initial value is an empty set of conversations */,
  {
    serializer: {
      stringify: JSON.stringify,
      parse: (text) => {
        const parsed = JSON.parse(text);
        for (let conversationId in parsed) {
          parsed[conversationId].createdAt = new Date(
            parsed[conversationId].createdAt
          );
          parsed[conversationId].lastModifiedAt = new Date(
            parsed[conversationId].lastModifiedAt
          );
        }
        return parsed;
      },
    },
  }
);
