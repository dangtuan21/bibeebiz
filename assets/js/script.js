// Vanilla JavaScript for Bibeebiz website

// Mobile menu toggle function
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
}

// Smooth scrolling for anchor links
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

// Form validation for contact forms
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return true;

    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('border-red-500');
            isValid = false;
        } else {
            input.classList.remove('border-red-500');
        }
    });

    // Email validation
    const emailInput = form.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('border-red-500');
            isValid = false;
        }
    }

    return isValid;
}

// Contact form submission (placeholder - would integrate with service like Formspree)
function submitContactForm() {
    if (validateForm('contact-form')) {
        alert('Thank you for your message! We will get back to you soon.');
        // In production, this would send data to a backend service
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill in all required fields correctly.');
    }
}

// Newsletter signup (placeholder)
function subscribeNewsletter() {
    const email = document.getElementById('newsletter-email').value;
    if (email) {
        alert('Thank you for subscribing to our newsletter!');
        document.getElementById('newsletter-email').value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('Bibeebiz website loaded successfully!');
});
