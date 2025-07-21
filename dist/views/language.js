export const translations = {
    en: {
        profile: 'Profile',
        settings: 'Settings',
        logout: 'Logout',
    },
    de: {
        profile: 'Profil',
        settings: 'Einstellungen',
        logout: 'Abmelden',
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
