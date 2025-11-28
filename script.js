document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add a slight delay for the outline to create a trailing effect
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Gallery Population
    const galleryGrid = document.getElementById('gallery-grid');

    // TO ADD YOUR OWN IMAGES:
    // 1. Place your image files in the 'assets/gallery' folder.
    // 2. Add a new line below like: { src: 'assets/gallery/your-image-name.jpg', title: 'Your Title' },
    const galleryImages = [
        { src: 'assets/gallery/2.jpg', title: 'Captured Moment' },
        { src: 'assets/gallery/chath 1.jpg', title: 'Chath Festival' },
        { src: 'assets/gallery/3.JPG', title: 'Portrait' },
        { src: 'assets/gallery/4.JPG', title: 'Perspective' },
        { src: 'assets/gallery/5.jpg', title: 'Vibes' },
        { src: 'assets/gallery/6.jpg', title: 'Street Life' }
    ];

    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.classList.add('gallery-item');

        item.innerHTML = `
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="gallery-overlay">
                <span>${img.title}</span>
            </div>
        `;

        galleryGrid.appendChild(item);
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                nav.classList.remove('active');
            }
        });
    });
});
