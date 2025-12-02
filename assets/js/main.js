
// Toggle mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// Basic form validation
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill in name, email, and message.');
    }
  });
}
