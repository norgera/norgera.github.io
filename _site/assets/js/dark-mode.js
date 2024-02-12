const getTheme = () => localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll('button.theme-switch');

  function toggleTheme(e) {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  toggleButtons.forEach(btn => btn.addEventListener('click', toggleTheme));

  const currentTheme = getTheme();
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
});