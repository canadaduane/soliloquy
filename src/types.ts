export type Page = "title" | "conversation" | "casting";

export type Character = {
  name: string;
  color: string;
  image: string;
  details: string;
  isNew: boolean;
};

export type Message = {
  character: Character;
  content: string;
  timestamp: Date;
};
