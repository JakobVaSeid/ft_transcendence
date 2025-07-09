import { renderPong } from "./views/pong.js";
import { initChat } from "./views/chat.js";
import "./views/darkmode.js";
import { initDarkmode } from "./views/darkmode.js";
import { renderLogin } from "./views/login.js";
import { renderGamemodes } from "./views/gamemodes.js";
import { renderOverview } from "./views/overview.js";
function mount(content) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // alten Inhalt leeren
    if (typeof content === 'string') {
        app.innerHTML = content; // klassische String‑Variante
    }
    else {
        app.appendChild(content); // Template / DOM‑Node
    }
}
function router() {
    const hash = window.location.hash || "#login";
    const app = document.getElementById("app");
    if (!app)
        return;
    initDarkmode(); // Initialize dark mode functionality
    switch (hash) {
        case "#login":
            renderLogin();
            break;
        case "#overview":
            renderOverview();
            break;
        case "#pong":
            renderPong();
            initChat();
            break;
        case "#gamemode":
            renderGamemodes();
            break;
        default:
            app.innerHTML = "<p>Seite nicht gefunden.</p>";
    }
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
