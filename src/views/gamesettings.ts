export function renderGamesettings() {
  const container = document.getElementById("app");
  const template = document.getElementById("gamesettings-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);
  }
}

type Action = "plus" | "minus";

/**
 * Registriert einen globalen Click-Listener
 * und reagiert nur auf Elemente, die data-action besitzen.
 */
export function initSettingControls(): void {
  // ⚡  Delegiertes Event-Handling – nur **ein** Listener für alles
  document.addEventListener("click", (ev) => {
    const target = ev.target as HTMLElement;

    // Wir reagieren nur auf Icons mit data-action
    if (!target.dataset.action) return;

    const action = target.dataset.action as Action;
    const valueId = target.dataset.target;
    if (!valueId) return;

    const valueElem = document.getElementById(valueId) as HTMLElement | null;
    if (!valueElem) return;

    const current = Number.parseInt(valueElem.textContent ?? "0", 10);

    let next = current;
    if (action === "plus")  next = Math.min(600, current + 10);
    if (action === "minus") next = Math.max(30, current - 10);

    valueElem.textContent = String(next);
  });
}