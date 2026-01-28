
import { INTERESTS, REFLECTIONS, FLOKI_DETAILS, FOUNDER_NAME } from './constants.js';
import { sendMessageToAI } from './services/gemini.js';

// --- Rendering Logic ---

function renderInterests() {
  const travelGrid = document.getElementById('travel-grid');
  const paintingsGrid = document.getElementById('paintings-grid');
  const reflectionsGrid = document.getElementById('reflections-grid');
  const readingsList = document.getElementById('readings-list');
  const moviesGrid = document.getElementById('movies-grid');

  INTERESTS.forEach(item => {
    const html = `
      <div class="group cursor-pointer">
        <div class="relative overflow-hidden aspect-[4/3] mb-4 bg-gray-100">
          <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div class="absolute top-4 right-4 glass px-3 py-1 text-xs font-semibold tracking-widest uppercase">${item.meta}</div>
        </div>
        <h3 class="text-2xl font-semibold mb-2 group-hover:underline underline-offset-4">${item.title}</h3>
        <p class="text-gray-600 leading-relaxed line-clamp-3">${item.description}</p>
      </div>
    `;

    if (item.type === 'Travel' && travelGrid) travelGrid.innerHTML += html;
    if (item.type === 'Paintings' && paintingsGrid) paintingsGrid.innerHTML += html;
    
    if (item.type === 'Readings' && readingsList) {
      readingsList.innerHTML += `
        <div class="flex gap-6 items-start p-4 hover:bg-white rounded-2xl transition-colors">
          <img src="${item.imageUrl}" alt="${item.title}" class="w-20 aspect-[2/3] object-cover shadow-sm rounded-md" />
          <div>
            <h4 class="font-semibold text-lg">${item.title}</h4>
            <p class="text-xs text-gray-400 mb-2">${item.meta}</p>
            <p class="text-sm text-gray-600 line-clamp-2">${item.description}</p>
          </div>
        </div>
      `;
    }

    if (item.type === 'Movies' && moviesGrid) {
      moviesGrid.innerHTML += `
        <div class="group relative aspect-[2/3] overflow-hidden bg-gray-200 rounded-lg">
          <img src="${item.imageUrl}" alt="${item.title}" class="w-full h-full object-cover transition-transform group-hover:scale-110" />
          <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
            <div>
              <p class="text-white font-bold text-sm mb-1">${item.title}</p>
              <p class="text-gray-300 text-[10px] uppercase tracking-wider">${item.meta}</p>
            </div>
          </div>
        </div>
      `;
    }
  });

  REFLECTIONS.forEach(ref => {
    if (reflectionsGrid) {
      reflectionsGrid.innerHTML += `
        <div class="p-8 border border-gray-100 bg-white rounded-3xl hover:shadow-xl transition-all duration-300 flex flex-col justify-between aspect-square">
          <p class="text-xl font-serif italic leading-relaxed text-gray-800">"${ref.text}"</p>
          <span class="text-xs text-gray-400 font-mono mt-4">${ref.date}</span>
        </div>
      `;
    }
  });
}

function renderFloki() {
  document.getElementById('floki-name')!.innerText = `Meet ${FLOKI_DETAILS.name}`;
  document.getElementById('floki-personality')!.innerText = FLOKI_DETAILS.personality;
  document.getElementById('floki-meta')!.innerText = `${FLOKI_DETAILS.breed}, ${FLOKI_DETAILS.age}`;
  document.getElementById('floki-story')!.innerText = `"${FLOKI_DETAILS.story}"`;

  const imgContainer = document.getElementById('floki-images-container');
  if (imgContainer) {
    imgContainer.innerHTML = `
      <div class="space-y-4">
        <img src="${FLOKI_DETAILS.images[0]}" class="w-full aspect-square object-cover rounded-2xl shadow-lg" />
        <img src="${FLOKI_DETAILS.images[1]}" class="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg" />
      </div>
      <div class="pt-8 space-y-4">
        <img src="${FLOKI_DETAILS.images[2]}" class="w-full aspect-[3/4] object-cover rounded-2xl shadow-lg" />
        <div class="bg-black text-white p-6 rounded-2xl aspect-square flex flex-col justify-center items-center text-center">
          <p class="text-3xl font-bold mb-1">15/10</p>
          <p class="text-xs uppercase tracking-widest opacity-60">Goodest Boy Rating</p>
        </div>
      </div>
    `;
  }
}

