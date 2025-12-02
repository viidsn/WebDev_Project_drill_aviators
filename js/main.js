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

  onScroll();
  window.addEventListener('scroll', onScroll);
})();

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const destination = form.querySelector('[name="destination"]').value.trim();

    if (!name || !email || !destination) {
      status.textContent = 'Please fill in your name, email and destination.';
      status.style.color = 'crimson';
      return;
    }

    status.textContent = 'Sending your enquiry...';
    status.style.color = '#333';

    setTimeout(function () {
      form.reset();
      status.textContent = 'Thanks — your enquiry has been received. I will reply shortly.';
      status.style.color = 'green';
    }, 800);
  });
});

// Contact form validation (accessible, screen-reader friendly)
document.addEventListener('DOMContentLoaded', function () {
  const cForm = document.getElementById('contact-form');
  if (!cForm) return;
  const status = document.getElementById('contact-form-status');

  function clearErrors() {
    ['contact-name-error','contact-email-error','contact-phone-error','contact-message-error'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.textContent = '';
    });
    status.textContent = '';
  }

  function validateEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  function validatePhone(phone) {
    if (!phone) return true; // optional
    return /^[0-9+\-()\s]{7,}$/.test(phone);
  }

  cForm.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    const name = cForm.querySelector('[name="name"]').value.trim();
    const email = cForm.querySelector('[name="email"]').value.trim();
    const phone = cForm.querySelector('[name="phone"]').value.trim();
    const message = cForm.querySelector('[name="message"]').value.trim();

    const errors = {};
    if (!name) errors.name = 'Please enter your name.';
    if (!email) errors.email = 'Please enter your email address.';
    else if (!validateEmail(email)) errors.email = 'Please enter a valid email address.';
    if (!validatePhone(phone)) errors.phone = 'Please enter a valid phone number.';
    if (!message) errors.message = 'Please include a short message.';

    if (Object.keys(errors).length) {
      // show inline errors and announce summary
      if (errors.name) document.getElementById('contact-name-error').textContent = errors.name;
      if (errors.email) document.getElementById('contact-email-error').textContent = errors.email;
      if (errors.phone) document.getElementById('contact-phone-error').textContent = errors.phone;
      if (errors.message) document.getElementById('contact-message-error').textContent = errors.message;

      const firstField = cForm.querySelector('[aria-describedby$="-error"]');
      // focus the first invalid field explicitly
      if (errors.name) {
        document.getElementById('contact-name').focus();
      } else if (errors.email) {
        document.getElementById('contact-email').focus();
      } else if (errors.phone) {
        document.getElementById('contact-phone').focus();
      } else if (errors.message) {
        document.getElementById('contact-message').focus();
      }

      status.textContent = 'Please fix the highlighted fields and try again.';
      return;
    }

    // Simulate send
    status.textContent = 'Sending your message...';
    const btn = cForm.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;

    setTimeout(function () {
      cForm.reset();
      if (btn) btn.disabled = false;
      status.textContent = 'Thanks — your message has been sent. I will reply shortly.';
      status.style.color = 'green';
    }, 900);
  });
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    links.classList.toggle('show');
  });
});