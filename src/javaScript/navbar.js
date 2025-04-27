const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const navLinks = document.getElementById('nav-links');

// Open menu
openMenu.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

// Close menu
closeMenu.addEventListener('click', () => {
  navLinks.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
});
