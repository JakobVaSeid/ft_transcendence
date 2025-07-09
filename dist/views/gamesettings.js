export function renderGamesettings() {
    const container = document.getElementById("app");
    const template = document.getElementById("gamesettings-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
    }
}
/**
 * Registriert einen globalen Click-Listener
 * und reagiert nur auf Elemente, die data-action besitzen.
 */
export function initSettingControls() {
    // ⚡  Delegiertes Event-Handling – nur **ein** Listener für alles
    document.addEventListener("click", (ev) => {
        var _a;
        const target = ev.target;
        // Wir reagieren nur auf Icons mit data-action
        if (!target.dataset.action)
            return;
        const action = target.dataset.action;
        const valueId = target.dataset.target;
        if (!valueId)
            return;
        const valueElem = document.getElementById(valueId);
        if (!valueElem)
            return;
        const current = Number.parseInt((_a = valueElem.textContent) !== null && _a !== void 0 ? _a : "0", 10);
        let next = current;
        if (action === "plus")
            next = Math.min(600, current + 10);
        if (action === "minus")
            next = Math.max(30, current - 10);
        valueElem.textContent = String(next);
    });
}
