// Mobile Navigation Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navList = document.querySelector('.nav-list');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navList.classList.toggle('active');
    });
}

// Dropdown toggles for mobile
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = toggle.parentElement;
            dropdown.classList.toggle('active');
        }
    });
});

// Header scroll effect
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Generate floating images for hero section
const heroImages = document.getElementById('hero-images');
if (heroImages) {
    // Collect images from all loaded galleries
    const allImages = [];
    
    // Photography images
    if (typeof galleryData !== 'undefined') {
        allImages.push(...galleryData.map(item => item.src));
    }
    if (typeof colorGalleryData !== 'undefined') {
        allImages.push(...colorGalleryData.map(item => item.src));
    }
    if (typeof streetGalleryData !== 'undefined') {
        allImages.push(...streetGalleryData.map(item => item.src));
    }
    if (typeof commercialGalleryData !== 'undefined') {
        allImages.push(...commercialGalleryData.map(item => item.src));
    }
    if (typeof photographicsGalleryData !== 'undefined') {
        allImages.push(...photographicsGalleryData.map(item => item.src));
    }
    
    // Art images
    if (typeof drawingGalleryData !== 'undefined') {
        allImages.push(...drawingGalleryData.map(item => item.src));
    }
    if (typeof illustrationsGalleryData !== 'undefined') {
        allImages.push(...illustrationsGalleryData.map(item => item.src));
    }
    if (typeof paintingsGalleryData !== 'undefined') {
        allImages.push(...paintingsGalleryData.map(item => item.src));
    }
    if (typeof installationsGalleryData !== 'undefined') {
        allImages.push(...installationsGalleryData.map(item => item.src));
    }
    
    // Select 18 random images
    const selectedImages = [];
    const imagesCopy = [...allImages];
    for (let i = 0; i < 18 && imagesCopy.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * imagesCopy.length);
        selectedImages.push(imagesCopy[randomIndex]);
        imagesCopy.splice(randomIndex, 1);
    }
    
    // Create floating image elements
    selectedImages.forEach((imageSrc, index) => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.classList.add('hero-floating-img');
        img.alt = 'Portfolio work';
        
        // Random vertical position between -10% and 50%
        const topPosition = Math.random() * 60 - 10;
        img.style.top = `${topPosition}%`;
        
        // Horizontal position staggered from right
        img.style.left = `${100 + (index * 12)}%`;
        
        // Random animation
        const animations = ['scrollLeft1', 'scrollLeft2', 'scrollLeft3'];
        const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
        const duration = 20 + Math.random() * 15; // 20-35 seconds
        const delay = index * 1.5; // Stagger delays
        
        img.style.animation = `${randomAnimation} ${duration}s linear ${delay}s infinite`;
        
        heroImages.appendChild(img);
        
        // Add active class with delay for fade-in
        setTimeout(() => {
            img.classList.add('active');
        }, index * 200);
    });
}

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});
