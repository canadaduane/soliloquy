export type Page = "title" | "conversation" | "casting";

export type Character = {
  id: string;
  name: string;
  color: string;
  image: string;
  description: string;
  isNew: boolean;
  isSelected: boolean;
};

export type Message = {
  persona: Character;
  content: string;
  timestamp: Date;
};

export type Conversation = {
  id: string;
  personaIds: string[];
  createdAt: Date;
  lastModifiedAt: Date;
  messageCount: number;
  starred: boolean;
};
