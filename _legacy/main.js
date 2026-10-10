document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
                if (navToggle) {
                    const icon = navToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    if (window.AOS) {
        AOS.init({
            once: true,
            duration: 800,
            easing: 'ease-out-cubic'
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const offset = targetElement.offsetTop - 80;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                return;
            }

            alert(`Thank you, ${name}! Your message has been sent successfully. I will get back to you soon.`);
            contactForm.reset();
        });
    }

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
    }

    if (header) {
        window.addEventListener('scroll', function() {
            header.classList.toggle('header-scrolled', window.scrollY > 20);
        });
    }

    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
        let isDragging = false;
        let startX = 0;
        let scrollStart = 0;

        testimonialsContainer.addEventListener('pointerdown', function(event) {
            isDragging = true;
            testimonialsContainer.classList.add('dragging');
            startX = event.pageX - testimonialsContainer.offsetLeft;
            scrollStart = testimonialsContainer.scrollLeft;
            testimonialsContainer.setPointerCapture(event.pointerId);
        });

        testimonialsContainer.addEventListener('pointermove', function(event) {
            if (!isDragging) return;
            const x = event.pageX - testimonialsContainer.offsetLeft;
            const delta = x - startX;
            testimonialsContainer.scrollLeft = scrollStart - delta;
        });

        const stopDragging = function(event) {
            if (!isDragging) return;
            isDragging = false;
            testimonialsContainer.classList.remove('dragging');
            testimonialsContainer.releasePointerCapture(event.pointerId);
        };

        testimonialsContainer.addEventListener('pointerup', stopDragging);
        testimonialsContainer.addEventListener('pointercancel', stopDragging);
        testimonialsContainer.addEventListener('pointerleave', stopDragging);
    }
});
