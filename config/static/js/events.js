// console.log("🎭 events.js cargado.");

function isMobile() {
    return window.innerWidth <= 768;
}

// Event Listeners para la barra lateral
document.addEventListener('DOMContentLoaded', function() {
    // Toggle del botón de la barra lateral
    document.getElementById("toggleSidebar").addEventListener("click", function() {
        const sidebar = document.querySelector(".sidebar");
        if (isMobile()) {
            sidebar.classList.toggle("show");
        }
    });

    // Los submenús principales ahora usan Bootstrap collapse automáticamente
    // Solo necesitamos manejar el submenu anidado de cálculo de caudal
    document.getElementById("toggleCalculoCaudal")?.addEventListener("click", function(e) {
        e.preventDefault();
        const submenu = document.getElementById("calculoCaudalSubmenu");
        if (submenu) {
            submenu.style.display = submenu.style.display === "none" ? "block" : "none";
        }
    });
});

// Evento de resize para la barra lateral
window.addEventListener("resize", function() {
    const sidebar = document.querySelector(".sidebar");
    if (!isMobile()) {
        sidebar.classList.remove("show");
    }
});