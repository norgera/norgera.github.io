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
        palette: [
            '#7092be', '#4040bf', '#ab548a', '#bf404c', '#b5a940', '#3fa687'
        ],
    };

    // Get the saved color from localStorage or set a default lightness
    const savedColor = localStorage.getItem('selectedColor');
    const cssHsl = getCssHsl('--clr-a-text');
    const initialHsl = savedColor ? JSON.parse(savedColor) : { ...cssHsl, l: 50 }; // Default lightness to 50%
    const hexColor = hslToHex(initialHsl.h, initialHsl.s, initialHsl.l); // Use CSS hue and saturation, default lightness to 50%

    function showColorPicker(e) {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget.querySelector('i');

        const picker = new jscolor(target, {
            onInput: 'updateColor(this)',
            valueElement: null, // This ensures that the color value is not applied to the button itself
            previewElement: null, // No preview element
            value: hexColor // Set the initial color
        });

        picker.show();
    }

    if (starButtons.length > 0) {
        starButtons.forEach(button => {
            button.addEventListener('click', showColorPicker);
            button.addEventListener('touchstart', showColorPicker); // Add touchstart event listener for mobile
        });
    }

    // Apply the saved color on page load
    if (savedColor) {
        const hslColor = JSON.parse(savedColor);
        applyColor(hslColor);
        console.log('Applied saved color:', hslColor);
    }
});

function updateColor(picker) {
    const hexColor = picker.toHEXString();
    const hslColor = hexToHSL(hexColor);

    console.log('New color selected: ', hslColor);

    applyColor(hslColor);
    // Save the selected color to localStorage
    localStorage.setItem('selectedColor', JSON.stringify(hslColor));
}

function applyColor(hslColor) {
    document.documentElement.style.setProperty('--clr-a-text', `hsl(${hslColor.h}, ${hslColor.s}%, var(--L-a-text))`);
    document.documentElement.style.setProperty('--clr-a-text-hvr', `hsl(${hslColor.h}, ${hslColor.s}%, calc(var(--L-a-text) * var(--L-a-text-hover-change)))`);
}

function hexToHSL(hex) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16) / 255;
        g = parseInt(hex.slice(3, 5), 16) / 255;
        b = parseInt(hex.slice(5, 7), 16) / 255;
    }
    // Convert RGB to HSL
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

function getCssHsl(variable) {
    const style = getComputedStyle(document.documentElement);
    const value = style.getPropertyValue(variable);
    const hsl = value.match(/\d+/g).map(Number);
    return { h: hsl[0], s: hsl[1], l: hsl[2] };
}
