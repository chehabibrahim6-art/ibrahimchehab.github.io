// Adds a small active-section cue to the navigation without requiring any framework.
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.removeAttribute('aria-current'));
    const active = navLinks.find(link => link.getAttribute('href') === `#${entry.target.id}`);
    if (active) active.setAttribute('aria-current', 'page');
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
