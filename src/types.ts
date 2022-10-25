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
  character: Character;
  content: string;
  timestamp: Date;
};
