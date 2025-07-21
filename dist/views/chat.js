export function initChat() {
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    if (!chatMessages || !chatInput || !chatSend) {
        return;
    }
    const messages = [];
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
