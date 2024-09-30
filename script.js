document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling (unchanged)

    // Parallax effect for hero section (unchanged)

    // Vertical slider functionality
    const sliders = document.querySelectorAll('.project-slider');
    sliders.forEach(slider => {
        const track = slider.querySelector('.slider-track');
        const cards = slider.querySelectorAll('.project-card');
        const prevBtn = slider.querySelector('.slider-nav.prev');
        const nextBtn = slider.querySelector('.slider-nav.next');
        let currentIndex = 0;

        const updateSlider = () => {
            const cardHeight = cards[0].offsetHeight + 20; // Add 20px for margin
            track.style.transform = `translateY(-${currentIndex * cardHeight}px)`;
        };

        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(currentIndex - 1, 0);
            updateSlider();
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = Math.min(currentIndex + 1, cards.length - 1);
            updateSlider();
        });
    });

    // Video preview on hover for reels
    const reelVideos = document.querySelectorAll('#projects .project-slider:first-child .project-card video');
    reelVideos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    });

    // Modal for long form content
    const longFormCards = document.querySelectorAll('#projects .project-slider:nth-child(2) .project-card');
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.appendChild(modal);

    longFormCards.forEach(card => {
        const playBtn = card.querySelector('.play-btn');
        playBtn.addEventListener('click', () => {
            const videoSrc = card.getAttribute('data-video');
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <video src="${videoSrc}" controls autoplay></video>
                </div>
            `;
            modal.style.display = 'block';

            const closeBtn = modal.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Lightbox for AI Images
    const aiImages = document.querySelectorAll('#projects .project-slider:last-child .project-card img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    document.body.appendChild(lightbox);

    aiImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close">&times;</span>
                    <img src="${img.src}" alt="${img.alt}">
                </div>
            `;
            lightbox.style.display = 'flex';

            const closeBtn = lightbox.querySelector('.close');
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        });
    });

    // Close lightbox when clicking outside
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Back to top button (unchanged)
});