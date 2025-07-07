// Inisialisasi AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// Fungsi Toggle Layout
document.getElementById("toggleBtn").addEventListener("click", function () {
  const box = document.getElementById("demo-box");
  box.classList.toggle("layout-grid");
  box.classList.toggle("layout-flex");
});