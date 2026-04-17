
const btn = document.getElementById("mobileMenuBtn");
const menu = document.getElementById("mobileMenu");
const overlay = document.getElementById("menuOverlay");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
    btn.classList.toggle("active");
});

overlay.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
    btn.classList.remove("active");
});


