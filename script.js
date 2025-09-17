// script.js
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");

// Toggle menu
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  sideMenu.classList.toggle("show");
});

// Close when clicking a link
sideMenu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    sideMenu.classList.remove("show");
  })
);

// Close on outside click
document.addEventListener("click", (e) => {
  if (
    sideMenu.classList.contains("show") &&
    !sideMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    hamburger.classList.remove("active");
    sideMenu.classList.remove("show");
  }
});
