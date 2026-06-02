// Smooth scroll for internal navigation
const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    const targetSelector = this.getAttribute('href');

    if (!targetSelector || targetSelector === '#') {
      return;
    }

    const target = document.querySelector(targetSelector);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });

    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse?.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
    }
  });
});

// Navbar style on scroll
const navbar = document.querySelector('.portfolio-navbar');

function updateNavbar() {
  if (!navbar) return;
  navbar.classList.toggle('navbar-scrolled', window.scrollY > 20);
}

updateNavbar();
window.addEventListener('scroll', updateNavbar);

// Active link on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.navbar .nav-link[href^="#"]');

function updateActiveLink() {
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach((link) => {
    const href = link.getAttribute('href')?.replace('#', '');
    link.classList.toggle('active', href === currentSection);
  });
}

updateActiveLink();
window.addEventListener('scroll', updateActiveLink);
