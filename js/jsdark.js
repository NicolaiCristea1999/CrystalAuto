const toggle = document.getElementById("darkModeToggle");

if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    toggle.innerHTML = "☀️";
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggle.innerHTML = "☀️";
        localStorage.setItem("darkMode", "enabled");
    } else {
        toggle.innerHTML = "🌙";
        localStorage.setItem("darkMode", "disabled");
    }
});