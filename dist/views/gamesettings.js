export function renderGamesettings() {
    const container = document.getElementById("app");
    const template = document.getElementById("gamesettings-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
    }
}
export function initSettingControls() {
    const roomModes = ["public", "private"];
    document.addEventListener("click", (ev) => {
        var _a, _b;
        const target = ev.target;
        if (!target.dataset.action)
            return;
        const action = target.dataset.action;
        const valueId = target.dataset.target;
        if (!valueId)
            return;
        const valueElem = document.getElementById(valueId);
        if (!valueElem)
            return;
        if (action === "room-type") {
            const current = (_a = valueElem.textContent) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
            const index = roomModes.indexOf(current !== null && current !== void 0 ? current : "");
            const next = roomModes[(index + 1) % roomModes.length];
            valueElem.textContent = next;
            return;
        }
        else {
            const current = Number.parseInt((_b = valueElem.textContent) !== null && _b !== void 0 ? _b : "0", 10);
            let next = current;
            if (action === "plus-ten")
                next = Math.min(180, current + 10);
            if (action === "minus-ten")
                next = Math.max(30, current - 10);
            if (action === "plus-one")
                next = Math.min(10, current + 1);
            if (action === "minus-one")
                next = Math.max(1, current - 1);
            if (action === "plus-two")
                next = Math.min(9, current + 2);
            if (action === "minus-two")
                next = Math.max(1, current - 2);
            valueElem.textContent = String(next);
        }
    });
}
