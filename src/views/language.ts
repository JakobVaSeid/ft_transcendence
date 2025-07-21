export type Language = 'en' | 'de';

export const translations: Record<Language, Record<string, string>> = {
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

let currentLanguage = (localStorage.getItem("lang") as Language) || "en";

export function setLanguage(lang: Language): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-translate]');

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

  btnEn?.addEventListener("click", () => {
    currentLanguage = "en";
    setLanguage(currentLanguage);
  });
  btnDe?.addEventListener("click", () => {
    currentLanguage = "de";
    setLanguage(currentLanguage);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupLanguageButtons();
  setLanguage(currentLanguage); // initial setzen
});