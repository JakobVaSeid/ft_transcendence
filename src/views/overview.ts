export function renderOverview() {
  const container = document.getElementById("app");
  const template = document.getElementById("overview-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);
  }
}

/* export function renderOverview(): string {
  return `
<div class="flex items-center justify-center">
  <div class="flex items-center justify-center min-h-screen">
    <div class="card app-container w-[90vw] max-w-3xl py-10 px-8">
      <div class="text-2xl effect-button text-color-red rounded-3xl py-4 px-6 mb-6 text-center font-bold">
        <i class="fa-solid fa-user"></i>
        Profile
      </div>
      <a href="#gamemode">
      <div class="text-2xl effect-button text-color-lavender rounded-3xl py-4 px-6 mb-6 text-center font-bold">
        <i class="fa-solid fa-gamepad"></i>
        Play
      </div>
      </a>
      <div class="text-2xl effect-button text-color-orange rounded-3xl py-4 px-6 mb-2 text-center font-bold">
        <i class="fa-solid fa-chart-simple"></i>
        Stats
      </div>
    </div>
  </div>
</div>`;
} */