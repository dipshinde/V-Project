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

    // Emojis for celebration
    const emojis = ['🎉', '💖', '✨', '💫', '🥳', '🌸', '💝', '🎊', '😍', '💥', '💗', '❤️‍🔥'];

    // Launch points across bottom (5 positions)
    const launchPoints = [10, 30, 50, 70, 90];

    function createBurst(xPercent) {
      for (let i = 0; i < 35; i++) {
        const particle = document.createElement('span');
        particle.className = 'fountain-particle';

        // BIGGER emoji size (was 16-34, now 24-50)
        const size = Math.random() * 26 + 24;
        particle.style.fontSize = size + 'px';
        particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        // Position at bottom
        particle.style.position = 'absolute';
        particle.style.bottom = '0';
        particle.style.left = xPercent + '%';
        particle.style.pointerEvents = 'none';

        // Random movement (spread wide)
        const xMove = (Math.random() - 0.5) * 900;
        const yMove = Math.random() * -700 - 250;
        const rotate = Math.random() * 720;

        particle.style.setProperty('--x', xMove + 'px');
        particle.style.setProperty('--y', yMove + 'px');
        particle.style.setProperty('--r', rotate + 'deg');

        // Add CSS animation
        particle.style.animation = 'partyBlast 2.5s cubic-bezier(0.15, 0.7, 0.2, 1) forwards';

        burstContainer.appendChild(particle);

        // Cleanup
        setTimeout(() => {
          particle.remove();
        }, 1800);
      }
    }

    // Burst 1: Immediate
    launchPoints.forEach(x => createBurst(x));

    // Burst 2: After 900ms
    setTimeout(() => {
      launchPoints.forEach(x => createBurst(x));
    }, 1450);

    // Cleanup container after all bursts
    setTimeout(() => {
      burstContainer.innerHTML = '';
    }, 1797);
  },

  showCelebration() {
    // Hide hero
    this.heroSection.style.opacity = '0';

    setTimeout(() => {
      this.heroSection.classList.add('hidden');

      // Show celebration
      this.celebrationSection.classList.remove('hidden');

      // After celebration, show final choice (6 seconds)
      setTimeout(() => {
        this.showFinalChoice();
      }, 6000);
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
