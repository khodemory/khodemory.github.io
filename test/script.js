// Toggle mobile navigation
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const elem = document.getElementById(id);
    elem.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll reveal animations
const scroll = new ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1000
});

scroll.reveal(".feature", { interval: 200 });

// Data background image
document.addEventListener("DOMContentLoaded", function() {
  const bgImage = document.querySelector(".bg-image");
  bgImage.style.backgroundImage = `url(${bgImage.dataset.image})`; 
});
