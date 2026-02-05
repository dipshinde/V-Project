// Timeline Handler
const Timeline = {
  init() {
    this.container = document.getElementById('timeline-container');
    this.events = CONFIG.timeline.events;
    
    this.renderTimeline();
    this.setupScrollAnimation();
  },
  
  renderTimeline() {
    this.container.innerHTML = this.events.map((event, index) => `
      <div class="timeline-item" data-index="${index}">
        <div class="timeline-date">${event.date}</div>
        <div class="timeline-title">${event.title}</div>
        <div class="timeline-description">${event.description}</div>
      </div>
    `).join('');
  },
  
  setupScrollAnimation() {
    const items = this.container.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          // CHANGED: 800ms delay between each timeline item (was 100ms)
          // Makes it slow and smooth, giving time to read and absorb each moment
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 800);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    
    items.forEach(item => observer.observe(item));
  }
};

window.Timeline = Timeline;
