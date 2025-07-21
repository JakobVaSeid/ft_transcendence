
export function initChat(): void {
  const chatMessages = document.getElementById('chat-messages') as HTMLElement | null;
  const chatInput = document.getElementById('chat-input') as HTMLInputElement | null;
  const chatSend = document.getElementById('chat-send') as HTMLButtonElement | null;

  if (!chatMessages || !chatInput || !chatSend) {
    return;
  }

  const messages: string[] = [];

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