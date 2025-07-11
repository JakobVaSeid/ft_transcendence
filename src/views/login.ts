export function renderLogin() {
  const container = document.getElementById("app");
  const template = document.getElementById("login-template") as HTMLTemplateElement;

  if (container && template) {
    const clone = template.content.cloneNode(true);
    container.innerHTML = "";
    container.appendChild(clone);
  }
}


/* export function renderLogin(): string {
  return `
        <body class="flex items-center justify-center">
  <div class ="flex items-center justify-center h-screen">
    <div class="card flex-center flex-col app-container items-center">
      <div class="text-lg effect text-color-green rounded-3xl py-2 px-4 mb-6">
        <strong> Login for amazing Pong </strong>
      </div>
      <form id="login-form" class="flex flex-col gap-4 mt-6">
        <div class="flex flex-row w-72 app-color-gray rounded-3xl effect-inner py-3 px-6 items-center">
          <i class="fa-solid fa-user app-color-pink"></i>
          <input type="text" placeholder="Username" class="ml-2 app-color-gray" required>
        </div>
        <div class="flex flex-row w-72 app-color-gray rounded-3xl effect-inner py-3 px-6 items-center">
          <i class="fa-solid fa-lock app-color-blue-1"></i>
          <input type="text" placeholder="Password" class="ml-2 app-color-gray" required>
        </div>
        <form class="flex flex-col h-28 py-4 justify-between">
          <!-- Option 1 -->
          <label for="option-1" class="flex items-center gap-2 cursor-pointer">
            <!-- h‑6 w‑6 = 24 px‑Kreis; accent-violet-600 färbt den INNEREN Punkt -->
            <input type="radio" id="option-1" name="selector"
                   class="h-6 w-6 accent-violet-600 focus:ring-violet-500"
                   checked>
            <span class="text-sm text-color-orange"><strong>Ich möchte Mails zu Marketing zwecken erhalten</strong></span>
          </label>
        
          <!-- Option 2 -->
          <label for="option-2" class="flex items-center gap-2 cursor-pointer">
            <input type="radio" id="option-2" name="selector"
                   class="h-6 w-6 accent-violet-600 focus:ring-violet-500">
            <span class="text-sm text-color-lavender"><strong>I want to recive mails for marketing purpose</strong></span>
          </label>
        </form>
        <button type="submit" class="btn-submi effect-button"><strong class="text-color-red">Login</strong></button>
      </form>
      <p class="text-sm text-gray-500 mt-4">Don't have an account? <a href="#" class="text-blue-500">Sign up</a></p>
    </div>
  </div>
</body>
  `;
} */