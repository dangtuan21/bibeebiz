// Vanilla JavaScript for Bibeebiz website - Professional Version

// Mobile menu toggle function with animations
let menuOpen = false;

function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const line1 = document.getElementById('menu-line-1');
    const line2 = document.getElementById('menu-line-2');
    const line3 = document.getElementById('menu-line-3');
    
    menuOpen = !menuOpen;
    
    if (menuOpen) {
        mobileMenu.classList.remove('hidden');
        mobileMenu.classList.add('opacity-100', 'scale-100');
        
        // Animate hamburger to X
        line1.classList.add('rotate-45', 'translate-y-1.5');
        line2.classList.add('opacity-0');
        line3.classList.add('-rotate-45', '-translate-y-1.5');
    } else {
        mobileMenu.classList.add('opacity-0', 'scale-95');
        setTimeout(() => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('opacity-100', 'scale-100');
        }, 300);
        
        // Animate X back to hamburger
        line1.classList.remove('rotate-45', 'translate-y-1.5');
        line2.classList.remove('opacity-0');
        line3.classList.remove('-rotate-45', '-translate-y-1.5');
    }
}

// Highlight active menu item
function highlightActiveMenu() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    // Map of page names to menu links
    const menuMap = {
        'index.html': 'Home',
        'about.html': 'About',
        'services.html': 'Services',
        'portfolio.html': 'Portfolio',
        'contact.html': 'Contact'
    };
    
    const activeMenuText = menuMap[currentPath];
    
    if (activeMenuText) {
        // Find and highlight desktop navigation links
        const desktopLinks = document.querySelectorAll('nav a');
        desktopLinks.forEach(link => {
            if (link.textContent.trim() === activeMenuText) {
                link.classList.add('active');
                // Remove the bottom border animation since we have active state
                link.querySelector('div').style.width = '100%';
            }
        });
        
        // Find and highlight mobile navigation links
        const mobileLinks = document.querySelectorAll('#mobile-menu a');
        mobileLinks.forEach(link => {
            if (link.textContent.trim() === activeMenuText) {
                link.classList.add('active');
            }
        });
    }
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
    
    // Highlight active menu item
    highlightActiveMenu();
});
