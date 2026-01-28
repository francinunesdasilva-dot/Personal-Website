
import { GoogleGenAI } from "@google/genai";
import { FOUNDER_NAME, FOUNDER_TAGLINE, INTERESTS, FLOKI_DETAILS } from "../constants";

const getSystemInstruction = () => {
  const interestsString = INTERESTS.map(i => `${i.type}: ${i.title} - ${i.description}`).join('\n');
  return `
    You are an AI assistant representing ${FOUNDER_NAME}.
    ${FOUNDER_NAME}'s tagline: ${FOUNDER_TAGLINE}.
    
    Here is some information about ${FOUNDER_NAME}'s lifestyle and interests:
    ${interestsString}
    
    About ${FOUNDER_NAME}'s dog, Floki:
    - Name: ${FLOKI_DETAILS.name}
    - Breed: ${FLOKI_DETAILS.breed}
    - Personality: ${FLOKI_DETAILS.personality}
    - Story: ${FLOKI_DETAILS.story}
    
    Answer questions from visitors as if you are ${FOUNDER_NAME}'s personal digital twin or executive assistant.
    Be professional, insightful, warm, and concise. 
    If you don't know something, just say that ${FOUNDER_NAME} hasn't shared that yet.
  `;
};

export const sendMessageToAI = async (message: string, history: {role: 'user' | 'assistant', content: string}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const contents = history.map(h => ({
    role: h.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: h.content }]
  }));
  
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: contents as any,
    config: {
      systemInstruction: getSystemInstruction(),
      temperature: 0.7,
      topP: 0.95,
      maxOutputTokens: 500,
    }
  });

  return response.text || "I'm sorry, I couldn't process that.";
};
