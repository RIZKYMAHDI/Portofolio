// File: figma.js
// Initialize AOS animations
AOS.init({
  duration: 1000
});

// Mobile menu toggle (jika diperlukan)
const burger = document.getElementById('hamburger');
const links  = document.getElementById('navLinks');
if (burger && links) {
  burger.addEventListener('click', () => {
    links.classList.toggle('active');
  });
}