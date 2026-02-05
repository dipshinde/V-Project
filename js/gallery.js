// Gallery Handler
const Gallery = {
  init() {
    this.grid = document.getElementById('gallery-grid');
    this.items = CONFIG.gallery.items;
    
    this.renderGallery();
    this.setupScrollAnimation();
  },
  
  renderGallery() {
    this.grid.innerHTML = this.items.map((item, index) => `
      <div class="gallery-item" data-index="${index}">
        ${item.type === 'gif' 
          ? `<img src="${item.url}" alt="${item.caption}" loading="lazy" />`
          : `<img src="${item.url}" alt="${item.caption}" loading="lazy" />`
        }
        <div class="gallery-caption">${item.caption}</div>
      </div>
    `).join('');
  },
  
  setupScrollAnimation() {
    const items = this.grid.querySelectorAll('.gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          // Changed: 500ms delay between each photo (was 100ms for every 3)
          // This gives time to "sink in" each photo
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 500);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    items.forEach(item => observer.observe(item));
  }
};

window.Gallery = Gallery;
