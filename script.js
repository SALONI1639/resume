// script.js

// Toggle mobile menu
const toggleMenu = document.getElementById("toggle-menu");
const navLinks = document.getElementById("nav-links");

toggleMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scrolling and section highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Contact form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\\S+@\\S+\\.\\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  alert("Thank you! Your message has been submitted.");
  this.reset();
});

