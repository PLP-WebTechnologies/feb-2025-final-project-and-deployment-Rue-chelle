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
// Like button toggle
  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('liked');
      const icon = button.querySelector('i');
      icon.classList.toggle('fa-regular');
      icon.classList.toggle('fa-solid');
    });
  });
});

// contact form validation 

document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const successMessage = document.getElementById('successMessage');

  if (!name || !email || !message) {
    alert('Please fill out all required fields.');
    return;
  }

  // Display success message with animation
  successMessage.classList.remove('hidden');

  // Clear form
  this.reset();

  // Hide message after 4 seconds
  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 4000);
});
