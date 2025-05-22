// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, {
  threshold: 0.1
});

// Observe all elements with data-animate attribute
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Add click event listeners to all buttons
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    window.open('https://wa.me/5511911007812?text=Olá! Gostaria de solicitar um orçamento para assistência técnica.', '_blank')
  });
});

// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Optional: Add loading animation
document.addEventListener('DOMContentLoaded', function() {
  // Add any initialization code here
  console.log('RD Suprema website loaded successfully');
});