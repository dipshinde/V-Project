// Hero Section Handler
const Hero = {
  init() {
    this.yesBtn = document.getElementById('yes-btn');
    this.noBtn = document.getElementById('no-btn');
    this.heroSection = document.getElementById('hero');
    this.celebrationSection = document.getElementById('celebration');
    this.finalChoiceSection = document.getElementById('final-choice');
    
    this.escapeCount = 0;
    this.maxEscapes = 5;
    this.isYesClicked = false;
    
    this.bindEvents();
  },
  
  bindEvents() {
    // YES button click
    this.yesBtn.addEventListener('click', () => this.handleYes());
    
    // NO button click attempt (dodge on click)
    this.noBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.dodgeNo();
    });
    
    // Optional: Also dodge on hover for extra playfulness
    this.noBtn.addEventListener('mouseenter', () => {
      if (this.escapeCount < this.maxEscapes && !this.isYesClicked) {
        this.dodgeNo();
      }
    });
  },
  
  dodgeNo() {
    if (this.isYesClicked) return;
    
    this.escapeCount++;
    
    // Grow YES button
    const scale = Math.min(1 + this.escapeCount * 0.2, 2);
    this.yesBtn.style.transform = `scale(${scale})`;
    
    // After max escapes, remove NO button
    if (this.escapeCount >= this.maxEscapes) {
      this.noBtn.style.opacity = '0';
      this.noBtn.style.transform = 'scale(0)';
      setTimeout(() => {
        this.noBtn.style.display = 'none';
      }, 300);
      return;
    }
    
    // Move NO button to random position
    const heroRect = this.heroSection.getBoundingClientRect();
    const btnRect = this.noBtn.getBoundingClientRect();
    
    const maxX = window.innerWidth - btnRect.width - 40;
    const maxY = window.innerHeight - btnRect.height - 40;
    
    const newX = Math.random() * maxX + 20;
    const newY = Math.random() * maxY + 20;
    
    this.noBtn.style.position = 'fixed';
    this.noBtn.style.left = newX + 'px';
    this.noBtn.style.top = newY + 'px';
    this.noBtn.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
  },
  
  handleYes() {
    this.isYesClicked = true;
    
    // Trigger celebration burst
    this.triggerBurst();
    
    // Show celebration
    setTimeout(() => {
      this.showCelebration();
    }, 600);
  },
  
  triggerBurst() {
    const burstContainer = document.getElementById('burst-container');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // Create hearts
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.className = 'burst-heart';
      heart.innerText = ['💖', '💕', '💗', '💓'][Math.floor(Math.random() * 4)];
      
      const angle = (Math.PI * 2 * i) / 20;
      const distance = Math.random() * 100 + 50;
      
      heart.style.left = centerX + Math.cos(angle) * distance + 'px';
      heart.style.top = centerY + Math.sin(angle) * distance + 'px';
      heart.style.animationDelay = Math.random() * 0.3 + 's';
      
      burstContainer.appendChild(heart);
    }
    
    // Create confetti
    const colors = ['#ff6b9d', '#ff8fb3', '#ffb3c6', '#ffd1dc', '#fff'];
    for (let i = 0; i < 30; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'burst-confetti';
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      confetti.style.left = centerX + (Math.random() * 200 - 100) + 'px';
      confetti.style.top = centerY + (Math.random() * 100 - 50) + 'px';
      confetti.style.animationDelay = Math.random() * 0.2 + 's';
      
      burstContainer.appendChild(confetti);
    }
    
    // Cleanup
    setTimeout(() => {
      burstContainer.innerHTML = '';
    }, 2000);
  },
  
  showCelebration() {
    // Hide hero
    this.heroSection.style.opacity = '0';
    
    setTimeout(() => {
      this.heroSection.classList.add('hidden');
      
      // Show celebration
      this.celebrationSection.classList.remove('hidden');
      
      // After celebration, show final choice
      setTimeout(() => {
        this.showFinalChoice();
      }, 3000);
    }, 600);
  },
  
  showFinalChoice() {
    // Hide celebration
    this.celebrationSection.style.opacity = '0';
    
    setTimeout(() => {
      this.celebrationSection.classList.add('hidden');
      
      // Show final choice
      this.finalChoiceSection.classList.remove('hidden');
      setTimeout(() => {
        this.finalChoiceSection.classList.add('show');
      }, 50);
      
      // Bind final choice events
      this.bindFinalChoice();
    }, 600);
  },
  
  bindFinalChoice() {
    const finalNoBtn = document.getElementById('final-no-btn');
    const tooLateOverlay = document.getElementById('too-late-overlay');
    const continueBtn = document.getElementById('continue-btn');
    const mainContent = document.getElementById('main-content');
    
    // Final NO button
    finalNoBtn.addEventListener('click', () => {
      tooLateOverlay.classList.remove('hidden');
    });
    
    // Continue button - show main content
    continueBtn.addEventListener('click', () => {
      tooLateOverlay.classList.add('hidden');
      this.finalChoiceSection.style.opacity = '0';
      
      setTimeout(() => {
        this.finalChoiceSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        
        // Enable body scroll
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
          mainContent.classList.add('show');
          
          // Initialize other sections
          if (window.DateGenerator) DateGenerator.init();
          if (window.Timeline) Timeline.init();
          if (window.Gallery) Gallery.init();
          if (window.Letter) Letter.init();
        }, 50);
      }, 600);
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  Hero.init();
});
