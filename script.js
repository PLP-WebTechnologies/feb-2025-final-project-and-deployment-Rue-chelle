// Select the dark mode toggle button
const toggleBtn = document.getElementById('darkToggle');

// Listen for clicks and toggle 'dark-mode' class on body
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Optionally store user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Apply saved theme preference on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});
