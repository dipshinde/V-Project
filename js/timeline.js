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
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 100);
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
