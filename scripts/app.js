console.log("E-Commerce Website Loaded");

// Select elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Toggle mobile menu
hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
