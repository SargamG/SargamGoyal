/* ===============================
   DARK MODE (DATA-THEME METHOD)
================================= */

const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

/* Toggle theme */
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "dark") {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      updateThemeIcon("light");
    } else {
      root.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      updateThemeIcon("dark");
    }
  });
}

/* Change icon */
function updateThemeIcon(theme) {
  if (!themeToggle) return;

  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}


/* ===============================
   NAVBAR SHADOW ON SCROLL
================================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* ===============================
   SMOOTH SCROLL WITH OFFSET
================================= */

const navbarHeight = 80;

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {

    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;

    e.preventDefault();

    const position =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    let offset = -50;
    if (target.id === "publications") {
      offset = 10;   // smaller offset = scroll less down
    } else if (target.id === "projects") {
      offset = -110;
    } else if (target.id === "about") {
      offset = -110;
    }

    window.scrollTo({
      top: position - offset,
      behavior: "smooth"
    });
  });
});

/* ===============================
   MOBILE MENU TOGGLE
================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
}

/* Close menu after clicking a link */
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
  });
});
