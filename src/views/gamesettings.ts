export function renderGamesettings() {
  const container = document.getElementById("app");
  const template = document.getElementById("gamesettings-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);
  }
}

type Action = "plus-ten" | "minus-ten" | "room-type" | "plus-one" | "minus-one" | "plus-two" | "minus-two";

export function initSettingControls(): void {
  const roomModes = ["public", "private"];
  document.addEventListener("click", (ev) => {
    const target = ev.target as HTMLElement;
    if (!target.dataset.action)
      return;
    const action = target.dataset.action as Action;
    const valueId = target.dataset.target;
    if (!valueId)
      return;
    const valueElem = document.getElementById(valueId) as HTMLElement | null;
    if (!valueElem)
      return;    
    if (action === "room-type") {
      const current = valueElem.textContent?.trim().toLowerCase();
      const index = roomModes.indexOf(current ?? "");
      const next = roomModes[(index + 1) % roomModes.length];
      valueElem.textContent = next;
      return;
    } else {
      const current = Number.parseInt(valueElem.textContent ?? "0", 10);
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