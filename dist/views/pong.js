export function renderPong() {
    return `

      <header>
        <div class="w-full flex justify-center py6 items-center">
          <div class="effect rounded-3xl py-10 px-10 text-2xl title mb-4 mt-4 text-4xl"><strong>Pong Game</strong></div>
        </div>
        </header>
        <!-- Game Stats -->
      <div class="flex justify-center">
          <div class="flex w-full items-center mb-2 items-center justify-between max-w-[800px]">
              <div class="text-lg effect text-color-lavender rounded-3xl py-2 px-4"><strong> Norbert: </strong><span id="player1-score"><strong>3</strong></span></div>
              <div class="text-lg effect text-color-teal rounded-3xl py-2 px-4"><strong> Ball-speed: </strong><span id="ball-speed"><strong> x0 </strong></span></div>
              <div class="text-lg text-color-orange effect rounded-3xl py-2 px-4"><strong> Herbert: </strong> <span id="player2-score"><strong>5</strong></span></div>
          </div>
      </div>
       <!-- Container für alles -->
<div class="flex justify-center">
    <!-- Rectangle Spielfeld -->
    <div class="relative effect-inner w-full max-w-[800px] aspect-[2/1] rounded-3xl border-black back">
      <canvas id="pong" class="w-full h-full"></canvas>
      <!-- Linker Balken -->
      <div class="absolute effect top-1/2 left-2 h-1/5 w-3 app-bg-lavender rounded-3xl -translate-y-1/2">
        <div class="h-full app-bg-lavender w-full rounded-3xl"></div>
      </div>
  
      <!-- Rechter Balken -->
      <div class="absolute effect top-1/2 right-2 h-1/5 w-3 app-bg-orange rounded-3xl -translate-y-1/2">
        <div class="h-full app-bg-orange w-full rounded-3xl"></div>
      </div>
  
      <!-- Ball -->
      <div class="absolute top-1/2 left-1/2 h-7 w-7 effect rounded-full app-bg-teal -translate-x-1/2 -translate-y-1/2">
        <div class="h-full app-bg-teal w-full rounded-3xl"></div>
      </div>
    </div>
  </div>
  <div class="w-full max-w-xl mx-auto mt-8">
    <!-- Toggle Button -->
    <button id="chat-toggle"
            class="w-full flex items-center justify-between effect-button px-4 py-3 rounded-t-xl transition">
      <div>
        <span class="app-color-gray text-lg text-color-blue-1 font-bold">Open Chat </span>
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
export function initChat() {
    const toggleBtn = document.getElementById('chat-toggle');
    const chatBody = document.getElementById('chat-body');
    const chevron = document.getElementById('chat-chevron');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    if (!toggleBtn || !chatBody || !chevron || !chatMessages || !chatInput || !chatSend) {
        return;
    }
    let isOpen = false;
    const messages = [];
    toggleBtn.addEventListener('click', () => {
        isOpen = !isOpen;
        chatBody.classList.toggle('scale-y-0');
        chatBody.classList.toggle('opacity-0');
        chevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
    });
    function sendMessage() {
        if (!chatInput)
            return;
        const msg = chatInput.value.trim();
        if (msg) {
            messages.push(msg);
            chatInput.value = '';
            renderMessages();
        }
    }
    function renderMessages() {
        if (!chatMessages)
            return;
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
    chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter')
            sendMessage();
    });
}
