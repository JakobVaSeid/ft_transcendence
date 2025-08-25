var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let roomType = "public";
let gameTime = 30;
let bestOf = 3;
let paddleSize = 5;
let ballSize = 5;
let ballSpeed = 1;
let difficulty = 5;
export function initSettingControls() {
    const roomModes = ["public", "private"];
    // Alle Steuer-Icons selektieren
    const controls = document.querySelectorAll("[data-action][data-target]");
    controls.forEach((control) => {
        var _a;
        // **Alten Listener entfernen** durch Klonen
        const newControl = control.cloneNode(true);
        (_a = control.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(newControl, control);
        newControl.addEventListener("click", () => {
            var _a, _b, _c;
            const action = newControl.dataset.action;
            const valueId = newControl.dataset.target;
            if (!valueId)
                return;
            const valueElem = document.getElementById(valueId);
            if (!valueElem)
                return;
            // **trim + parseInt**
            let current = parseInt(((_a = valueElem.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "0", 10);
            let next = current;
            // Room-Type umschalten
            if (action === "room-type") {
                const index = ["public", "private"].indexOf((_c = (_b = valueElem.textContent) === null || _b === void 0 ? void 0 : _b.trim().toLowerCase()) !== null && _c !== void 0 ? _c : "");
                const nextType = ["public", "private"][(index + 1) % 2];
                valueElem.textContent = nextType;
                roomType = nextType;
            }
            // Time +10 / -10
            else if (valueId === "time-value") {
                if (action === "plus-ten")
                    next = Math.min(180, current + 10);
                if (action === "minus-ten")
                    next = Math.max(30, current - 10);
                valueElem.textContent = String(next);
                gameTime = next;
            }
            // BestOf +2 / -2
            else if (valueId === "best-of-value") {
                if (action === "plus-two")
                    next = Math.min(9, current + 2);
                if (action === "minus-two")
                    next = Math.max(1, current - 2);
                valueElem.textContent = String(next);
                bestOf = next;
            }
            // Alle anderen +1/-1
            else {
                if (action === "plus-one")
                    next = Math.min(10, current + 1);
                if (action === "minus-one")
                    next = Math.max(1, current - 1);
                valueElem.textContent = String(next);
                if (valueId === "ball-speed-value")
                    ballSpeed = next;
                if (valueId === "paddle-value")
                    paddleSize = next;
                if (valueId === "ball-size-value")
                    ballSize = next;
                if (valueId === "difficulty-value")
                    difficulty = next;
            }
            console.log({
                roomType,
                gameTime,
                ballSpeed,
                bestOf,
                paddleSize,
                ballSize,
                difficulty,
            });
        });
    });
}
export function renderGamesettings() {
    const container = document.getElementById("app");
    const template = document.getElementById("gamesettings-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
        initSettingControls();
        // Button-Listener direkt hier anhängen
        const playBtn = document.getElementById("play-btn");
        if (playBtn) {
            playBtn.addEventListener("click", (ev) => __awaiter(this, void 0, void 0, function* () {
                ev.preventDefault(); // verhindert sofortiges Wechseln
                yield submitGameSettings();
            }));
        }
    }
}
export function submitGameSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const body = {
            roomType,
            gameTime,
            ballSpeed,
            bestOf,
            paddleSize,
            ballSize,
            difficulty,
        };
        console.log("Submitting game settings:", body);
        // --- später kannst du hier fetch aktivieren ---
        /*
        try {
          const response = await fetch("/api/game/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(body),
          });
      
          if (!response.ok) {
            const errText = await response.text();
            console.error("Error:", errText);
            return;
          }
      
          const data = await response.json();
          console.log("Game created:", data);
        } catch (err) {
          console.error("Network error:", err);
        }
        */
    });
}
