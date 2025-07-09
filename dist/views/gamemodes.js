export function renderGamemodes() {
    const container = document.getElementById("app");
    const template = document.getElementById("gamemodes-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
    }
}
/* export function renderGamemodes(): string {
  return `
<div class="flex items-center justify-center">
  <div class="flex items-center justify-center min-h-screen">
    <div class="card app-container w-[90vw] max-w-3xl py-10 px-8">
      <div class="text-2xl effect-button text-color-red rounded-3xl py-4 px-6 mb-6 text-center font-bold">
        Solo Game
        <i class="fa-solid fa-user"></i>
        <i class="fa-solid fa-bolt"></i>
        <i class="fa-solid fa-desktop"></i>
      </div>
      <div class="text-2xl effect-button text-color-lavender rounded-3xl py-4 px-6 mb-6 text-center font-bold">
        Quick Play
        <i class="fa-solid fa-stopwatch"></i>
      </div>
      <div class="text-2xl effect-button text-color-green rounded-3xl py-4 px-6 mb-6 text-center font-bold">
        Custom Game
        <i class="fa-solid fa-users-gear"></i>
      </div>
      <div class="text-2xl effect-button text-color-orange rounded-3xl py-4 px-6 mb-2 text-center font-bold">
        Tournament
        <i class="fa-solid fa-crown"></i>
      </div>
    </div>
  </div>
</div>
  `;
} */ 
