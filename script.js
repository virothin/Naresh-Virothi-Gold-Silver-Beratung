/* ===========================
   HAMBURGER MENU TOGGLE
   =========================== */

const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");

hamburger.addEventListener("click", () => {
    const isOpen = hamburger.classList.toggle("is-open");
    navMobile.classList.toggle("open");
    hamburger.setAttribute("aria-expanded", isOpen);
});


/* ===========================
   LANGUAGE SWITCHER
   =========================== */

const langButtons = document.querySelectorAll(".lang-btn");

// Mapping between English and German pages
const pageMap = {
    "index.html": "index-de.html",
    "gold.html": "gold-de.html",
    "silver.html": "silver-de.html",
    "about.html": "about-de.html",
    "contact.html": "contact-de.html"
};

function getCurrentPage() {
    const path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
}

function getBasePage(page) {
    return page.replace("-de", "");
}

// Highlight correct active language
(function setActiveLanguage() {
    const current = getCurrentPage();
    const isGerman = current.includes("-de");

    langButtons.forEach(btn => btn.classList.remove("active"));
    document.querySelector(`[data-lang="${isGerman ? "de" : "en"}"]`).classList.add("active");
})();

// Handle language switching
langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        const current = getCurrentPage();
        const base = getBasePage(current);

        if (lang === "de") {
            window.location.href = pageMap[base];
        } else {
            window.location.href = base;
        }
    });
});
