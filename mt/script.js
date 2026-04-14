// Professional MT-15 Showroom JS Features
// Features: Mobile menu toggle, Image slider/carousel, Product modal, Smooth scroll, Scroll animations, Form validation

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Image slider/carousel
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');
    let currentSlide = 0;
    const maxSlides = slides.length;

    if (slides.length > 0) {
        // Create dots
        dotsContainer.innerHTML = '';
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        updateDots();

        // Next/Prev
        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Auto slide
        setInterval(nextSlide, 5000);
    }

    function goToSlide(slide) {
        slides.forEach((s, i) => s.classList.toggle('active', i === slide));
        currentSlide = slide;
        updateDots();
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % maxSlides);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + maxSlides) % maxSlides);
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, i) => dot.classList.toggle('active', i === currentSlide));
    }

    // Product modal
    const productCards = document.querySelectorAll('.product-card');
    const modal = document.querySelector('.modal');
    const modalImg = document.querySelector('.modal-img');
    const modalClose = document.querySelector('.modal-close');
    const modalContent = document.querySelector('.modal-content');

    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const imgSrc = card.querySelector('img').src;
            const title = card.querySelector('h3').textContent;
            const desc = card.querySelector('p').textContent;
            modalImg.src = imgSrc;
            modalContent.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
            modal.style.display = 'flex';
        });
    });

    if (modalClose) modalClose.addEventListener('click', () => modal.style.display = 'none');
    if (modal) window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^=\"#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Scroll animations (fade in)
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // Contact form validation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            if (name && email && message && /\S+@\S+\.\S+/.test(email)) {
                alert('Thank you! Message sent successfully.');
                contactForm.reset();
            } else {
                alert('Please fill all fields correctly.');
            }
        });
    }
});

