// Particles Animation System
class ParticleSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.particles = ['💕', '💖', '💗', '💓', '💝', '✨', '⭐', '🌟'];
    this.createParticles();
  }
  
  createParticles() {
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        this.addParticle();
      }, i * 200);
    }
    
    // Keep adding particles
    setInterval(() => {
      this.addParticle();
    }, 3000);
  }
  
  addParticle() {
    if (!this.container) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerText = this.particles[Math.floor(Math.random() * this.particles.length)];
    
    // Random starting position
    particle.style.left = Math.random() * 100 + '%';
    particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
    
    // Random animation duration
    const duration = Math.random() * 10 + 10;
    particle.style.animationDuration = duration + 's';
    
    this.container.appendChild(particle);
    
    // Remove after animation
    setTimeout(() => {
      particle.remove();
    }, duration * 1000);
  }
}

// Initialize particles when needed
function initParticles(containerId) {
  return new ParticleSystem(containerId);
}
