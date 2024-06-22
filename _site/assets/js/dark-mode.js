const getTheme = () => localStorage.getItem('theme');

document.addEventListener("DOMContentLoaded", function () {
    const moonButtons = document.querySelectorAll('button.moon-button');
    let themeToggled = false;

    function toggleTheme(e) {
        if (!themeToggled) {
            const currentTheme = getTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            console.log(`Toggling theme from ${currentTheme} to ${newTheme}`);
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggled = true;
        }
        e.preventDefault(); // Prevent default action to avoid double toggling
    }

    moonButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
        button.addEventListener('touchstart', toggleTheme); // Add touchstart event listener for mobile
        button.addEventListener('touchend', (e) => e.preventDefault()); // Prevent click after touchstart
        console.log('Moon button event listener added');
    });

    const currentTheme = getTheme();
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    // Reset themeToggled flag after interaction
    document.addEventListener('touchend', () => { themeToggled = false; });
    document.addEventListener('mouseup', () => { themeToggled = false; });
});