// --- Chat Widget Logic ---

let chatMessages: any[] = [
  { role: 'assistant', content: `Hi! I'm ${FOUNDER_NAME}'s digital assistant. Ask me anything about my work, lifestyle, or Floki!` }
];

function initChatWidget() {
  const root = document.getElementById('chat-widget-root');
  if (!root) return;

  root.innerHTML = `
    <div class="fixed bottom-6 right-6 z-50">
      <div id="chat-window" class="chat-closed glass w-[350px] md:w-[400px] h-[500px] rounded-2xl shadow-2xl flex flex-col border border-gray-200 transition-all duration-300">
        <div class="p-4 border-b border-gray-200 flex justify-between items-center bg-black rounded-t-2xl text-white">
          <span class="font-semibold">Ask ${FOUNDER_NAME} (AI)</span>
          <button id="close-chat" class="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4"></div>
        <form id="chat-form" class="p-4 border-t border-gray-200">
          <div class="flex gap-2">
            <input id="chat-input" type="text" placeholder="Type your message..." class="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-1 focus:ring-black outline-none" />
            <button type="submit" class="bg-black text-white p-2 rounded-full hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <button id="open-chat" class="bg-black text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-200 group mt-4 block ml-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  `;

  const chatWindow = document.getElementById('chat-window')!;
  const chatMessagesContainer = document.getElementById('chat-messages')!;
  const chatForm = document.getElementById('chat-form')! as HTMLFormElement;
  const chatInput = document.getElementById('chat-input')! as HTMLInputElement;
  const openBtn = document.getElementById('open-chat')!;
  const closeBtn = document.getElementById('close-chat')!;

  const updateMessages = () => {
    chatMessagesContainer.innerHTML = chatMessages.map(m => `
      <div class="flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}">
        <div class="max-w-[80%] p-3 rounded-2xl ${m.role === 'user' ? 'bg-black text-white' : 'bg-gray-100 text-black'}">
          <p class="text-sm">${m.content}</p>
        </div>
      </div>
    `).join('');
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  };

  openBtn.onclick = () => {
    chatWindow.classList.replace('chat-closed', 'chat-open');
    openBtn.classList.add('hidden');
    updateMessages();
  };

  closeBtn.onclick = () => {
    chatWindow.classList.replace('chat-open', 'chat-closed');
    openBtn.classList.remove('hidden');
  };

  chatForm.onsubmit = async (e) => {
    e.preventDefault();
    const val = chatInput.value.trim();
    if (!val) return;

    chatInput.value = '';
    chatMessages.push({ role: 'user', content: val });
    updateMessages();

    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'flex justify-start';
    loadingDiv.innerHTML = `<div class="bg-gray-100 p-3 rounded-2xl text-black"><div class="flex space-x-1"><div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div><div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-75"></div><div class="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-150"></div></div></div>`;
    chatMessagesContainer.appendChild(loadingDiv);
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;

    try {
      const reply = await sendMessageToAI(val, chatMessages.slice(0, -1));
      chatMessages.push({ role: 'assistant', content: reply });
    } catch (err) {
      chatMessages.push({ role: 'assistant', content: "I'm having trouble connecting right now." });
    } finally {
      loadingDiv.remove();
      updateMessages();
    }
  };

  updateMessages();
}

document.addEventListener('DOMContentLoaded', () => {
  renderInterests();
  renderFloki();
  initChatWidget();
});
