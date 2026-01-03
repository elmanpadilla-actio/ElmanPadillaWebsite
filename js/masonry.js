// Masonry layout utility
class MasonryLayout {
    constructor(containerSelector) {
        this.container = document.querySelector(containerSelector);
        if (!this.container) return;
        
        this.items = [];
        this.init();
    }
    
    init() {
        // For CSS column-based masonry, we don't need JS calculations
        // This class can be extended if you want JS-based masonry instead
        this.addResizeListener();
    }
    
    addResizeListener() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.relayout();
            }, 250);
        });
    }
    
    relayout() {
        // Trigger reflow if needed
        if (this.container) {
            this.container.style.columnCount = window.innerWidth < 640 ? '1' : 
                                               window.innerWidth < 1024 ? '2' : '3';
        }
    }
    
    addItem(element) {
        this.items.push(element);
        this.container.appendChild(element);
    }
    
    clear() {
        this.container.innerHTML = '';
        this.items = [];
    }
}

// Create masonry grid item
function createMasonryItem(data) {
    const item = document.createElement('div');
    item.className = 'masonry-item fade-in';
    item.dataset.year = data.year;
    item.dataset.id = data.id;
    
    const img = document.createElement('img');
    img.src = data.src;
    img.alt = data.title;
    img.loading = 'lazy';
    
    const caption = document.createElement('div');
    caption.className = 'masonry-caption';
    caption.innerHTML = `
        <h3>${data.title}</h3>
    `;
    
    item.appendChild(img);
    item.appendChild(caption);
    
    return item;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MasonryLayout, createMasonryItem };
}
