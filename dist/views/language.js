export const translations = {
    en: {
        profile: 'Profile',
        play: 'Play',
        stats: 'Stats',
        sologame: 'Solo Game',
        quickplay: 'Quick Play',
        customgame: 'Custom Game',
        tournament: 'Tournament',
        username: 'Username',
        avatar: 'Avatar',
        email: 'Email Address',
        password: 'Password',
        language: 'Language',
        send: 'Send',
        gamesettings: 'Game Settings',
        roomType: 'Room Type',
        time: 'Time',
        bestOf: 'Best of',
        paddleSize: 'Paddle Size',
        ballSize: 'Ball Size',
        ballSpeed: 'Ball Speed',
        difficulty: 'AI Difficulty',
        player: 'Player',
        visitors: 'Visitors'
    },
    de: {
        profile: 'Profil',
        play: 'Spielen',
        stats: 'Statistiken',
        sologame: 'Einzelspiel',
        quickplay: 'Schnelles Spiel',
        customgame: 'Benutzerdefiniertes Spiel',
        tournament: 'Turnier',
        username: 'Benutzername',
        avatar: 'Avatar',
        email: 'E-Mail Adresse',
        password: 'Passwort',
        language: 'Sprache',
        send: 'Senden',
        gamesettings: 'Spiel Einstellungen',
        roomType: 'Raumtyp',
        time: 'Zeit',
        bestOf: 'Best of',
        paddleSize: 'Schlägergröße',
        ballSize: 'Ballgröße',
        ballSpeed: 'Ballgeschwindigkeit',
        difficulty: 'KI Schwierigkeit',
        player: 'Spieler',
        visitors: 'Besucher'
    },
};
let currentLanguage = localStorage.getItem("lang") || "en";
export function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((el) => {
        const key = el.dataset.translate;
        if (key && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
    // Optional: Sprache im LocalStorage speichern
    localStorage.setItem('lang', lang);
}
function setupLanguageButtons() {
    const btnEn = document.getElementById("btn-en");
    const btnDe = document.getElementById("btn-de");
    btnEn === null || btnEn === void 0 ? void 0 : btnEn.addEventListener("click", () => {
        currentLanguage = "en";
        setLanguage(currentLanguage);
    });
    btnDe === null || btnDe === void 0 ? void 0 : btnDe.addEventListener("click", () => {
        currentLanguage = "de";
        setLanguage(currentLanguage);
    });
}
window.addEventListener("DOMContentLoaded", () => {
    setupLanguageButtons();
    setLanguage(currentLanguage); // initial setzen
});
