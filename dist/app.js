import { renderPong } from "./views/pong.js";
import { renderChat } from "./views/chat.js";
import { initChat } from "./views/chat.js";
import "./views/darkmode.js";
import { initDarkmode } from "./views/darkmode.js";
import { renderLogin } from "./views/login.js";
function router() {
    const hash = window.location.hash || "#login";
    const app = document.getElementById("app");
    if (!app)
        return;
    initDarkmode(); // Initialize dark mode functionality
    switch (hash) {
        case "#login":
            app.innerHTML = renderLogin();
            break;
        case "#pong":
            app.innerHTML = renderPong();
            initChat();
            break;
        case "#chat":
            app.innerHTML = renderChat();
            initChat();
            break;
        default:
            app.innerHTML = "<p>Seite nicht gefunden.</p>";
    }
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
