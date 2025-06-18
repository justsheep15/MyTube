
// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const profileBtn = document.getElementById('profile-btn');
    const modal = document.getElementById('signin-modal');
    const closeBtn = document.querySelector('.close-btn');
  
    // Show modal on profile button click
    profileBtn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  
    // Close modal on close button click
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Close modal if clicked outside modal-content
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  
