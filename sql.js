// Inisialisasi AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();
});

// Fungsi Load Sample Data
document.getElementById("loadBtn").addEventListener("click", function () {
  const data = [
    { id: 1, name: "Alice Johnson", role: "Developer", department: "IT" },
    { id: 2, name: "Bob Smith", role: "Designer", department: "Creative" },
    { id: 3, name: "Charlie Brown", role: "Manager", department: "Operations" }
  ];

  const table = document.createElement("table");
  table.innerHTML = `
    <thead>
      <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Jabatan</th>
        <th>Departemen</th>
      </tr>
    </thead>
    <tbody>
      ${data.map(row => `
        <tr>
          <td>${row.id}</td>
          <td>${row.name}</td>
          <td>${row.role}</td>
          <td>${row.department}</td>
        </tr>
      `).join("")}
    </tbody>
  `;

  const container = document.getElementById("table-container");
  container.innerHTML = "";
  container.appendChild(table);
});