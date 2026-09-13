// =========================================
// MOBILE MENU
// =========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    // Close menu after clicking a navigation link

    document.querySelectorAll("#navLinks a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// =========================================
// SCROLL ANIMATION
// =========================================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.12
    }
);


hiddenElements.forEach((element) => {

    observer.observe(element);

});


// =========================================
// CERTIFICATE LIGHTBOX
// =========================================

const lightbox =
    document.getElementById("certificateLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeButton =
    document.getElementById("lightboxClose");


// Open certificate

document
    .querySelectorAll(".certificate-clickable")
    .forEach((image) => {

        image.addEventListener("click", () => {

            const imagePath =
                image.getAttribute("data-certificate");

            if (!lightbox || !lightboxImage) {
                return;
            }

            lightboxImage.src = imagePath;

            lightbox.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


// =========================================
// CLOSE LIGHTBOX
// =========================================

function closeLightbox() {

    if (!lightbox) {
        return;
    }

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


// Close button

if (closeButton) {

    closeButton.addEventListener("click", () => {

        closeLightbox();

    });

}


// Close by clicking outside certificate

if (lightbox) {

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


// Close using ESC key

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeLightbox();

    }

});
