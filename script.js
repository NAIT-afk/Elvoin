// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
});

// Animated Counter
const counters = document.querySelectorAll('.counter');
const speed = 200;

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target + '+';
    }
};

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate counters
            if (entry.target.classList.contains('counter')) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
            
            // Fade in elements
            if (entry.target.classList.contains('stat-card') ||
                entry.target.classList.contains('feature-card') ||
                entry.target.classList.contains('service-card') ||
                entry.target.classList.contains('gallery-item') ||
                entry.target.classList.contains('blog-card')) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
counters.forEach(counter => observer.observe(counter));
document.querySelectorAll('.stat-card, .feature-card, .service-card, .gallery-item, .blog-card')
    .forEach(el => observer.observe(el));

// Floating cursor effect for hero section
const hero = document.querySelector('.hero');
if (hero) {
    const floatingElements = document.querySelectorAll('.float-item');
    
    hero.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        floatingElements.forEach((el, index) => {
            const speed = (index + 1) * 20;
            const xMove = (x - 0.5) * speed;
            const yMove = (y - 0.5) * speed;
            el.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
}

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxContent = lightbox?.querySelector('.lightbox-content');
const lightboxClose = lightbox?.querySelector('.lightbox-close');

galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Testimonials Carousel
const testimonialCards = document.querySelectorAll('.testimonial-card');
const carouselPrev = document.querySelector('.carousel-btn.prev');
const carouselNext = document.querySelector('.carousel-btn.next');
const carouselDots = document.querySelector('.carousel-dots');

let currentTestimonial = 0;

// Create dots
if (carouselDots && testimonialCards.length > 0) {
    testimonialCards.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.style.width = '10px';
        dot.style.height = '10px';
        dot.style.borderRadius = '50%';
        dot.style.background = index === 0 ? 'var(--primary-color)' : 'var(--gray)';
        dot.style.cursor = 'pointer';
        dot.style.transition = 'all 0.3s ease';
        dot.addEventListener('click', () => showTestimonial(index));
        carouselDots.appendChild(dot);
    });
}

function showTestimonial(index) {
    testimonialCards.forEach(card => card.classList.remove('active'));
    if (testimonialCards[index]) {
        testimonialCards[index].classList.add('active');
    }
    
    // Update dots
    const dots = carouselDots?.querySelectorAll('span');
    if (dots) {
        dots.forEach((dot, i) => {
            dot.style.background = i === index ? 'var(--primary-color)' : 'var(--gray)';
        });
    }
    
    currentTestimonial = index;
}

if (carouselPrev) {
    carouselPrev.addEventListener('click', () => {
        currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : testimonialCards.length - 1;
        showTestimonial(currentTestimonial);
    });
}

if (carouselNext) {
    carouselNext.addEventListener('click', () => {
        currentTestimonial = currentTestimonial < testimonialCards.length - 1 ? currentTestimonial + 1 : 0;
        showTestimonial(currentTestimonial);
    });
}

// Auto-rotate testimonials
if (testimonialCards.length > 0) {
    setInterval(() => {
        currentTestimonial = currentTestimonial < testimonialCards.length - 1 ? currentTestimonial + 1 : 0;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Gallery Slider (About page)
const sliderPrev = document.querySelector('.slider-btn.prev');
const sliderNext = document.querySelector('.slider-btn.next');
const sliderTrack = document.querySelector('.slider-track');
let currentSlide = 0;

if (sliderPrev && sliderNext && sliderTrack) {
    const slides = sliderTrack.querySelectorAll('.slide');
    
    sliderNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    });
    
    sliderPrev.addEventListener('click', () => {
        currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
        updateSlider();
    });
    
    function updateSlider() {
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
        sliderTrack.style.transition = 'transform 0.5s ease';
    }
}

// Form Submissions
const orderForm = document.getElementById('orderForm');
const contactForm = document.getElementById('contactForm');
const reviewForm = document.getElementById('reviewForm');

// Form Submissions with AJAX to prevent redirect
async function submitFormToFormspree(form, successMessage) {
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showSuccessMessage(successMessage);
            form.reset();
        } else {
            alert('Oops! There was a problem submitting your form. Please try again.');
        }
    } catch (error) {
        alert('Oops! There was a problem submitting your form. Please try again.');
    }
}

function showSuccessMessage(message) {
    // Create success banner
    const banner = document.createElement('div');
    banner.className = 'success-banner';
    banner.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    document.body.appendChild(banner);
    
    // Show banner
    setTimeout(() => {
        banner.classList.add('show');
    }, 100);
    
    // Hide and remove banner after 5 seconds
    setTimeout(() => {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.remove();
        }, 300);
    }, 5000);
}

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitFormToFormspree(orderForm, "Thank you for ordering, We'll contact you soon");
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitFormToFormspree(contactForm, "Thank you for your message! We'll get back to you soon");
    });
}

if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitFormToFormspree(reviewForm, "Thank you for your review! We appreciate your feedback");
    });
}

// Newsletter Form
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        form.reset();
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Parallax Effect for Hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add animation class when elements come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.process-step, .mv-card, .special-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateX(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Set initial states for animated elements
    document.querySelectorAll('.process-step, .mv-card, .special-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-30px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    // Trigger initial animation check
    animateOnScroll();
});

console.log('Elvoin Bakes website loaded successfully!');


// Floating Message Icon Rotation and Popup
const floatingMessage = document.getElementById('floatingMessage');
const messageIconCircle = document.querySelector('.message-icon-circle');
const messagePopup = document.getElementById('messagePopup');

if (floatingMessage && messageIconCircle) {
    messageIconCircle.addEventListener('mouseenter', () => {
        messageIconCircle.style.animation = 'rotate 0.6s ease-in-out';
        setTimeout(() => {
            messageIconCircle.style.animation = 'pulse 2s infinite';
        }, 600);
    });
    
    // Click to toggle popup on mobile
    messageIconCircle.addEventListener('click', () => {
        if (messagePopup.style.opacity === '1') {
            messagePopup.style.opacity = '0';
            messagePopup.style.visibility = 'hidden';
            messagePopup.style.transform = 'translateY(20px)';
        } else {
            messagePopup.style.opacity = '1';
            messagePopup.style.visibility = 'visible';
            messagePopup.style.transform = 'translateY(0)';
        }
    });
}

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (floatingMessage && !floatingMessage.contains(e.target)) {
        if (messagePopup) {
            messagePopup.style.opacity = '0';
            messagePopup.style.visibility = 'hidden';
            messagePopup.style.transform = 'translateY(20px)';
        }
    }
});

// Enhanced parallax for hero
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.4}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
    }
    
    lastScrollTop = scrolled;
});

// Gallery Slideshow on Home Page
const galleryCarousel = document.getElementById('galleryCarousel');
const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');
const galleryDotsContainer = document.getElementById('galleryDots');

if (galleryCarousel) {
    const slides = galleryCarousel.querySelectorAll('.gallery-slide');
    let currentSlide = 0;
    
    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('gallery-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        galleryDotsContainer.appendChild(dot);
    });
    
    const dots = galleryDotsContainer.querySelectorAll('.gallery-dot');
    
    function updateSlideshow() {
        galleryCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlideshow();
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlideshow();
    }
    
    function goToSlide(index) {
        currentSlide = index;
        updateSlideshow();
    }
    
    // Auto-advance slideshow every 4 seconds
    setInterval(nextSlide, 4000);
}

console.log('Elvoin Bakes website loaded successfully!');
