export type Language = 'en' | 'de';

export const translations: Record<Language, Record<string, string>> = {
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
    visitors: 'Visitors',
    loginTitle: 'Login for amazing Pong',
    googleLogo: 'Login with google',
    noAccount: 'Don\'t have an account?',
    signUp: 'Sign up',
    loginButton: 'Login',
    error: 'Error',
    errorMsg: 'An error occurred. Please try again later.',
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
    visitors: 'Besucher',
    loginTitle: 'Login für erstaunliches Pong',
    googleLogo: 'Login mit Google',
    noAccount: 'Haben Sie kein Konto?',
    signUp: 'Registrieren',
    loginButton: 'Anmelden',
    error: 'Fehler',
    errorMsg: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
  },
};

export function getCurrentLanguage(): Language {
  return (localStorage.getItem("lang") as Language) || "en";
}

export function setLanguage(lang: Language): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-translate]');
  elements.forEach((el) => {
    const key = el.dataset.translate;
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem('lang', lang);
}

function setupLanguageButtons() {
  const btnEn = document.getElementById("btn-en");
  const btnDe = document.getElementById("btn-de");

  btnEn?.addEventListener("click", () => {
    setLanguage("en");
  });
  btnDe?.addEventListener("click", () => {
    setLanguage("de");
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupLanguageButtons();
  setLanguage(getCurrentLanguage()); // aus LocalStorage lesen!
});