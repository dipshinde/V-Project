# 🎨 Advanced Styling Guide

## Color Schemes

### Current Theme: Romantic Pink
```css
Primary: #ff6b9d (Hot Pink)
Light: #ff8fb3 (Soft Pink)
Lighter: #ffb3c6 (Pastel Pink)
Pale: #ffd1dc (Baby Pink)
Background: #fff5f7 to #ffe8f0 (gradient)
```

---

## Pre-Made Color Schemes

### 1. Purple Romance
```css
/* In style.css, find and replace: */
#ff6b9d → #9d6bff (Purple)
#ff8fb3 → #b18fff (Light Purple)
#ffb3c6 → #c9adff (Lavender)
#ffd1dc → #e0d1ff (Pale Lavender)

/* Background gradient: */
background: linear-gradient(135deg, #f5f0ff 0%, #e8e0ff 100%);
```

### 2. Rose Gold Elegance
```css
/* Replace: */
#ff6b9d → #b76e79 (Rose Gold)
#ff8fb3 → #d4a5ae (Dusty Rose)
#ffb3c6 → #e8c4ca (Blush)
#ffd1dc → #f5e6e8 (Pearl)

/* Background: */
background: linear-gradient(135deg, #faf6f7 0%, #f0e8ea 100%);
```

### 3. Ocean Blue Romance
```css
/* Replace: */
#ff6b9d → #6bb6ff (Sky Blue)
#ff8fb3 → #8fc6ff (Light Blue)
#ffb3c6 → #b3d9ff (Baby Blue)
#ffd1dc → #d1e8ff (Pale Blue)

/* Background: */
background: linear-gradient(135deg, #f0f8ff 0%, #e0f0ff 100%);
```

### 4. Sunset Warmth
```css
/* Replace: */
#ff6b9d → #ff8c6b (Coral)
#ff8fb3 → #ffab8f (Peach)
#ffb3c6 → #ffc4b3 (Light Peach)
#ffd1dc → #ffddd1 (Pale Peach)

/* Background: */
background: linear-gradient(135deg, #fff8f5 0%, #fff0e8 100%);
```

### 5. Mint Green Fresh
```css
/* Replace: */
#ff6b9d → #6bffa8 (Mint)
#ff8fb3 → #8fffbb (Light Mint)
#ffb3c6 → #b3ffd1 (Pale Mint)
#ffd1dc → #d1ffe8 (Very Pale Mint)

/* Background: */
background: linear-gradient(135deg, #f5fff8 0%, #e8fff0 100%);
```

---

## How to Change Colors

### Method 1: Find & Replace (Easiest)

1. Open `css/style.css` in text editor
2. Press Ctrl+H (or Cmd+H on Mac)
3. Find: `#ff6b9d`
4. Replace with: Your new color
5. Click "Replace All"
6. Repeat for each color

### Method 2: CSS Variables (Advanced)

Add this at the top of `style.css`:

```css
:root {
  --primary: #ff6b9d;
  --primary-light: #ff8fb3;
  --primary-lighter: #ffb3c6;
  --primary-pale: #ffd1dc;
  --bg-start: #fff5f7;
  --bg-end: #ffe8f0;
}

/* Then use throughout: */
.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
}
```

---

## Font Customization

### Current Fonts:
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Poppins (sans-serif, modern)
- **Letter**: Dancing Script (cursive, handwritten)

### Change Fonts:

