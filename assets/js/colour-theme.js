document.addEventListener("DOMContentLoaded", function () {
    const starButtons = document.querySelectorAll('button.star-button');

    // Initialize jscolor picker
    jscolor.presets.default = {
        width: 200,
        position: 'right',
        backgroundColor: '#333',
        controlBorderColor: '#FFF',
        shadow: true,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: '#444',
        previewElement: null,
        palette: ['#7092be', '#4040bf', '#ab548a', '#bf404c', '#b5a940', '#3fa687'],
    };

    // Detect if the browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    // Load the saved color from local storage
    const savedColor = localStorage.getItem('selectedColor');
    const cssHsl = getCssHsl('--clr-a-text');
    const initialHsl = savedColor ? JSON.parse(savedColor) : { ...cssHsl, l: 50 };
    const hexColor = hslToHex(initialHsl.h, initialHsl.s, initialHsl.l);

    function showColorPicker(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget.querySelector('i');

        if (target.jscolor) {
            target.jscolor.hide();
            target.jscolor = null;
        }

        const picker = new jscolor(target, {
            onInput: 'updateColor(this)',
            valueElement: null,
            previewElement: null,
            value: localStorage.getItem('currentColor') || hexColor
        });

        picker.show();
    }

    starButtons.forEach(button => {
        button.removeEventListener('click', showColorPicker);
        button.removeEventListener('touchstart', showColorPicker);
        button.addEventListener('click', showColorPicker);
        button.addEventListener('touchstart', showColorPicker);
    });

    if (savedColor) {
        const hslColor = JSON.parse(savedColor);
        applyColor(hslColor, !isSafari); // Conditionally update favicon based on browser type
    }

    // Ensure favicon is set on page load
    loadFavicon(!isSafari);

    // Listen for theme changes
    document.addEventListener('themeChange', function(e) {
        const newTheme = e.detail.theme;
        updateThemeColors(newTheme);
    });
});

window.addEventListener('load', function() {
    // Ensure favicon is updated after initial load
    const dataUrl = localStorage.getItem('favicon');
    if (dataUrl) {
        setFavicon(dataUrl);
    }
});

function updateColor(picker) {
    const hexColor = picker.toHEXString();
    const hslColor = hexToHSL(hexColor);

    applyColor(hslColor, true); // Pass true to update favicon
    localStorage.setItem('selectedColor', JSON.stringify(hslColor));
    localStorage.setItem('currentColor', hexColor);
}

function applyColor(hslColor, updateFavicon = false) {
    const lightness = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--L-a-text')) || 50;
    const hoverChange = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--L-a-text-hover-change')) || 0.8;
    const hoverLightness = lightness * hoverChange;

    const hoverSaturation = hslColor.s * 0.8;

    const mainColor = `hsl(${hslColor.h}, ${hslColor.s}%, ${lightness}%)`;
    const hoverColor = `hsl(${hslColor.h}, ${hoverSaturation}%, ${hoverLightness}%)`;

    document.documentElement.style.setProperty('--clr-a-text', mainColor);
    document.documentElement.style.setProperty('--clr-a-text-hvr', hoverColor);

    if (updateFavicon) {
        changeFaviconBackground(hslColor.h, hslColor.s);
    }
}

function changeFaviconBackground(hue, saturation) {
    const lightness = 60; // Fixed lightness for favicon
    const hexColor = hslToHex(hue, saturation, lightness);
    const referenceImageSrc = '/assets/images/favicon-template.png'; // Updated path to your reference image

    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;

    const ctx = canvas.getContext('2d');

    // Load the reference image
    const img = new Image();
    img.onload = function() {
        // Draw the background color
        ctx.fillStyle = hexColor;
        ctx.fillRect(0, 0, 32, 32);

        // Draw the reference image
        ctx.drawImage(img, 0, 0, 32, 32);

        const dataUrl = canvas.toDataURL('image/png');
        localStorage.setItem('favicon', dataUrl);
        setFavicon(dataUrl);
    };
    img.src = referenceImageSrc;
}

function loadFavicon(updateFavicon) {
    const dataUrl = localStorage.getItem('favicon');
    if (dataUrl && updateFavicon) {
        setFavicon(dataUrl);
    } else {
        // Set favicon to default background color if not found in localStorage
        setDefaultFavicon();
    }
}

function setFavicon(dataUrl) {
    let favicon = document.getElementById('favicon');
    if (favicon) {
        favicon.href = dataUrl;
    } else {
        favicon = document.createElement('link');
        favicon.id = 'favicon';
        favicon.rel = 'icon';
        favicon.href = dataUrl;
        document.head.appendChild(favicon);
    }
}

function setDefaultFavicon() {
    const cssHsl = getCssHsl('--clr-a-text');
    changeFaviconBackground(cssHsl.h, cssHsl.s);
}

function hexToHSL(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16) / 255;
        g = parseInt(hex.slice(3, 5), 16) / 255;
        b = parseInt(hex.slice(5, 7), 16) / 255;
    }
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
    };
}

function hslToHex(h, s, l) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function hslToHexFromCss(hslString) {
    const hsl = hslString.match(/\d+/g).map(Number);
    return hslToHex(hsl[0], hsl[1], hsl[2]);
}

function getCssHsl(variable) {
    const style = getComputedStyle(document.documentElement);
    const value = style.getPropertyValue(variable);
    const hsl = value.match(/\d+/g).map(Number);
    return { h: hsl[0], s: hsl[1], l: hsl[2] };
}

function updateThemeColors(theme) {
    const cssHsl = getCssHsl('--clr-a-text');
    const lightness = theme === 'dark' ? 80 : 50; // Example lightness adjustment for dark mode
    const hslColor = { ...cssHsl, l: lightness };
    applyColor(hslColor, false); // Pass false to not update favicon
}
