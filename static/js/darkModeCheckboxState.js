function restoreDarkModeCheckboxState() {
    let state = localStorage.getItem("darkModeCheckboxState");
    let checkbox = document.getElementById("dark-mode-checkbox");
    if (state == "true") {
        checkbox.checked = true
    }
}

function saveDarkModeCheckboxState() {
    let checkbox = document.getElementById("dark-mode-checkbox");
    if (checkbox.checked) {
        localStorage.setItem("darkModeCheckboxState", "true");
    } else {
        localStorage.setItem("darkModeCheckboxState", "false");
    }
}