1. Visit [Google Fonts](https://fonts.google.com)
2. Choose your font
3. Copy the `<link>` code
4. Replace in `index.html` (lines 7-8)

**Example - Changing to Montserrat:**

```html
<!-- In index.html -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
```

```css
/* In style.css */
body {
  font-family: 'Montserrat', sans-serif;
}
```

### Recommended Combinations:

**Elegant:**
- Headings: Cormorant Garamond
- Body: Lato

**Modern:**
- Headings: Raleway
- Body: Open Sans

**Playful:**
- Headings: Pacifico
- Body: Quicksand

**Romantic:**
- Headings: Great Vibes
- Body: Josefin Sans

---

## Animation Customization

### Speed Controls

Find these in `style.css`:

```css
/* Transition speed */
transition: all 0.3s ease; /* Change 0.3s to 0.5s for slower */

/* Animation duration */
animation: fadeIn 0.6s ease; /* Change 0.6s for different speed */
```

### Disable Specific Animations

```css
/* Remove particle animations */
.particle {
  display: none;
}

/* Disable button hover effects */
.btn:hover {
  transform: none;
}

/* Simpler transitions */
.hero {
  transition: opacity 0.3s ease;
  /* Remove other complex transitions */
}
```

---

## Layout Customization

### Change Hero GIF Size

```css
.hero-gif img {
  max-width: 240px; /* Change to 300px for larger */
  border-radius: 20px;
}
```

### Adjust Section Heights

```css
.section {
  min-height: 100vh; /* Change to 80vh for shorter sections */
  padding: 80px 20px; /* Adjust spacing */
}
```

### Gallery Grid Columns

```css
.gallery-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  /* Change 300px to 400px for larger images */
  /* Or use: repeat(2, 1fr) for exactly 2 columns */
}
```

---

## Button Styling

### Make Buttons Bigger

```css
.btn {
  padding: 20px 50px; /* Increase from 16px 40px */
  font-size: 20px; /* Increase from 18px */
}
```

### Change Button Style

```css
/* Rounded corners */
.btn {
  border-radius: 10px; /* Less rounded than 50px */
}

/* Flat design (no gradient) */
.btn-primary {
  background: #ff6b9d; /* Solid color */
}

/* Outlined buttons */
.btn-primary {
  background: transparent;
  border: 2px solid #ff6b9d;
  color: #ff6b9d;
}
```

---

## Background Customization

### Solid Color Background

```css
body {
  background: #fff5f7; /* Single color */
}
```

### Different Gradient

```css
body {
  /* Diagonal gradient */
  background: linear-gradient(45deg, #color1, #color2);
  
  /* Radial gradient */
  background: radial-gradient(circle, #color1, #color2);
  
  /* Multiple colors */
  background: linear-gradient(135deg, #fff5f7 0%, #ffe8f0 50%, #ffd1dc 100%);
}
```

### Add Background Image

```css
body {
  background-image: url('path/to/image.jpg');
  background-size: cover;
  background-attachment: fixed;
}

/* With overlay */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background: rgba(255, 245, 247, 0.9);
  z-index: -1;
}
```

---

## Text Styling

### Change Text Alignment

```css
.hero-content {
  text-align: left; /* Instead of center */
}
```

### Text Shadows (Glow Effect)

```css
.hero-title {
  text-shadow: 0 0 20px rgba(255, 107, 157, 0.5);
}
```

### Letter Spacing

```css
.hero-title {
  letter-spacing: 2px; /* Spread out letters */
}
```

---

## Particle Effects

### Change Particle Icons

In `js/particles.js`:

```javascript
this.particles = ['💕', '💖', '💗', '💓', '💝', '✨', '⭐', '🌟'];

// Change to:
this.particles = ['🌹', '🌺', '🌸', '💐', '🌷']; // Flowers
// Or:
this.particles = ['⭐', '✨', '💫', '🌟']; // Stars only
// Or:
this.particles = ['🦋', '🌈', '☀️', '🌙']; // Nature
```

### Adjust Particle Count

```javascript
const particleCount = 20; // Change to 10 for fewer, 30 for more
```

### Particle Speed

```javascript
const duration = Math.random() * 10 + 10; // Change 10 to 5 for faster
```

---

## Shadow & Depth

### Add More Depth

```css
/* Stronger shadows */
.btn {
  box-shadow: 0 12px 40px rgba(255, 107, 157, 0.4);
}

/* Multiple shadows */
.gallery-item {
  box-shadow: 
    0 5px 15px rgba(0, 0, 0, 0.1),
    0 10px 30px rgba(255, 107, 157, 0.2);
}
```

### Remove Shadows (Flat Design)

```css
.btn {
  box-shadow: none;
}

.gallery-item {
  box-shadow: none;
  border: 1px solid #f0f0f0;
}
```

---

## Mobile Customization

Edit the media query section:

```css
@media (max-width: 768px) {
  /* Make hero text smaller on mobile */
  .hero-question {
    font-size: 32px; /* Instead of 42px */
  }
  
  /* Adjust gallery for mobile */
  .gallery-grid {
    grid-template-columns: 1fr; /* Single column */
  }
}
```

---

## Dark Mode (Bonus)

Add this for a dark theme:

```css
/* Dark mode color scheme */
body.dark-mode {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #ffffff;
}

body.dark-mode .btn-primary {
  background: linear-gradient(135deg, #ff6b9d 0%, #ff8fb3 100%);
}

body.dark-mode .section {
  background: rgba(255, 255, 255, 0.05);
}
```

Toggle with JavaScript:

```javascript
// Add to app.js
document.body.classList.toggle('dark-mode');
```

---

## Quick Fixes

### Site Feels Too Pink
→ Use Rose Gold or Ocean Blue scheme

### Text Too Small
→ Increase font-size in .hero-question and other elements

### Animations Too Fast
→ Increase transition/animation duration values

### Too Much Empty Space
→ Reduce min-height in .section from 100vh to 80vh

### Buttons Too Small on Mobile
→ Increase padding in @media queries

---

## Testing Changes

1. Make changes to CSS
2. Save file
3. Refresh browser (Ctrl+F5 for hard refresh)
4. Test on different screen sizes
5. Check mobile view (F12 → Device toolbar)

---

## Backup Before Editing

```bash
# Make a copy of style.css before editing
cp style.css style-backup.css
```

If something breaks:
```bash
# Restore from backup
cp style-backup.css style.css
```

---

## Pro Tips

1. **Change one thing at a time** - easier to debug
2. **Use browser DevTools** - F12 to test changes live
3. **Keep backups** - copy files before major changes
4. **Test thoroughly** - check all sections after changes
5. **Mobile matters** - always check responsive view

---

## Need Help?

- **Color picker**: coolors.co, colorhunt.co
- **Font pairings**: fontpair.co
- **Gradient generator**: cssgradient.io
- **Shadow generator**: shadows.brumm.af

Happy customizing! 🎨
