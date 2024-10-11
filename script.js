document.addEventListener('DOMContentLoaded', function() {
    const inviteBtns = document.querySelectorAll('#invite-btn, #hero-invite-btn');
    const communityBtns = document.querySelectorAll('#community-btn, #hero-community-btn');

    // Function to add hover effects for buttons
    function buttonHoverEffect(buttons) {
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                button.style.backgroundColor = '#DC44A4FF'; // Change color on hover
            });

            button.addEventListener('mouseleave', () => {
                button.style.backgroundColor = '#090809FF'; // Revert color after hover
            });
        });
    }

    // Apply hover effects to invite and community buttons
    buttonHoverEffect(inviteBtns);
    buttonHoverEffect(communityBtns);

    // Carousel functionality for the showcase section
    const carousel = document.querySelector('.showcase-carousel');
    let isMouseDown = false;
    let startX;
    let initialScrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        initialScrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isMouseDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isMouseDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const distanceMoved = (x - startX) * 2; // Adjust scroll speed
        carousel.scrollLeft = initialScrollLeft - distanceMoved;
    });
});
