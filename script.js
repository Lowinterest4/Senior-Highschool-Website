// Dropdown Navigation Script
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropbtn');
  const menu = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Close all other dropdowns
    dropdowns.forEach(d => {
      if(d !== dropdown) {
        d.querySelector('.dropdown-content').style.display = 'none';
      }
    });
    // Toggle current dropdown
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  });
});

// Close dropdowns if clicking outside
window.addEventListener('click', (e) => {
  if(!e.target.matches('.dropbtn')) {
    dropdowns.forEach(dropdown => {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
  }
});
