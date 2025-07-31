export function renderRegister() {
    const container = document.getElementById("app");
    const template = document.getElementById("register-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
    }
}
