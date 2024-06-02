const getTheme = () => localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

document.addEventListener("DOMContentLoaded", function () {
  const moonButtons = document.querySelectorAll('button.moon-button');

  function toggleTheme(e) {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log(`Toggling theme from ${currentTheme} to ${newTheme}`);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  if (moonButtons.length > 0) {
    moonButtons.forEach(button => {
      button.addEventListener('click', toggleTheme);
      button.addEventListener('touchstart', toggleTheme); // Add touchstart event listener for mobile
      console.log('Moon button event listener added');
    });
  } else {
    console.error('Moon buttons not found');
  }

  const currentTheme = getTheme();
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  }
});
