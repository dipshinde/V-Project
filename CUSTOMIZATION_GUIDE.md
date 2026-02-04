# 📖 Complete Customization Guide

## Step 1: Add Your Photos & GIFs

### Photos
1. Prepare 4-6 photos of you together
2. Resize them to approximately 1200x900px (recommended)
3. Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, `photo4.jpg`
4. Place in `assets/photos/` folder

### GIFs
1. Find or create GIFs you want to use
2. Keep file size under 5MB each
3. Name them: `cute.gif` (hero), `memory1.gif`, `memory2.gif`
4. Place in `assets/gifs/` folder

---

## Step 2: Personalize the Content

Open `js/config.js` in any text editor and follow this guide:

### 2.1 Update Her Name
```javascript
herName: "Nandini",  // ← Change this to her name
```

### 2.2 Customize Hero Section
```javascript
hero: {
  gifUrl: "assets/gifs/cute.gif",  // Your GIF path
  question: "Will you be my Valentine?",  // Main question
  subtitle: "Soch lo… carefully 😉",  // Playful teasing line
  yesButton: "YES 💕",
  noButton: "Actually No 😤"
}
```

### 2.3 Update Date Ideas

**Keep these real-life focused!** No virtual dates or long-distance references.

```javascript
{
  title: "Coffee + Long Walk ☕🚶‍♀️",
  description: "No rush, no phones, just talking about everything and nothing.",
  mood: "chill",      // Options: romantic, fun, chill
  budget: "low",      // Options: low, medium, high
  place: "outdoor"    // Options: indoor, outdoor
}
```

**Add your own date ideas:**
- Think about what you both enjoy
- Local spots you want to visit together
- Activities that match your relationship vibe

### 2.4 Timeline - Your Story

This is where you write your relationship timeline:

```javascript
timeline: {
  title: "Most Important Days of Our Lives 💞",
  events: [
    {
      date: "January 14, 2024",  // Actual date
      title: "The Day We Met 💫",  // Short title
      description: "Uss din pata nahi tha ki tum itne special ban jaoge..."  // Memory
    },
    // Add more events...
  ]
}
```

**Timeline Ideas:**
- First meeting
- First coffee/date
- First time you realized you had feelings
- Memorable moments
- Inside jokes
- Special conversations
- Future plans

### 2.5 Gallery Captions

Make each photo caption personal and meaningful:

```javascript
gallery: {
  items: [
    {
      type: "image",  // or "gif"
      url: "assets/photos/photo1.jpg",
      caption: "This smile 😍"  // ← Make this personal!
    }
  ]
}
```

**Caption Ideas:**
- "The day we..."
- "My favorite smile"
- "When you..."
- Inside jokes
- What you love about that moment
- How she makes you feel

### 2.6 The Love Letter

This is the most important part. Write from your heart:

```javascript
letter: {
  content: `Hey Beautiful,

Paragraph 1: Opening
- How you feel
- What she means to you

Paragraph 2: Your story
- How things started
- What changed

Paragraph 3: What you love about her
- Her qualities
- Specific things she does
- How she makes you feel

Paragraph 4: Future/Promise
- What you want together
- Your commitment

Sign off with something personal

Your Name 💕`
}
```

**Letter Writing Tips:**
- Be genuine, not cheesy
- Use specific examples
- Mix English and Hinglish naturally
- Include inside jokes
- Mention real moments
- Don't overthink - write what you feel

---

## Step 3: Color Customization (Optional)

If you want to change the color scheme, edit `css/style.css`:

### Main Colors
```css
/* Primary Pink */
#ff6b9d

/* Light Pink */  
#ff8fb3

/* Lighter Pink */
#ffb3c6

/* Pastel Pink */
#ffd1dc

/* Background */
background: linear-gradient(135deg, #fff5f7 0%, #ffe8f0 100%);
```

### How to Change:
1. Find & replace the color codes
2. Use a color picker to choose new colors
3. Test on different sections
4. Keep contrast readable

**Recommended Color Schemes:**
- **Romantic Pink** (current): Soft, warm, traditional
- **Purple Love**: Replace #ff6b9d with #9d6bff
- **Rose Gold**: Use #b76e79 and #e3a8b0
- **Blue Romance**: Use #6bb6ff and #8fc6ff

---

## Step 4: Testing Before Sharing

