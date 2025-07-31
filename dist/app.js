import { renderPong } from "./views/pong.js";
import { initChat } from "./views/chat.js";
import "./views/darkmode.js";
import { initDarkmode } from "./views/darkmode.js";
import { renderLogin } from "./views/login.js";
import { renderGamemodes } from "./views/gamemodes.js";
import { renderOverview } from "./views/overview.js";
import { renderProfil } from "./views/profil.js";
import { renderGamesettings } from "./views/gamesettings.js";
import { initSettingControls } from "./views/gamesettings.js";
import { setLanguage } from "./views/language.js";
import { getCurrentLanguage } from "./views/language.js";
import { renderRegister } from "./views/register.js";
function router() {
    const hash = window.location.hash || "#login";
    const app = document.getElementById("app");
    if (!app)
        return;
    let currentLanguage = localStorage.getItem("lang") || "en";
    initDarkmode(); // Initialize dark mode functionality
    setLanguage(getCurrentLanguage());
    switch (hash) {
        case "#login":
            renderLogin();
            break;
        case "#register":
            renderRegister();
            break;
        case "#overview":
            renderOverview();
            break;
        case "#pong":
            renderPong();
            break;
        case "#gamemode":
            renderGamemodes();
            break;
        case "#profil":
            renderProfil();
            break;
        case "#gamesettings":
            renderGamesettings();
            initSettingControls();
            initChat();
            break;
        default:
            app.innerHTML = "<p>Seite nicht gefunden.</p>";
    }
}
window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);
