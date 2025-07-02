export function renderPong(): string {
  return `
        <body class="app-container bg-white text-black dark:bg-black dark:text-white">
      <header>
        <div class="w-full flex justify-center py6 items-center">
          <div class="effect rounded-3xl py-10 px-10 text-2xl title mb-4 mt-4 text-4xl"><strong>Pong Game</strong></div>
        </div>
        </header>
        <!-- Game Stats -->
      <div class="flex justify-center">
          <div class="flex w-full items-center mb-2 items-center justify-between max-w-[800px]">
              <div class="text-lg effect text-color-lavender rounded-3xl py-2 px-4"><strong> Norbert: </strong><span id="player1-score"><strong>3</strong></span></div>
              <div class="text-lg effect text-color-teal rounded-3xl py-2 px-4"><strong> Ball-speed: </strong><span id="ball-speed"><strong> x0 </strong></span></div>
              <div class="text-lg text-color-orange effect rounded-3xl py-2 px-4"><strong> Herbert: </strong> <span id="player2-score"><strong>5</strong></span></div>
          </div>
      </div>
       <!-- Container für alles -->
<div class="flex justify-center">
    <!-- Rectangle Spielfeld -->
    <div class="relative effect-inner w-full max-w-[800px] aspect-[2/1] rounded-3xl border-black back">
      <canvas id="pong" class="w-full h-full"></canvas>
      <!-- Linker Balken -->
      <div class="absolute effect top-1/2 left-2 h-1/5 w-3 app-bg-lavender rounded-3xl -translate-y-1/2">
        <div class="h-full app-bg-lavender w-full rounded-3xl"></div>
      </div>
  
      <!-- Rechter Balken -->
      <div class="absolute effect top-1/2 right-2 h-1/5 w-3 app-bg-orange rounded-3xl -translate-y-1/2">
        <div class="h-full app-bg-orange w-full rounded-3xl"></div>
      </div>
  
      <!-- Ball -->
      <div class="absolute top-1/2 left-1/2 h-7 w-7 effect rounded-full app-bg-teal -translate-x-1/2 -translate-y-1/2">
        <div class="h-full app-bg-teal w-full rounded-3xl"></div>
      </div>
    </div>
  </div>
  `;
}