### Local Testing
1. Open `index.html` in Chrome/Firefox
2. Test the full flow:
   - Enter name
   - Try clicking NO button (should dodge 5 times)
   - Click YES
   - Watch celebration
   - Try final NO
   - See "Too Late" popup
   - Browse all sections
3. Check all images load
4. Verify timeline scrolls smoothly
5. Test date generator filters
6. Open envelope and read letter

### Things to Check:
- [ ] Name appears in hero section
- [ ] NO button dodges properly
- [ ] All photos display correctly
- [ ] GIFs are working
- [ ] Timeline dates are correct
- [ ] Love letter text is complete
- [ ] No typos anywhere
- [ ] Mobile view looks good (optional)

---

## Step 5: Deployment to GitHub Pages

### Create GitHub Repository
1. Go to github.com
2. Click "New Repository"
3. Name it: `valentine-2025` (or anything)
4. Keep it PUBLIC
5. Don't initialize with README
6. Click "Create Repository"

### Upload Files
**Option A: GitHub Web Interface**
1. Click "uploading an existing file"
2. Drag all your files and folders
3. Commit changes

**Option B: GitHub Desktop**
1. Install GitHub Desktop
2. Clone your repository
3. Copy all files into the folder
4. Commit and push

**Option C: Command Line**
```bash
git init
git add .
git commit -m "Valentine's website"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

### Enable GitHub Pages
1. Go to repository Settings
2. Click "Pages" in sidebar
3. Source: Deploy from branch
4. Branch: main → / (root)
5. Click Save
6. Wait 2-5 minutes
7. Your site will be at: `https://yourusername.github.io/repo-name`

---

## Step 6: Sharing the Link

### Before Sending:
1. Test the live link yourself first
2. Check on mobile (optional but good)
3. Make sure everything works
4. Take a deep breath

### How to Share:
- Send the link directly
- Or create suspense: "I made something for you..."
- Or: "Ek important cheez hai... open this when you're alone"
- Make it feel special

---

## Common Issues & Fixes

### Images Not Showing
**Problem:** Photos appear as broken images
**Fix:**
1. Check file paths in `config.js` match exactly
2. Ensure filenames are correct (case-sensitive!)
3. Verify files are in `assets/photos/` folder

### NO Button Not Dodging
**Problem:** NO button doesn't move
**Fix:**
- This is normal - it dodges on hover AND click
- Should move 5 times then disappear
- If not working, check browser console for errors

### Site Not Updating
**Problem:** Changes not showing on GitHub Pages
**Fix:**
1. Clear browser cache (Ctrl+F5)
2. Wait 5-10 minutes for GitHub to rebuild
3. Check files uploaded correctly
4. Try incognito/private window

### Timeline Not Appearing
**Problem:** Timeline section is blank
**Fix:**
- Check `config.js` has events array
- Verify syntax is correct (commas, quotes)
- Check browser console for errors

### Love Letter Not Showing
**Problem:** Envelope opens but no text
**Fix:**
- Check `letter.content` in config.js
- Ensure text is in backticks `...`
- Verify no syntax errors

---

## Advanced Customization

### Adding More Timeline Events
Just add more objects to the array:
```javascript
{
  date: "New Date",
  title: "New Event 💖",
  description: "What happened..."
}
```

### Adding More Gallery Items
```javascript
{
  type: "image",
  url: "assets/photos/photo5.jpg",
  caption: "Another memory"
}
```

### Adding More Date Ideas
```javascript
{
  title: "New Date Idea 🎨",
  description: "What we'll do",
  mood: "fun",
  budget: "medium",
  place: "indoor"
}
```

### Changing Fonts
In `index.html`, change:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Then in `css/style.css`:
```css
font-family: 'YOUR_FONT', sans-serif;
```

---

## Final Tips

1. **Be Authentic**: Write in your voice, not how you think it should sound
2. **Use Hinglish**: Mix languages naturally like you normally talk
3. **Include Inside Jokes**: Things only you two understand
4. **Quality Over Quantity**: Better to have 4 great photos than 10 average ones
5. **Test Everything**: Click through the entire experience before sharing
6. **Timing Matters**: Send when she has time to enjoy it properly
7. **Have Backup**: Save all files locally in case you need to edit

---

## Need Help?

Check the main README.md for troubleshooting.

Remember: The technical perfection matters less than the genuine emotion behind it. She'll love it because you made it for her. 💖

Good luck! 🌟
