document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Gallery Images Data
    const galleryImages = [
        { src: 'assets/gallery/chath 1.jpg', title: 'Chhath Puja Devotion' },
        { src: 'assets/gallery/2.jpg', title: 'Urban Perspectives' },
        { src: 'assets/gallery/3.jpg', title: 'Innocence' },
        { src: 'assets/gallery/4.jpg', title: 'Captured Vibes' },
        { src: 'assets/gallery/5.jpg', title: 'Rainy Moments' },
        { src: 'assets/gallery/6.jpg', title: 'New Angles' },
        { src: 'assets/hero_bg_final.jpg', title: 'Atmospheric' },
        { src: 'assets/about.png', title: 'Portrait' },
        // Add more images here as needed
    ];

    // Populate Gallery Grid
    const galleryGrid = document.getElementById('gallery-page-grid');

    if (galleryGrid) {
        galleryImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-page-item');
            galleryItem.setAttribute('data-index', index);

            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.title}" class="gallery-page-image" loading="lazy">
                <div class="gallery-page-overlay">
                    <span>${image.title}</span>
                </div>
            `;

            galleryGrid.appendChild(galleryItem);
        });

        // Lightbox Functionality
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const lightboxClose = document.getElementById('lightbox-close');
        const lightboxPrev = document.getElementById('lightbox-prev');
        const lightboxNext = document.getElementById('lightbox-next');
        let currentIndex = 0;

        // Open lightbox when clicking on gallery item
        document.querySelectorAll('.gallery-page-item').forEach(item => {
            item.addEventListener('click', () => {
                currentIndex = parseInt(item.getAttribute('data-index'));
                openLightbox(currentIndex);
            });
        });

        function openLightbox(index) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
            updateLightboxImage(index);
        }

        function closeLightbox() {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        function updateLightboxImage(index) {
            currentIndex = index;
            lightboxImage.src = galleryImages[index].src;
            lightboxCaption.textContent = galleryImages[index].title;
        }

        function showPrevImage() {
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightboxImage(currentIndex);
        }

        function showNextImage() {
            currentIndex = (currentIndex + 1) % galleryImages.length;
            updateLightboxImage(currentIndex);
        }

        // Event listeners for lightbox controls
        lightboxClose.addEventListener('click', closeLightbox);
        lightboxPrev.addEventListener('click', showPrevImage);
        lightboxNext.addEventListener('click', showNextImage);

        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;

            if (e.key === 'Escape') {
                closeLightbox();
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        });
    }
});
