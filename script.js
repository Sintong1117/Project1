``
`javascript
// ==============================
// MENU MOBILE
// ==============================

function toggleMenu() {

    const menu = document.querySelector(".nav-menu");

    menu.classList.toggle("active");

}


// ==============================
// TAHUN FOOTER OTOMATIS
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// TUTUP MENU SETELAH LINK DIKLIK
// ==============================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .querySelector(".nav-menu")
            .classList.remove("active");

    });

});
`
``