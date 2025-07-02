export function initDarkmode(): void {
  const darkToggle = document.getElementById('dark-toggle') as HTMLInputElement | null;
  if (!darkToggle) return;

  // Zustand aus localStorage lesen
  if (localStorage.getItem('darkMode') === 'true') {
    document.documentElement.classList.add('dark');
    darkToggle.checked = true;
  } else {
    document.documentElement.classList.remove('dark');
    darkToggle.checked = false;
  }

  darkToggle.addEventListener('change', () => {
    if (darkToggle.checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  });
}