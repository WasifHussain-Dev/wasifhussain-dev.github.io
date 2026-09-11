// =========================================
// 1. MOBILE NAVIGATION TOGGLE
// =========================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking a nav link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// =========================================
// 2. NAVBAR SCROLL EFFECT
// =========================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =========================================
// 3. ACTIVE SECTION HIGHLIGHTING
// =========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= (sectionTop - 250)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// =========================================
// 4. TYPING EFFECT (Hero Section)
// =========================================
const typingText = document.querySelector('.typing-text');
const textToType = "Flutter & Android Developer";
let charIndex = 0;

function type() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Speed of typing
    }
}
// Start typing after a short delay so the page loads first
setTimeout(type, 1000);

// =========================================
// 5. SCROLL REVEAL ANIMATIONS
// =========================================
// Elements are already classed with 'reveal' and delays in HTML
const revealOptions = {
    threshold: 0.15, 
    rootMargin: "0px 0px -50px 0px" 
};

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Stop observing once revealed for better performance
            observer.unobserve(entry.target); 
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

document.querySelectorAll('.reveal').forEach(el => {
    revealObserver.observe(el);
});

// =========================================
// 6. AUTOMATIC FOOTER YEAR
// =========================================
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}