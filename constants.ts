
import { InterestItem, Reflection } from './types';

export const FOUNDER_NAME = "Alex Rivers";
export const FOUNDER_TAGLINE = "Building systems, exploring aesthetics, and observing the world through a lens of curiosity.";

export const INTERESTS: InterestItem[] = [
  {
    id: 't1',
    type: 'Travel',
    title: 'Kyoto, Japan',
    description: 'The intersection of ancient tradition and hyper-modern efficiency. Walking through Gion at dawn remains my most vivid travel memory.',
    imageUrl: 'https://picsum.photos/seed/kyoto/800/600',
    meta: 'Spring 2023'
  },
  {
    id: 't2',
    type: 'Travel',
    title: 'Amalfi Coast',
    description: 'Liminal spaces between the mountains and the Tyrrhenian Sea. A study in vertical living and Mediterranean light.',
    imageUrl: 'https://picsum.photos/seed/amalfi/800/600',
    meta: 'Autumn 2022'
  },
  {
    id: 'p1',
    type: 'Paintings',
    title: 'Abstract Expressionism',
    description: 'Fascinated by Mark Rothko’s color field paintings. There is a deep, resonant silence in his work that I try to find in my own productivity.',
    imageUrl: 'https://picsum.photos/seed/rothko/800/600',
    meta: 'Museum of Modern Art'
  },
  {
    id: 'p2',
    type: 'Paintings',
    title: 'Digital Impressionism',
    description: 'Exploring how AI can re-interpret Monet’s Water Lilies through generative seeds and neural style transfers.',
    imageUrl: 'https://picsum.photos/seed/monet/800/600',
    meta: 'Personal Gallery'
  },
  {
    id: 'r1',
    type: 'Readings',
    title: 'The Almanack of Naval Ravikant',
    description: 'A foundational text on leverage, happiness, and wealth. I revisit the concept of specific knowledge quarterly.',
    imageUrl: 'https://picsum.photos/seed/naval/400/600',
    meta: 'Eric Jorgenson'
  },
  {
    id: 'r2',
    type: 'Readings',
    title: 'Thinking, Fast and Slow',
    description: 'An essential guide to the human mind. Understanding System 1 and System 2 thinking changed how I make decisions.',
    imageUrl: 'https://picsum.photos/seed/kahneman/400/600',
    meta: 'Daniel Kahneman'
  },
  {
    id: 'm1',
    type: 'Movies',
    title: 'Arrival',
    description: 'Denis Villeneuve’s masterpiece on communication, time, and human connection. The score by Jóhann Jóhannsson is hauntingly beautiful.',
    imageUrl: 'https://picsum.photos/seed/arrival/800/1200',
    meta: 'Sci-Fi / Drama'
  },
  {
    id: 'm2',
    type: 'Movies',
    title: 'Grand Budapest Hotel',
    description: 'Wes Anderson’s meticulous attention to symmetry and color palettes is a constant source of UI/UX inspiration.',
    imageUrl: 'https://picsum.photos/seed/budapest/800/1200',
    meta: 'Comedy / Adventure'
  }
];

export const REFLECTIONS: Reflection[] = [
  {
    id: 'ref1',
    date: 'Dec 12, 2023',
    text: 'Complexity is easy; simplicity is hard. The most profound systems are those that fade into the background.'
  },
  {
    id: 'ref2',
    date: 'Jan 05, 2024',
    text: 'Quality is a byproduct of repetition. You cannot think your way into excellence; you must do your way there.'
  },
  {
    id: 'ref3',
    date: 'Feb 14, 2024',
    text: 'The best investment is time spent with those who challenge your defaults.'
  }
];

export const FLOKI_DETAILS = {
  name: "Floki",
  breed: "Golden Retriever",
  age: "3 years",
  personality: "Professional napper, amateur squirrel chaser, and the heart of the home.",
  story: "Found Floki at a shelter in Oregon. He was the only puppy not barking; he was just staring at a leaf. We've been inseparable ever since.",
  images: [
    'https://picsum.photos/seed/floki1/800/800',
    'https://picsum.photos/seed/floki2/800/800',
    'https://picsum.photos/seed/floki3/800/800'
  ]
};
