type Action =
  | "plus-ten"
  | "minus-ten"
  | "room-type"
  | "plus-one"
  | "minus-one"
  | "plus-two"
  | "minus-two";

let roomType = "public";
let gameTime = 30;
let bestOf = 3;
let paddleSize = 5;
let ballSize = 5;
let ballSpeed = 1;
let difficulty = 5;

export function initSettingControls(): void {
  const roomModes = ["public", "private"];

  // Alle Steuer-Icons selektieren
  const controls = document.querySelectorAll<HTMLElement>("[data-action][data-target]");
controls.forEach((control) => {
  // **Alten Listener entfernen** durch Klonen
  const newControl = control.cloneNode(true) as HTMLElement;
  control.parentNode?.replaceChild(newControl, control);

  newControl.addEventListener("click", () => {
    const action = newControl.dataset.action as Action;
    const valueId = newControl.dataset.target;
    if (!valueId) return;

    const valueElem = document.getElementById(valueId);
    if (!valueElem) return;

    // **trim + parseInt**
    let current = parseInt(valueElem.textContent?.trim() || "0", 10);
    let next = current;

    // Room-Type umschalten
    if (action === "room-type") {
      const index = ["public", "private"].indexOf(valueElem.textContent?.trim().toLowerCase() ?? "");
      const nextType = ["public", "private"][(index + 1) % 2];
      valueElem.textContent = nextType;
      roomType = nextType;
    }
    // Time +10 / -10
    else if (valueId === "time-value") {
      if (action === "plus-ten") next = Math.min(180, current + 10);
      if (action === "minus-ten") next = Math.max(30, current - 10);
      valueElem.textContent = String(next);
      gameTime = next;
    }
    // BestOf +2 / -2
    else if (valueId === "best-of-value") {
      if (action === "plus-two") next = Math.min(9, current + 2);
      if (action === "minus-two") next = Math.max(1, current - 2);
      valueElem.textContent = String(next);
      bestOf = next;
    }
    // Alle anderen +1/-1
    else {
      if (action === "plus-one") next = Math.min(10, current + 1);
      if (action === "minus-one") next = Math.max(1, current - 1);
      valueElem.textContent = String(next);

      if (valueId === "ball-speed-value") ballSpeed = next;
      if (valueId === "paddle-value") paddleSize = next;
      if (valueId === "ball-size-value") ballSize = next;
      if (valueId === "difficulty-value") difficulty = next;
    }
  });
});
}


export function renderGamesettings() {
  const container = document.getElementById("app");
  const template = document.getElementById("gamesettings-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true) as DocumentFragment;
    container.innerHTML = "";
    container.appendChild(clone);

    initSettingControls();

    // Button-Listener direkt hier anhängen
    const playBtn = document.getElementById("play-btn");
    if (playBtn) {
      playBtn.addEventListener("click", async (ev) => {
        ev.preventDefault(); // verhindert sofortiges Wechseln
        await submitGameSettings();
      });
    }
  }
}

export async function submitGameSettings() {
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
}
