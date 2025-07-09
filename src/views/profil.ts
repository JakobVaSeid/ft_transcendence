export function renderProfil() {
  const container = document.getElementById("app");
  const template = document.getElementById("profil-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);
  }
}
