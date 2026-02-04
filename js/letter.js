// Love Letter Handler
const Letter = {
  init() {
    this.envelope = document.getElementById('envelope');
    this.letter = document.getElementById('letter');
    this.letterContent = document.getElementById('letter-content');
    
    this.isOpen = false;
    
    this.renderLetter();
    this.bindEvents();
  },
  
  renderLetter() {
    this.letterContent.textContent = CONFIG.letter.content;
  },
  
  bindEvents() {
    this.envelope.addEventListener('click', () => {
      if (!this.isOpen) {
        this.openEnvelope();
      }
    });
  },
  
  openEnvelope() {
    this.isOpen = true;
    
    // Add open class to envelope
    this.envelope.classList.add('open');
    
    // After flap animation, show letter
    setTimeout(() => {
      this.letter.classList.remove('hidden');
      setTimeout(() => {
        this.letter.classList.add('show');
      }, 50);
    }, 600);
  }
};

window.Letter = Letter;
