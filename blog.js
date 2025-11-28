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

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // Blog Posts Data with multiple images and full content
    const blogPosts = [
        {
            id: 1,
            image: 'assets/gallery/chath 1.jpg',
            date: 'November 2024',
            title: 'The Magic of Chhath Puja',
            excerpt: 'Witnessing the devotion and beauty of Chhath Puja through my lens. The golden hour light reflecting off the water created a surreal atmosphere that I\'ll never forget.',
            images: [
                'assets/gallery/chath pooja/chath 2.jpg',
                'assets/gallery/chath pooja/chath 3.jpg',
                'assets/gallery/chath pooja/chath 4.jpg'
            ],
            content: `
                <p>Chhath Puja is one of the most ancient and sacred festivals, and photographing it was a deeply moving experience. The devotion of the people, the golden hour light, and the serene water bodies created a perfect canvas for storytelling through photography.</p>
                
                <p>What struck me most was the dedication of the devotees. Standing in the water for hours, offering prayers to the setting and rising sun, their faith was palpable. As a photographer, I tried to capture not just the visuals, but the emotion and spirituality of the moment.</p>
                
                <p>The technical challenge was balancing the harsh sunlight with the shadows. I used a combination of natural light and careful positioning to ensure the subjects were well-lit while maintaining the dramatic atmosphere. The reflections in the water added an extra dimension to the compositions.</p>
                <p>Children are the most honest subjects in photography. They don't pose, they don't pretend—they simply are. This authenticity creates images that resonate with viewers on a deep emotional level.</p>
                
                <p>During this shoot, I learned to be patient and observant. Instead of directing, I became invisible, allowing the children to play and express themselves naturally. The best shots came when they forgot about the camera entirely.</p>
                
                <p>The lighting was soft and natural, creating a gentle atmosphere that complemented their innocence. I chose to shoot at their eye level, which helped create a more intimate and engaging perspective.</p>
                
                <p>These images remind me why I fell in love with photography—the ability to freeze fleeting moments of pure joy and wonder.</p>
            `
        },
        {
            id: 3,
            image: 'assets/gallery/2.jpg',
            date: 'September 2024',
            title: 'Urban Exploration',
            excerpt: 'Exploring the hidden corners of the city, finding beauty in the mundane. Every street has a story waiting to be told through photography.',
            images: [
                'assets/gallery/2.jpg',
                'assets/gallery/6.jpg',
                'assets/gallery/chath 1.jpg'
            ],
            content: `
                <p>Cities are living, breathing organisms with countless stories hidden in plain sight. My urban exploration series focuses on finding beauty in the everyday—the play of light on old buildings, the patterns in architecture, and the human element that brings it all to life.</p>
                
                <p>I spent weeks wandering the streets, observing how light changes throughout the day and how people interact with their environment. The key was to look beyond the obvious tourist spots and find the authentic character of the city.</p>
                
                <p>Street photography requires a different mindset. You need to be quick, decisive, and respectful. I always try to capture candid moments that tell a story about the place and its people.</p>
                
                <p>This project taught me that extraordinary images can be found in the most ordinary places—you just need to train your eye to see them.</p>
            `
        },
        {
            id: 4,
            image: 'assets/gallery/6.jpg',
            date: 'August 2024',
            title: 'Perspectives',
            excerpt: 'Sometimes changing your perspective can reveal entirely new worlds. This shot taught me to always look at things from different angles.',
            images: [
                'assets/gallery/6.jpg',
                'assets/gallery/3.jpg',
                'assets/gallery/4.jpg'
            ],
            content: `
                <p>Perspective is everything in photography. The same subject can tell completely different stories depending on the angle, distance, and framing you choose. This series explores how changing your viewpoint can transform the ordinary into the extraordinary.</p>
                
                <p>I experimented with low angles, high angles, and unconventional compositions. Sometimes I got down on the ground, other times I climbed to elevated positions. Each perspective revealed something new about the subject.</p>
                
                <p>The technical aspects were challenging—shooting from unusual angles often means dealing with difficult lighting and focusing situations. But the results were worth it, creating images that make viewers pause and look twice.</p>
                
                <p>This project reinforced an important lesson: never settle for the first shot. Move around, explore different angles, and you'll discover perspectives you never imagined.</p>
            `
        },
        {
            id: 5,
            image: 'assets/gallery/4.jpg',
            date: 'July 2024',
            title: 'Capturing Vibes',
            excerpt: 'Photography isn\'t just about what you see, it\'s about what you feel. This image captures a mood, a moment, a vibe that resonates with the soul.',
            images: [
                'assets/gallery/republic day/1.jpg',
                'assets/gallery/republic day/2.jpg',
                'assets/gallery/republic day/3.jpg'
            ],
            content: `
                <p>Some photographs transcend visual documentation—they capture a feeling, an atmosphere, a vibe. This series is about those intangible qualities that make an image resonate emotionally with viewers.</p>
                
                <p>Creating mood in photography requires attention to multiple elements: lighting, color palette, composition, and timing. I waited for the perfect moment when all these elements aligned to create the desired atmosphere.</p>
                
                <p>Post-processing played a crucial role in enhancing the mood. Subtle adjustments to color grading, contrast, and tone helped emphasize the emotional quality of each image without making them look over-processed.</p>
                
                <p>These images remind me that technical perfection is secondary to emotional impact. A photograph that makes you feel something will always be more powerful than one that's merely technically perfect.</p>
            `
        },
        {
            id: 6,
            image: 'assets/gallery/5.jpg',
            date: 'June 2024',
            title: 'Moments in Rain',
            excerpt: 'Rain brings a unique atmosphere to photography. The way light dances through raindrops and creates reflections is pure magic.',
            images: [
                'assets/gallery/5.jpg',
                'assets/gallery/6.jpg',
                'assets/gallery/3.jpg'
            ],
            content: `
                <p>Rain transforms the world into a photographer's playground. The wet surfaces create reflections, the diffused light softens everything, and the atmosphere becomes charged with emotion and drama.</p>
                
                <p>Shooting in the rain presents technical challenges—protecting your gear, dealing with low light, and managing reflections. But these challenges are worth it for the unique images you can create.</p>
                
                <p>I love how rain changes people's behavior and expressions. There's a certain vulnerability and authenticity that emerges when people are caught in the rain, creating genuine moments worth capturing.</p>
                
                <p>This series celebrates the beauty of rainy days and proves that you don't need perfect weather to create perfect photographs. Sometimes the best images come from embracing the elements.</p>
            `
        }
    ];

    // Populate Blog Grid
    const blogGrid = document.getElementById('blog-grid');

    if (blogGrid) {
        blogPosts.forEach(post => {
            const blogCard = document.createElement('div');
            blogCard.classList.add('blog-card');
            blogCard.setAttribute('data-post-id', post.id);

            blogCard.innerHTML = `
                <img src="${post.image}" alt="${post.title}" class="blog-card-image" loading="lazy">
                <div class="blog-card-content">
                    <div class="blog-card-date">${post.date}</div>
                    <h3 class="blog-card-title">${post.title}</h3>
                    <p class="blog-card-excerpt">${post.excerpt}</p>
                    <a href="#" class="blog-card-link" data-post-id="${post.id}">Read More</a>
                </div>
                <div class="blog-card-expanded" style="display: none;">
                    <button class="blog-close-btn">×</button>
                    <div class="blog-expanded-images">
                        ${post.images.map(img => `<img src="${img}" alt="${post.title}" class="blog-expanded-image">`).join('')}
                    </div>
                    <div class="blog-expanded-content">
                        <h2>${post.title}</h2>
                        <div class="blog-expanded-date">${post.date}</div>
                        ${post.content}
                    </div>
                </div>
            `;

            blogGrid.appendChild(blogCard);
        });

        // Add click event to expand blog cards
        document.querySelectorAll('.blog-card-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const postId = e.target.getAttribute('data-post-id');
                const blogCard = document.querySelector(`.blog-card[data-post-id="${postId}"]`);
                const expandedSection = blogCard.querySelector('.blog-card-expanded');
                const cardContent = blogCard.querySelector('.blog-card-content');
                const cardImage = blogCard.querySelector('.blog-card-image');

                // Toggle expansion
                if (expandedSection.style.display === 'none') {
                    expandedSection.style.display = 'block';
                    cardContent.style.display = 'none';
                    cardImage.style.display = 'none';
                    blogCard.classList.add('expanded');

                    // Scroll to the card
                    blogCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Add click event to close buttons
        document.querySelectorAll('.blog-close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const blogCard = e.target.closest('.blog-card');
                const expandedSection = blogCard.querySelector('.blog-card-expanded');
                const cardContent = blogCard.querySelector('.blog-card-content');
                const cardImage = blogCard.querySelector('.blog-card-image');

                expandedSection.style.display = 'none';
                cardContent.style.display = 'block';
                cardImage.style.display = 'block';
                blogCard.classList.remove('expanded');
            });
        });
    }
});
