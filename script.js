document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  const toggle = document.getElementById('toggle-dark');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});



const form = document.querySelector('.contact-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const action = form.action;

  fetch(action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert('Thanks! Your message has been sent ✨');
      form.reset();
    } else {
      alert('Oops! Something went wrong. Please try again.');
    }
  });
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});



lucide.createIcons();

const socialIcons = document.getElementById('socialIcons');
const connectSection = document.getElementById('connect');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      socialIcons.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

observer.observe(connectSection);


