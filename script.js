// FAQ Accordion Functionality
document.addEventListener('DOMContentLoaded', function() {

    // FAQ Toggle
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // Smooth Scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Movie Card Hover Effect Enhancement
    const movieCards = document.querySelectorAll('.movie-card');

    movieCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // Category Navigation Active State
    const categoryItems = document.querySelectorAll('.category-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            categoryItems.forEach(cat => cat.classList.remove('active-category'));
            // Add active class to clicked item
            this.classList.add('active-category');
        });
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all major sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // CTA Button Click Handler
    const ctaButtons = document.querySelectorAll('.cta-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Add a ripple effect or navigate to subscription page
            console.log('CTA Button clicked - Navigate to subscription');
            // You can add actual navigation logic here
        });
    });

    // Plan Card Selection
    const planCards = document.querySelectorAll('.plan-card');

    planCards.forEach(card => {
        card.addEventListener('click', function() {
            planCards.forEach(c => c.classList.remove('selected-plan'));
            this.classList.add('selected-plan');
            console.log('Plan selected:', this.querySelector('.plan-title').textContent);
        });
    });

    // Lazy Loading for Images
    const images = document.querySelectorAll('img[src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.opacity = '0';
                img.style.transition = 'opacity 0.5s ease';

                img.onload = function() {
                    img.style.opacity = '1';
                };

                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-background');

        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Live badge pulsing animation
    const liveBadge = document.querySelector('.live-badge');
    if (liveBadge) {
        setInterval(() => {
            liveBadge.style.transform = 'scale(1.05)';
            setTimeout(() => {
                liveBadge.style.transform = 'scale(1)';
            }, 500);
        }, 2000);
    }

});

// Additional utility functions

// Function to filter movies by category
function filterMoviesByCategory(category) {
    console.log('Filtering movies by category:', category);
    // Add your filtering logic here
}

// Function to handle video playback
function playVideo(videoId) {
    console.log('Playing video:', videoId);
    // Add your video playback logic here
}

// Function to handle subscription
function handleSubscription(planType) {
    console.log('Subscribing to plan:', planType);
    // Add your subscription logic here
}
