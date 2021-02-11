let darkMode = -1

function toggleDarkMode() {
    if (darkMode == -1) {
        darkMode = 0;
        applyColors(darkMode);
    } else if (darkMode == 0) {
        darkMode = 1;
        applyColors(darkMode);
    } else if (darkMode == 1) {
        darkMode = 0;
        applyColors(darkMode);
    }
}

function applyColors(darkMode) {
    let root = document.documentElement;
    if (darkMode == 0) {
        root.style.setProperty("--background", "white")
        root.style.setProperty("--foreground", "black")
    } else if (darkMode == 1) {
        root.style.setProperty("--background", "black")
        root.style.setProperty("--foreground", "white")
    }
}