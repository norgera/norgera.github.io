const getTheme = () => localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

document.addEventListener("DOMContentLoaded", function () {
  const moonButton = document.querySelector('button.moon-button');

  function toggleTheme(e) {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log(`Toggling theme from ${currentTheme} to ${newTheme}`);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  if (moonButton) {
    moonButton.addEventListener('click', toggleTheme);
    console.log('Moon button event listener added');
  } else {
    console.error('Moon button not found');
  }

  const currentTheme = getTheme();
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
});
