// const menuBtn = document.getElementById('menuBtn');
// const mainNav = document.getElementById('mainNav');

// menuBtn.addEventListener('click', () => {
//   mainNav.classList.toggle('hidden');  // Toggle hidden class on click
// });
// const menuBtn = document.getElementById('menuBtn');
// const mainNav = document.getElementById('mainNav');

// menuBtn.addEventListener('click', () => {
//   mainNav.classList.toggle('hidden');
// });

// // Add cursor pointer style on hover for menu button
// menuBtn.addEventListener('mouseover', () => {
//   menuBtn.style.cursor = 'pointer';
// });

// // Add circle hover effect (optional)
// const menuIcon = menuBtn.querySelector('svg');
// menuBtn.addEventListener('mouseover', () => {
//   menuIcon.classList.add('hover:stroke-orange-500'); // Change color on hover (optional)
// });

// menuBtn.addEventListener('mouseout', () => {
//   menuIcon.classList.remove('hover:stroke-orange-500'); // Remove hover color (optional)
// });
// Toggle mobile menu
// const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
// const mobileMenu = document.querySelector('.mobile-menu');

// mobileMenuToggle.addEventListener('click', () => {
//   mobileMenu.classList.toggle('hidden');
// });

// // Smooth scroll to sections
// const navLinks = document.querySelectorAll('nav a');

// navLinks.forEach(link => {
//   link.addEventListener('click', e => {
//     e.preventDefault();
//     const targetId = e.currentTarget.getAttribute('href');
//     const targetElement = document.querySelector(targetId);
//     targetElement.scrollIntoView({ behavior: 'smooth' });
//   });
// });
// Toggle mobile menu
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Smooth scroll to sections
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});