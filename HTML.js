// script.js

// Initialize AOS animations
AOS.init({
    duration: 1000,
    once: true // whether animation should happen only once - while scrolling down
});

// Optional: Add smooth scroll behavior for back button
const backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = backBtn.getAttribute('href');
});
