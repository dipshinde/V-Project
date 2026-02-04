// Main App Orchestrator

// Wait for all modules to load
document.addEventListener('DOMContentLoaded', () => {
  console.log('Valentine\'s Day Website Loaded 💖');
  
  // Apply config to static elements
  applyConfig();
});

// Apply configuration to HTML elements
function applyConfig() {
  // Update section titles from config
  const dateGenTitle = document.querySelector('#date-generator .section-title');
  const dateGenSubtitle = document.querySelector('#date-generator .section-subtitle');
  if (dateGenTitle) dateGenTitle.textContent = CONFIG.dateGenerator.title;
  if (dateGenSubtitle) dateGenSubtitle.textContent = CONFIG.dateGenerator.subtitle;
  
  const timelineTitle = document.querySelector('#timeline .section-title');
  if (timelineTitle) timelineTitle.textContent = CONFIG.timeline.title;
  
  const galleryTitle = document.querySelector('#gallery .section-title');
  if (galleryTitle) galleryTitle.textContent = CONFIG.gallery.title;
  
  const letterTitle = document.querySelector('#letter-section .section-title');
  if (letterTitle) letterTitle.textContent = CONFIG.letter.title;
  
  // Update hero GIF
  const heroGif = document.getElementById('hero-gif-img');
  if (heroGif) heroGif.src = CONFIG.hero.gifUrl;
  
  // Update celebration text
  const celebTitle = document.querySelector('#celebration .celebration-title');
  const celebSubtitle = document.querySelector('#celebration .celebration-subtitle');
  if (celebTitle) celebTitle.textContent = CONFIG.celebration.title;
  if (celebSubtitle) celebSubtitle.textContent = CONFIG.celebration.subtitle;
  
  // Update final choice
  const finalTitle = document.querySelector('#final-choice .final-choice-title');
  const finalSubtitle = document.querySelector('#final-choice .final-choice-subtitle');
  const finalBtn = document.getElementById('final-no-btn');
  if (finalTitle) finalTitle.textContent = CONFIG.finalChoice.title;
  if (finalSubtitle) finalSubtitle.textContent = CONFIG.finalChoice.subtitle;
  if (finalBtn) finalBtn.textContent = CONFIG.finalChoice.button;
  
  // Update too late overlay
  const tooLateTitle = document.querySelector('#too-late-overlay h2');
  const tooLateMsg = document.querySelectorAll('#too-late-overlay p')[0];
  const tooLateSubtext = document.querySelector('.too-late-subtext');
  if (tooLateTitle) tooLateTitle.textContent = CONFIG.tooLate.title;
  if (tooLateMsg) tooLateMsg.textContent = CONFIG.tooLate.message;
  if (tooLateSubtext) tooLateSubtext.textContent = CONFIG.tooLate.subtext;
}

// Global utilities
window.valentineApp = {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
  
  scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
};
