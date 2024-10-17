document.addEventListener('DOMContentLoaded', function() {
  console.log('Script loaded');
  const form = document.getElementById('signup-form');
  if (form) {
    console.log('Form found');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      console.log('Form submitted');
      alert('Thank you for signing up!');
    });
  } else {
    console.log('Form not found');
  }
});