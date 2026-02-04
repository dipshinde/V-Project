// Date Generator Handler
const DateGenerator = {
  init() {
    this.moodFilter = document.getElementById('mood-filter');
    this.budgetFilter = document.getElementById('budget-filter');
    this.placeFilter = document.getElementById('place-filter');
    this.generateBtn = document.getElementById('generate-date');
    this.resultDiv = document.getElementById('date-result');
    
    this.dates = CONFIG.dateGenerator.dates;
    
    this.bindEvents();
  },
  
  bindEvents() {
    this.generateBtn.addEventListener('click', () => this.generateDate());
  },
  
  generateDate() {
    const mood = this.moodFilter.value;
    const budget = this.budgetFilter.value;
    const place = this.placeFilter.value;
    
    // Filter dates based on selection
    let filteredDates = this.dates.filter(date => {
      if (mood && date.mood !== mood) return false;
      if (budget && date.budget !== budget) return false;
      if (place && date.place !== place) return false;
      return true;
    });
    
    // If no matches, use all dates
    if (filteredDates.length === 0) {
      filteredDates = this.dates;
    }
    
    // Pick random date
    const randomDate = filteredDates[Math.floor(Math.random() * filteredDates.length)];
    
    this.displayDate(randomDate);
  },
  
  displayDate(date) {
    // Hide current result
    this.resultDiv.style.opacity = '0';
    this.resultDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      this.resultDiv.innerHTML = `
        <div class="date-card">
          <h3>${date.title}</h3>
          <p>${date.description}</p>
        </div>
      `;
      
      // Show with animation
      this.resultDiv.classList.add('show');
      setTimeout(() => {
        this.resultDiv.style.opacity = '1';
        this.resultDiv.style.transform = 'translateY(0)';
      }, 50);
    }, 300);
  }
};

window.DateGenerator = DateGenerator;
