const getTheme = () => localStorage.getItem('theme') || detectSystemTheme();

// Function to detect system theme preference
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

document.addEventListener("DOMContentLoaded", function () {
    const moonButtons = document.querySelectorAll('button.moon-button');
    let themeToggled = false;

    function toggleTheme(e) {
        e.preventDefault(); // Prevent default action to avoid double toggling
        if (!themeToggled) {
            const currentTheme = getTheme();
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggled = true;

            // Emit custom event to notify about theme change
            const themeChangeEvent = new CustomEvent('themeChange', { detail: { theme: newTheme } });
            document.dispatchEvent(themeChangeEvent);
        }
    }

    moonButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
        button.addEventListener('touchstart', toggleTheme); // Add touchstart event listener for mobile
        button.addEventListener('touchend', (e) => e.preventDefault()); // Prevent click after touchstart
    });

    const currentTheme = getTheme();
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }

    // Reset themeToggled flag after interaction
    document.addEventListener('touchend', () => { themeToggled = false; });
    document.addEventListener('mouseup', () => { themeToggled = false; });

    // Listen for changes in system theme preference and update only if no manual change has been made
    const systemThemeListener = window.matchMedia('(prefers-color-scheme: dark)');
    systemThemeListener.addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            const newSystemTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newSystemTheme);
        }
    });

    // Optional: Add a way to reset the theme preference
    const resetThemeButton = document.querySelector('#reset-theme');
    if (resetThemeButton) {
        resetThemeButton.addEventListener('click', () => {
            localStorage.removeItem('theme');
            const systemTheme = detectSystemTheme();
            document.documentElement.setAttribute('data-theme', systemTheme);
        });
    }
});
