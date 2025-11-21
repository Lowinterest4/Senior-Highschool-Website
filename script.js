<script>
// Dropdown functionality
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const button = dropdown.querySelector('.dropbtn');
  const content = dropdown.querySelector('.dropdown-content');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Close other dropdowns
    dropdowns.forEach(d => {
      if(d !== dropdown) {
        d.querySelector('.dropdown-content').style.display = 'none';
      }
    });

    // Toggle current dropdown
    if(content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});

// Close dropdowns if clicked outside
window.addEventListener('click', (e) => {
  if(!e.target.matches('.dropbtn')) {
    dropdowns.forEach(dropdown => {
      dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
  }
});
</script>
