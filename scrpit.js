// ===============================
// MOBILE MENU
// ===============================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}


// ===============================
// CERTIFICATE LIGHTBOX
// ===============================

const lightbox = document.getElementById("certificateLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.getElementById("lightboxClose");


// Open certificate
document.querySelectorAll(".certificate-clickable").forEach((image) => {

    image.addEventListener("click", () => {

        const imagePath = image.getAttribute("data-certificate");

        lightboxImage.src = imagePath;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


// Close button
if (closeButton) {

    closeButton.addEventListener("click", () => {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    });

}


// Close when clicking outside
if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            lightbox.classList.remove("active");

            document.body.style.overflow = "";

        }

    });

}


// Close with ESC
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

        document.body.style.overflow = "";

    }

});