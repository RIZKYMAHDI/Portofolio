// Inisialisasi AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// Fungsi Tampilkan Contoh Kode C#
document.getElementById("loadBtn").addEventListener("click", function () {
  const sampleCode = `// Contoh: Hello World di C#\nusing System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`;
  const container = document.getElementById("code-container");
  container.textContent = sampleCode;
});