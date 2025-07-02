export function renderChat(): string {
  return `
         <div class="w-full max-w-xl mx-auto mt-8">
    <!-- Toggle Button -->
    <button id="chat-toggle"
            class="w-full flex items-center justify-between effect-button px-4 py-3 rounded-t-xl transition">
      <div>
        <spa class="app-color-gray text-lg text-color-blue-1 font-bold">Open Chat </span>
                <i id="chat-chevron" class="fa-solid fa-chevron-down app-color-blue-1"></i>
      </div>
              <i class="fa-solid fa-comment app-color-blue-1"></i>
    </button>

    <!-- Chat Body -->
    <div id="chat-body"
         class="origin-top app-container scale-y-0 opacity-0 transform transition-all duration-300 ease-in-out overflow-hidden rounded-xl">
      <div id="chat-messages" class="h-40 overflow-y-auto p-3 effect-inner rounded-3xl space-y-2"></div>
      <div class="flex app-color-gray rounded-3xl effect-inner py-3 px-4 items-center font-bold text-lg text-color-blue-1">
        <input id="chat-input" type="text" placeholder="Enter..."
               class="flex-1 px-3 mt-6" />
        <button id="chat-send"
                class="effect-button py-2 px-4 rounded-3xl app-color-gray text-lg font-bold text-color-blue-1">
          Senden
        </button>
      </div>
    </div>
  </div>
  `;
}

export function initChat(): void {
  const toggleBtn = document.getElementById('chat-toggle') as HTMLButtonElement | null;
  const chatBody = document.getElementById('chat-body') as HTMLElement | null;
  const chevron = document.getElementById('chat-chevron') as HTMLElement | null;
  const chatMessages = document.getElementById('chat-messages') as HTMLElement | null;
  const chatInput = document.getElementById('chat-input') as HTMLInputElement | null;
  const chatSend = document.getElementById('chat-send') as HTMLButtonElement | null;

  if (!toggleBtn || !chatBody || !chevron || !chatMessages || !chatInput || !chatSend) {
    return;
  }

  let isOpen = false;
  const messages: string[] = [];

  toggleBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    chatBody.classList.toggle('scale-y-0');
    chatBody.classList.toggle('opacity-0');
    chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
  });

  function sendMessage(): void {
    if(!chatInput) return;
    const msg = chatInput.value.trim();
    if (msg) {
      messages.push(msg);
      chatInput.value = '';
      renderMessages();
    }
  }

  function renderMessages(): void {
    if (!chatMessages) return;
    chatMessages.innerHTML = '';
    messages.forEach(msg => {
      const p = document.createElement('p');
      p.className = 'app-bg-teal effect text-black px-3 py-1 rounded-3xl shadow';
      p.textContent = msg;
      chatMessages.appendChild(p);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatSend.addEventListener('click', sendMessage);
  chatInput.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Enter') sendMessage();
  });
}