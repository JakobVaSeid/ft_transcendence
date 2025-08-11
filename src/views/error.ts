export function renderError() {
  const container = document.getElementById("app");
  const template = document.getElementById("error-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);
  }
}