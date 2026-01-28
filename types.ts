
export type InterestType = 'Travel' | 'Paintings' | 'Reflections' | 'Readings' | 'Movies';

export interface InterestItem {
  id: string;
  type: InterestType;
  title: string;
  description: string;
  imageUrl?: string;
  date?: string;
  meta?: string;
}

export interface Reflection {
  id: string;
  text: string;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
