document.addEventListener('DOMContentLoaded', function() {
    const inviteBtns = document.querySelectorAll('#invite-btn, #hero-invite-btn');
    const communityBtns = document.querySelectorAll('#community-btn, #hero-community-btn');
  
    // Function to animate buttons on hover
    function buttonHoverEffect(buttons) {
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.style.backgroundColor = '#DC44A4FF'; // Color change on hover
        });
  
        button.addEventListener('mouseleave', () => {
          button.style.backgroundColor = '#090809FF'; // Revert color on leave
        });
      });
    }
  
    buttonHoverEffect(inviteBtns);
    buttonHoverEffect(communityBtns);
  
    // Carousel functionality for testimonials or any carousel sections
    const carousel = document.querySelector('.testimonials-slider');
    let isDown = false;
    let startX;
    let scrollLeft;
  
    carousel.addEventListener('mousedown', (e) => {
      isDown = true;
      carousel.classList.add('active');
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
    });
  
    carousel.addEventListener('mouseleave', () => {
      isDown = false;
      carousel.classList.remove('active');
    });
  
    carousel.addEventListener('mouseup', () => {
      isDown = false;
      carousel.classList.remove('active');
    });
  
    carousel.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 2; // Fast scroll
      carousel.scrollLeft = scrollLeft - walk;
    });
  }); 
