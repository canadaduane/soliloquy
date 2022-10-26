import type { Message } from "~/types";

import { get } from "svelte/store";

import { messages } from "~/stores/messages";
import { currentConversationId } from "~/stores/currentConversationId";
import { conversations } from "~/stores/conversations";
import { characters as personas } from "~/stores/characters";
import { selectedCharacters as selectedPersonas } from "~/stores/selectedCharacters";
import { me } from "~/stores/me";
import { nanoid } from "nanoid";

type RawMessage = {
  id: string;
  ts: string;
  msg: string;
};

// Send a message as the current persona ($me)
export function sendMessage(text) {
  const persona = get(me);

  messages.update((msgs) => {
    const message = {
      persona,
      content: text,
      timestamp: new Date(),
    };

    msgs.push(message);

    // store conversation metadata ...
    const conversationId = updateCurrentConversationMetadata(msgs.length);
    // ... and data itself
    saveMessages(conversationId, msgs);

    return msgs;
  });
}

function maybeCreateConversation() {
  if (!get(currentConversationId)) {
    const newId = nanoid(10);
    const now = new Date();
    currentConversationId.set(newId);
    conversations.update(($conversations) => {
      return {
        ...$conversations,
        [newId]: {
          id: newId,
          personaIds: [],
          createdAt: now,
          lastModifiedAt: now,
          messageCount: 0,
          starred: false,
        },
      };
    });
  }
}

function updateCurrentConversationMetadata(messageCount) {
  maybeCreateConversation();

  const $currentConversationId = get(currentConversationId);
  if (!$currentConversationId) {
    console.warn("Unable to get current conversation", $currentConversationId);
    return;
  }

  // Get the current conversation
  const $conversations = get(conversations);
  const currentConversation = $conversations[$currentConversationId];

  // ... update its metadata
  const updatedConversation = {
    ...currentConversation,
    personaIds: get(selectedPersonas).map((persona) => persona.id),
    lastModifiedAt: new Date(),
    messageCount,
  };

  // Update the current conversation in the store containing all conversation metadata
  conversations.set({
    ...$conversations,
    [$currentConversationId]: updatedConversation,
  });

  return $currentConversationId;
}

export function loadConversation(conversationId) {
  if (conversationId === null) {
    messages.set([]);
  } else {
    const loadedMessages = loadMessages(conversationId);
    messages.set(loadedMessages);
  }
  currentConversationId.set(conversationId);
}

function messageToJSON(msg: Message): RawMessage {
  return {
    id: msg.persona.id,
    ts: msg.timestamp.toISOString(),
    msg: msg.content,
  };
}

function messageFromJSON(json: RawMessage): Message {
  const persona = get(personas).find((c) => c.id === json.id);
  if (!persona) console.warn("unknown persona id", json.id);

  return {
    persona,
    content: json.msg,
    timestamp: new Date(json.ts),
  };
}

export function loadMessages(conversationId: string) {
  const rawMessages: RawMessage[] = JSON.parse(
    localStorage.getItem(conversationId)
  );
  if (!rawMessages) {
    console.warn("no messages in conversation", conversationId);
    return [];
  }
  return rawMessages.map((msg) => messageFromJSON(msg));
}

export function saveMessages(conversationId: string, messages: Message[]) {
  localStorage.setItem(
    conversationId,
    JSON.stringify(messages.map((msg) => messageToJSON(msg)))
  );
}
