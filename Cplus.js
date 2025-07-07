// Inisialisasi AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// Fungsi Generate Fibonacci
document.getElementById("runBtn").addEventListener("click", function () {
  const n = parseInt(document.getElementById("inputN").value);
  const output = document.getElementById("output");
  let fib = [0, 1];
  if (n <= 0 || isNaN(n)) {
    output.textContent = "Masukkan angka antara 1-20.";
    return;
  }
  if (n === 1) {
    output.textContent = "Fibonacci(1): [0]";
    return;
  }
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  output.textContent = `Fibonacci(${n}): [${fib.slice(0, n).join(", ")}]`;
});