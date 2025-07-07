// Inisialisasi AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// Fungsi Counter
const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
let count = 0;

incrementBtn.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
  countElement.parentElement.style.transform = "scale(1.1)";
  setTimeout(() => {
    countElement.parentElement.style.transform = "scale(1)";
  }, 200);
});

resetBtn.addEventListener("click", () => {
  count = 0;
  countElement.textContent = count;
});