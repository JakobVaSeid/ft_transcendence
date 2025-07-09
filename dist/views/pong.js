export function renderPong() {
    const container = document.getElementById("app");
    const template = document.getElementById("pong-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
    }
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
