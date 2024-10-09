document.addEventListener('DOMContentLoaded', function() {
    const inviteBtns = document.querySelectorAll('#invite-btn, #invite-btn-hero');
    const communityBtns = document.querySelectorAll('#community-btn, #community-btn-hero');
  
    // Function to animate buttons on hover
    function buttonHoverEffect(buttons) {
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          button.style.backgroundColor = '#DC44A4FF';
        });
  
        button.addEventListener('mouseleave', () => {
          button.style.backgroundColor = '#090809FF';
        });
      });
    }
  
    buttonHoverEffect(inviteBtns);
    buttonHoverEffect(communityBtns);
  
    // Carousel functionality for the showcase section
    const carousel = document.querySelector('.showcase-carousel');
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
      const walk = (x - startX) * 2; // scroll-fast
      carousel.scrollLeft = scrollLeft - walk;
    });
  });
  