// Home.js

// 1. Inisialisasi AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// 2. Mobile Menu Toggle
const hamburgerBtn = document.getElementById('hamburger');
const navLinksEl  = document.getElementById('navLinks');
hamburgerBtn.addEventListener('click', () => {
  navLinksEl.classList.toggle('active');
});

// 3. Modal Functionality
const modalEl     = document.getElementById('modal');
const modalBodyEl = document.getElementById('modal-body');

function openModal(projectId) {
  let content = '';

  switch (projectId) {
    case 'decoreo':
      content = `
        <h2>DECOREO - Interior Design Service</h2>
        <p>A responsive website for interior design services built using HTML, CSS, and JavaScript. Features include project galleries, client testimonials, and contact forms.</p>
        <a href="https://youtu.be/4h6GbPiKxm8" target="_blank">View Live Site</a>
      `;
      break;
    case 'msaccess':
      content = `
        <h2>MS Access Database GUI</h2>
        <p>GUI interface for a university database project. Designed tables, queries, and reports for efficient data management.</p>
        <a href="#" target="_blank">Download Project</a>
      `;
      break;
    case 'odoo':
      content = `
        <h2>CV. SELANCAR - Odoo Car Rental</h2>
        <p>ERP system implementation for a car rental business using Odoo. Includes modules for inventory, bookings, and customer management.</p>
        <a href="#" target="_blank">Case Study PDF</a>
      `;
      break;
    case 'project4':
      content = `
        <h2>Project Alpha</h2>
        <p>Deskripsi lengkap Project Alpha: fitur utama, teknologi, dan hasil.</p>
        <a href="#" target="_blank">Learn More</a>
      `;
      break;
    case 'project5':
      content = `
        <h2>Project Beta</h2>
        <p>Deskripsi lengkap Project Beta: fitur utama, teknologi, dan hasil.</p>
        <a href="#" target="_blank">Learn More</a>
      `;
      break;
    case 'project6':
      content = `
        <h2>Project Gamma</h2>
        <p>Deskripsi lengkap Project Gamma: fitur utama, teknologi, dan hasil.</p>
        <a href="#" target="_blank">Learn More</a>
      `;
      break;
    default:
      content = `<p>No details available.</p>`;
  }

  modalBodyEl.innerHTML = content;
  modalEl.style.display  = 'flex';
  setTimeout(() => modalEl.style.opacity = '1', 10);
}

function closeModal() {
  modalEl.style.opacity = '0';
  setTimeout(() => modalEl.style.display = 'none', 300);
}

// Event listener untuk elemen dengan data-project-id
document.querySelectorAll('[data-project-id]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    openModal(el.dataset.projectId);
  });
});

// Tutup modal saat klik di luar konten
modalEl.addEventListener('click', e => {
  if (e.target === modalEl) closeModal();
});

// 4. Form Submission
function submitForm(event) {
  event.preventDefault();
  const formEl = event.target;
  const name   = formEl.querySelector('input[type="text"]').value;
  alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
  formEl.reset();
}

// expose untuk HTML inline
window.closeModal = closeModal;
window.submitForm = submitForm;
