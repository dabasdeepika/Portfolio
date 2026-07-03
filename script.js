// ==============================
// NAVBAR ACTIVE LINK
// ==============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ==============================
// HEADER SHADOW
// ==============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(8,19,31,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "rgba(8,19,31,.75)";
        header.style.boxShadow = "none";

    }

});


// ==============================
// SCROLL REVEAL
// ==============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

const elements = document.querySelectorAll(
    ".card, .timeline-item, .project-card, .skill-card, .contact-icons, .hero-content"
);

elements.forEach((element) => {

    element.classList.add("hidden");
    observer.observe(element);

});


// ==============================
// SMOOTH SCROLL
// ==============================

navLinks.forEach((link) => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ==============================
// BUTTON HOVER EFFECT
// ==============================

const buttons = document.querySelectorAll(
    ".btn, .btn-outline, .project-btn"
);

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-5px)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "translateY(0px)";

    });

});


// ==============================
// FOOTER YEAR
// ==============================

const footerParagraph = document.querySelector("footer p:last-child");

if (footerParagraph) {

    footerParagraph.innerHTML =
        `© ${new Date().getFullYear()} Deepika Dabas. All Rights Reserved.`;

}