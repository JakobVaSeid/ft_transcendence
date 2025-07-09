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


function router() {
  const hash = window.location.hash || "#login";
  const app = document.getElementById("app");
  if (!app) return;
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
    case "#profil":
      renderProfil();
      break;
    case "#gamesettings":
      renderGamesettings();
      initSettingControls();
      break;
    default:
      app.innerHTML = "<p>Seite nicht gefunden.</p>";
  }
}

window.addEventListener("hashchange", router);
window.addEventListener("DOMContentLoaded", router);