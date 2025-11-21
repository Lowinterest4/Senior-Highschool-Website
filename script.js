// Dropdown Navigation Script (Hover-based)
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const menu = dropdown.querySelector('.dropdown-content');

  // Show dropdown on mouse enter
  dropdown.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
  });

  // Hide dropdown on mouse leave
  dropdown.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
  });
});
