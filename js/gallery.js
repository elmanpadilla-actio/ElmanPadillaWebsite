// Gallery functionality
let currentImageIndex = 0;
let currentGalleryData = [];

function initGallery(data) {
    currentGalleryData = data;
    const gridContainer = document.getElementById('gallery-grid');
    
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    data.forEach((item, index) => {
        const masonryItem = createMasonryItem(item);
        masonryItem.addEventListener('click', () => openLightbox(index));
        gridContainer.appendChild(masonryItem);
    });
    
    initFadeInObserver();
}

function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    
    const item = currentGalleryData[currentImageIndex];
    
    lightboxImage.src = item.src;
    lightboxImage.alt = item.title;
    lightboxCaption.innerHTML = `
        <h3>${item.title}</h3>
        ${item.description ? `<p>${item.description}</p>` : ''}
    `;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentGalleryData.length;
    openLightbox(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentGalleryData.length) % currentGalleryData.length;
    openLightbox(currentImageIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const lightbox = document.getElementById('lightbox');
    
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
    if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
    
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        else if (e.key === 'ArrowRight') nextImage();
        else if (e.key === 'ArrowLeft') prevImage();
    });
    
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
    
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                toggle.parentElement.classList.toggle('active');
            }
        });
    });
});

function initFadeInObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });
}
