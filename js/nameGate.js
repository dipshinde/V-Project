// Name Gate Handler
const NameGate = {
  init() {
    this.nameInput = document.getElementById('name-input');
    this.nameSubmit = document.getElementById('name-submit');
    this.nameGateSection = document.getElementById('name-gate');
    this.heroSection = document.getElementById('hero');
    
    // Initialize particles for name gate
    initParticles('particles-bg');
    
    this.bindEvents();
  },
  
  bindEvents() {
    // Submit on button click
    this.nameSubmit.addEventListener('click', () => this.handleSubmit());
    
    // Submit on Enter key
    this.nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.handleSubmit();
      }
    });
    
    // Auto-focus input
    setTimeout(() => {
      this.nameInput.focus();
    }, 500);
  },
  
  handleSubmit() {
    const name = this.nameInput.value.trim();
    
    if (!name) {
      this.nameInput.style.borderColor = '#ff6b9d';
      this.nameInput.placeholder = 'Please enter your name 💕';
      return;
    }
    
    // Store the name
    window.userName = name;
    
    // Animate transition
    this.nameGateSection.style.opacity = '0';
    this.nameGateSection.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
      this.nameGateSection.classList.add('hidden');
      this.showHero(name);
    }, 600);
  },
  
  showHero(name) {
    // Update hero with personalized name
    document.getElementById('user-name').textContent = name;
    
    // Show hero section
    this.heroSection.classList.remove('hidden');
    
    // Initialize hero particles
    initParticles('hero-particles');
    
    setTimeout(() => {
      this.heroSection.classList.add('show');
    }, 50);
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  NameGate.init();
});
