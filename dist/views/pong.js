export function renderPong() {
    const container = document.getElementById("app");
    const template = document.getElementById("pong-template");
    if (container && template) {
        const clone = template.content.cloneNode(true);
        container.innerHTML = "";
        container.appendChild(clone);
        // WICHTIG: Zugriff jetzt erst möglich
        const countdownOverlay = document.getElementById("countdownOverlay");
        const fieldContainer = document.querySelector(".effect-inner");
        const countdownValues = ["3", "2", "1", "GO", " "];
        let countdownIndex = 0;
        function showCountdown() {
            countdownOverlay.textContent = countdownValues[countdownIndex];
            if (countdownIndex < countdownValues.length - 1) {
                countdownIndex++;
                setTimeout(showCountdown, 1000);
            }
            else {
                startGameTransition();
            }
        }
        function startGameTransition() {
            countdownOverlay.classList.add("opacity-0");
            fieldContainer.classList.add("scale-105", "transition-transform", "duration-700", "ease-in-out");
            setTimeout(() => startGame(), 700);
        }
        function startGame() {
            console.log("🎮 Spiel startet!");
        }
        // Starte Countdown
        showCountdown();
    }
}
