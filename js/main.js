// Change header style on scroll
(function() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  // Инициализация (выполнить один раз на загрузке)
  onScroll();
  window.addEventListener('scroll', onScroll);
})();

// Form handler for trip enquiries
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Simple client-side validation
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const destination = form.querySelector('[name="destination"]').value.trim();

    if (!name || !email || !destination) {
      status.textContent = 'Please fill in your name, email and destination.';
      status.style.color = 'crimson';
      return;
    }

    // Simulate sending
    status.textContent = 'Sending your enquiry...';
    status.style.color = '#333';

    setTimeout(function () {
      form.reset();
      status.textContent = 'Thanks — your enquiry has been received. I will reply shortly.';
      status.style.color = 'green';
    }, 800);
  });
});