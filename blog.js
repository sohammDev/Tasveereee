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
            id: 2,
            image: 'assets/gallery/ganpati/blog.jpg',
            date: 'October 2024',
            title: 'Ganesh Aagman in Mumbai',
            excerpt: 'Witnessing the grand arrival of Lord Ganesh in Mumbai—a celebration of faith, devotion, and the vibrant spirit of the city during Ganesh Chaturthi.',
            images: [
                'assets/gallery/ganpati/1.jpg',
                'assets/gallery/ganpati/2.jpg',
                'assets/gallery/ganpati/3.jpg'
            ],
            content: `
                <p>Ganesh Chaturthi in Mumbai is not just a festival—it's an emotion, a celebration that transforms the entire city into a canvas of devotion and joy. Photographing the Ganesh Aagman (arrival) was one of the most exhilarating experiences of my photography journey.</p>
                
                <p>The streets come alive with the sound of dhol-tasha, the air thick with the fragrance of flowers and incense. From the grand pandals in Lalbaug and Girgaon to the intimate household celebrations, every corner of Mumbai resonates with "Ganpati Bappa Morya!"</p>
                
                <p>What struck me most was the sheer scale of devotion. Thousands of people gathering to welcome their beloved Ganpati, the elaborate decorations, the artistic creativity in each idol—every element told a story of faith and community. I captured the towering idols, the intricate craftsmanship, and the pure joy on devotees' faces.</p>
                
                <p>The technical challenge was immense—shooting in crowded spaces, managing the dynamic lighting from decorative lights, and capturing candid moments amidst the chaos. But every challenge was worth it when I saw the final images that truly captured the essence of Mumbai's Ganesh festival.</p>
                
                <p>This series is a tribute to Mumbai's spirit, to the artisans who create these magnificent idols, and to the millions who celebrate with unwavering devotion. Through my lens, I tried to preserve the magic of Ganesh Aagman—a celebration that unites the city in faith, joy, and togetherness.</p>
            `
        },

        {
            id: 3,
            image: 'assets/gallery/innocence/1.jpg',
            date: 'September 2024',
            title: 'Freedom & Confinement: A Street Story',
            excerpt: 'A powerful contrast captured on Mumbai streets—children playing freely despite poverty, while a privileged child looks trapped behind glass. Sometimes happiness isn\'t about what you have.',
            images: [
                'assets/gallery/innocence/1.jpg',
                'assets/gallery/innocence/2.jpg',
                'assets/gallery/innocence/3.jpg'
            ],
            content: `
                <p>This series captures one of the most profound moments I've experienced as a street photographer—a stark contrast that made me question everything about happiness, freedom, and privilege.</p>
                
                <p>On the streets of Mumbai, I photographed children who had nothing material to their names. They were beggars, living day to day, yet their faces radiated pure, unbridled joy. They played freely on the streets, laughed without inhibition, and found happiness in the simplest things—a game with stones, running barefoot, the companionship of friends.</p>
                
                <p>Then, in the same frame of time and space, I captured a child in a school bus. Well-dressed, presumably from a privileged background, with access to education and comfort. But through the window, his face told a different story—one of confinement, of being caged, of a childhood structured and controlled.</p>
                
                <p><strong>The Paradox of Freedom:</strong> The street children, despite their poverty, possessed something invaluable—freedom. Freedom to play, to explore, to be children. Meanwhile, the child behind the glass, despite all material advantages, seemed trapped in a system of schedules, expectations, and invisible bars.</p>
                
                <p><strong>What This Taught Me:</strong> This series isn't about romanticizing poverty or criticizing privilege. It's about recognizing that happiness and freedom aren't always found where we expect them. Sometimes, those with the least possess the most—joy, resilience, and an unbreakable spirit.</p>
                
                <p>As a photographer, my role isn't just to capture images, but to tell stories that make us think, question, and reflect. These photographs challenge our assumptions about what it means to be truly free, truly happy, and truly alive.</p>
                
                <p>The streets taught me that childhood should be about freedom, laughter, and discovery—not confinement, pressure, and conformity. Perhaps we all need to learn from those children playing freely on the streets, finding joy in the moment, unburdened by the weight of expectations.</p>
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
                'assets/gallery/3.JPG',
                'assets/gallery/4.JPG'
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
            image: 'assets/gallery/4.JPG',
            date: 'July 2024',
            title: 'Capturing Vibes',
            excerpt: 'Photography isn\'t just about what you see, it\'s about what you feel. This image captures a mood, a moment, a vibe that resonates with the soul.',
            images: [
                'assets/gallery/republic day/1.JPG',
                'assets/gallery/republic day/2.JPG',
                'assets/gallery/republic day/3.JPG'
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
                'assets/gallery/3.JPG'
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
