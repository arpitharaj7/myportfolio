// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Close mobile menu if open
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.remove('active');
    }
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
  mobileMenuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = mobileMenuToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
      if (navLinks.classList.contains('active')) {
        if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
        if (index === 1) span.style.opacity = '0';
        if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -6px)';
      } else {
        span.style.transform = 'none';
        span.style.opacity = '1';
      }
    });
  });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (!e.target.closest('.navbar')) {
    navLinks.classList.remove('active');
    const spans = mobileMenuToggle?.querySelectorAll('span');
    spans?.forEach(span => {
      span.style.transform = 'none';
      span.style.opacity = '1';
    });
  }
});

// Contact form handling
const form = document.querySelector('.contact-form');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitBtn = form.querySelector('.btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

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
    }).catch(error => {
      console.error('Error:', error);
      alert('Oops! Something went wrong. Please try again.');
    }).finally(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    });
  });
}

// Scroll animations
const sections = document.querySelectorAll('section');

const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
});

sections.forEach(section => {
  appearOnScroll.observe(section);
});

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
  lucide.createIcons();
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(255, 255, 255, 0.95)';
    header.style.backdropFilter = 'blur(10px)';
  } else {
    header.style.background = 'white';
    header.style.backdropFilter = 'none';
  }
});

// Typing animation for hero section
document.addEventListener('DOMContentLoaded', () => {
  const typewriter = document.querySelector('.typewriter');
  if (typewriter) {
    // Add a delay before starting the typing animation
    setTimeout(() => {
      typewriter.style.animation = 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite';
    }, 500);
  }
});

// Smooth reveal animations for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all cards and elements that should animate
document.querySelectorAll('.project-card, .cert-card, .skill').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'all 0.6s ease';
  observer.observe(el);
});

// Add loading state to project links
document.querySelectorAll('.card-link').forEach(link => {
  link.addEventListener('click', function(e) {
    const originalText = this.textContent;
    this.textContent = 'Opening...';
    
    setTimeout(() => {
      this.textContent = originalText;
    }, 2000);
  });
});