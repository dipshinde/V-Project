# 💖 Valentine's Day Website

A beautiful, interactive, and emotionally overwhelming Valentine's Day proposal website.

## ✨ Features

- **Name Gate Entry**: Personalized entry with her name
- **Playful YES/NO Interaction**: NO button dodges, YES button grows
- **Celebration Moment**: Heart burst and confetti animation
- **"Too Late" Twist**: Fun final choice moment
- **Smart Date Generator**: Filter by mood, budget, and location
- **Timeline**: Important dates of your relationship
- **Photo Gallery**: Beautiful grid of memories with captions
- **Love Letter**: Animated envelope that opens to reveal your letter

## 🚀 Quick Start

### 1. Setup Files

```bash
# Upload your photos
assets/photos/photo1.jpg
assets/photos/photo2.jpg
assets/photos/photo3.jpg
assets/photos/photo4.jpg

# Upload your GIFs
assets/gifs/cute.gif (used in hero section)
assets/gifs/memory1.gif
assets/gifs/memory2.gif
```

### 2. Customize Content

All content is editable in **`js/config.js`**:

```javascript
const CONFIG = {
  herName: "Nandini",  // Change to her name
  
  // Edit all text, dates, captions, and content here
  // No HTML/CSS knowledge required!
}
```

### 3. Host on GitHub Pages

1. Create a new GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select "main" branch → Save
5. Your site will be live at: `https://yourusername.github.io/repo-name`

## 📝 Customization Guide

### Editing Text & Content

Open `js/config.js` and edit:

**Her Name:**
```javascript
herName: "Nandini"
```

**Hero Section:**
```javascript
hero: {
  gifUrl: "assets/gifs/cute.gif",
  question: "Will you be my Valentine?",
  subtitle: "Soch lo… carefully 😉"
}
```

**Timeline Events:**
```javascript
timeline: {
  events: [
    {
      date: "January 14, 2024",
      title: "The Day We Met 💫",
      description: "Your story here..."
    }
  ]
}
```

**Gallery Items:**
```javascript
gallery: {
  items: [
    {
      type: "image",
      url: "assets/photos/photo1.jpg",
      caption: "This smile 😍"
    },
    {
      type: "gif",
      url: "assets/gifs/memory1.gif",
      caption: "That day we couldn't stop laughing 😂"
    }
  ]
}
```

**Love Letter:**
```javascript
letter: {
  content: `Your personalized letter here...
  
Can be multiple paragraphs,
with proper formatting.`
}
```

### Adding More Date Ideas

In `js/config.js`, add to the `dateGenerator.dates` array:

```javascript
{
  title: "Your Date Idea 🎭",
  description: "What you'll do together",
  mood: "romantic",      // romantic, fun, or chill
  budget: "medium",      // low, medium, or high
  place: "indoor"        // indoor or outdoor
}
```

## 🎨 Changing Colors

Edit `css/style.css`:

**Main Pink:**
```css
#ff6b9d  /* Primary pink */
#ff8fb3  /* Light pink */
#ffb3c6  /* Lighter pink */
#ffd1dc  /* Pastel pink */
```

**Background:**
```css
background: linear-gradient(135deg, #fff5f7 0%, #ffe8f0 100%);
```

## 📱 Mobile Responsive

The site is desktop-first but includes mobile responsive styles. Test on different devices!

## 🎯 How It Works

### Flow:
1. **Name Gate** → User enters her name
2. **Hero Section** → Will you be my Valentine?
   - YES button grows
   - NO button dodges (5 times then disappears)
3. **Celebration** → Heart burst animation
4. **Final Choice** → One last "Actually No" option
5. **Too Late** → "You're mine now" popup
6. **Main Content** → Date generator, timeline, gallery, letter

### NO Button Behavior:
- Click or hover attempts trigger dodge
- Button relocates to random position
- YES button grows with each escape
- After 5 escapes, NO disappears
- Playful, not aggressive

## 📂 File Structure

```
valentine-site/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js          # ⭐ EDIT THIS FOR CONTENT
│   ├── app.js
│   ├── nameGate.js
│   ├── hero.js
│   ├── particles.js
│   ├── animations.js
│   ├── dateGenerator.js
│   ├── timeline.js
│   ├── gallery.js
│   └── letter.js
└── assets/
    ├── photos/
    │   ├── photo1.jpg
    │   ├── photo2.jpg
    │   └── ...
    └── gifs/
        ├── cute.gif
        └── ...
```

## 💡 Tips

### For Best Results:

1. **Photos**: Use high-quality images (1200x900px recommended)
2. **GIFs**: Keep file sizes reasonable (<5MB)
3. **Text**: Write from the heart - be genuine
4. **Timeline**: Include real dates and memories
5. **Letter**: Make it personal and emotional

### GitHub Pages Tips:

- Repository must be public (or have GitHub Pro for private)
- It may take 5-10 minutes for changes to appear
- Use lowercase filenames for consistency
- Test locally first before uploading

## 🐛 Troubleshooting

**Images not showing?**
- Check file paths in `config.js`
- Ensure files are in correct folders
- Check filenames match exactly (case-sensitive)

**Site not loading?**
- Clear browser cache
- Check GitHub Pages is enabled
- Wait a few minutes for deployment

**NO button not working?**
- Should dodge on hover AND click
- After 5 dodges, it disappears
- This is intentional behavior!

## 🎁 Final Checklist

Before sharing:

- [ ] Updated `herName` in config.js
- [ ] Added all photos to assets/photos/
- [ ] Added GIFs to assets/gifs/
- [ ] Customized timeline with real dates
- [ ] Written personal love letter
- [ ] Updated date ideas (removed any virtual/LDR references)
- [ ] Tested on desktop
- [ ] Tested NO button dodging
- [ ] Verified all sections scroll smoothly

## ❤️ Credits

Created with love and careful attention to every detail.

---

**Remember:** This website is meant to overwhelm her in the best way possible. Make it personal, make it meaningful, and most importantly - make it from the heart! 💕

Good luck! 🌟
