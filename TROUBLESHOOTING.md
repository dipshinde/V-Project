# 🔧 Troubleshooting Guide

Common issues and their solutions.

---

## Installation & Setup Issues

### Problem: "I can't find the files after downloading"
**Solution:**
1. Check your Downloads folder
2. Extract the ZIP file first (right-click → Extract All)
3. Make sure you're looking inside the extracted folder

### Problem: "Double-clicking index.html doesn't work"
**Solution:**
1. Right-click index.html
2. Select "Open with" → Choose your browser (Chrome/Firefox)
3. Or drag index.html into an open browser window

### Problem: "Files are read-only"
**Solution:**
1. Right-click the folder → Properties
2. Uncheck "Read-only"
3. Apply to all files and folders

---

## Visual Issues

### Problem: "Photos not showing - broken image icons"
**Solutions:**

**Check 1: File Paths**
```javascript
// In config.js, make sure paths match exactly:
url: "assets/photos/photo1.jpg"  ✅
url: "assets/Photos/Photo1.jpg"  ❌ (wrong case)
url: "photo1.jpg"                ❌ (missing path)
```

**Check 2: File Names**
- Must match exactly (case-sensitive on some systems)
- No spaces in filenames: `photo 1.jpg` → `photo1.jpg`
- Use lowercase: `Photo1.JPG` → `photo1.jpg`

**Check 3: File Location**
```
✅ Correct:
valentine-site/
  assets/
    photos/
      photo1.jpg  ← Here!

❌ Wrong:
valentine-site/
  photo1.jpg  ← Not here
```

**Check 4: File Format**
- JPG/JPEG: ✅ `photo1.jpg`
- PNG: ✅ `photo1.png`
- GIF: ✅ `cute.gif`
- HEIC: ❌ (Convert to JPG first)

### Problem: "GIF not showing"
**Solutions:**
1. Verify GIF is actually in `assets/gifs/` folder
2. Check filename matches config.js exactly
3. Try opening GIF directly - if it doesn't open, file is corrupted
4. GIF file size <10MB recommended

### Problem: "Colors look different on different devices"
**Normal Behavior:**
- Different screens show colors slightly differently
- This is expected and okay
- Focus on overall vibe, not exact matching

### Problem: "Layout looks broken on mobile"
**Solutions:**
1. Try rotating to landscape
2. Site is desktop-first, mobile is secondary
3. Check on actual phone, not just browser resize
4. Clear mobile browser cache

---

## Interaction Issues

### Problem: "NO button doesn't move"
**This might be intentional! Check:**
1. Have you clicked it 5 times already? It disappears after 5 dodges
2. Try both clicking AND hovering near it
3. Refresh page to reset

**If it still doesn't work:**
1. Open browser console (F12)
2. Look for red error messages
3. Check if JavaScript is enabled

### Problem: "YES button doesn't do anything"
**Solutions:**
1. Make sure you clicked the actual button
2. Check browser console for errors
3. Try refreshing page
4. Ensure JavaScript is enabled
5. Try different browser

### Problem: "Celebration animation doesn't play"
**Solutions:**
1. This happens fast - did you miss it?
2. Refresh and click YES again
3. Check console for errors
4. Clear browser cache (Ctrl+Shift+Delete)

### Problem: "Envelope won't open"
**Solutions:**
1. Click directly on the envelope graphic
2. Scroll down to letter section first
3. Try clicking the flap part
4. Check if letter content exists in config.js

### Problem: "Page won't scroll"
**This is intentional for sections!**
- Name gate, Hero, Celebration, Final Choice are full-screen
- Scrolling unlocks after clicking "Continue"
- This is the intended flow

---

## Content Issues

### Problem: "Her name doesn't appear"
**Solutions:**

**Check config.js:**
```javascript
herName: "Nandini",  // Make sure this is set

// Then in HTML, it auto-populates:
// "Heyy <Name>" uses this value
```

**Force refresh:**
1. Clear cache: Ctrl+Shift+Delete
2. Hard reload: Ctrl+F5
3. Try incognito mode

### Problem: "Timeline is empty"
**Solutions:**

**Check config.js syntax:**
```javascript
// ✅ Correct:
timeline: {
  events: [
    {
      date: "Jan 1, 2024",
      title: "Title",
      description: "Text"
    },
    {
      date: "Jan 2, 2024",
      title: "Title",
      description: "Text"
    }
  ]
}

// ❌ Wrong - missing comma:
timeline: {
  events: [
    {
      date: "Jan 1, 2024",
      title: "Title",
      description: "Text"
    }  ← MISSING COMMA!
    {
      date: "Jan 2, 2024"
    }
  ]
}
```

### Problem: "Love letter won't display"
**Solutions:**

**Check config.js:**
```javascript
// ✅ Correct - use backticks:
letter: {
  content: `Your letter here
  
  Multiple lines work
  
  End with backtick`
}

// ❌ Wrong - using quotes:
letter: {
  content: "Won't work for
  multiple lines"
}
```

**Check for special characters:**
- Avoid using backticks ` inside your letter
- If needed, use regular quotes instead

### Problem: "Date generator shows nothing"
**Solutions:**
1. Click "Generate Idea" button
2. Try removing all filters first
3. Check if dates array has items in config.js
4. Look for console errors

---

## GitHub Pages Issues

### Problem: "Site not loading after deployment"
**Wait Time:**
- First deployment: 5-10 minutes
- Updates: 2-5 minutes
- Be patient!

**Check Status:**
1. Go to repository → Actions tab
2. See if deployment is complete
3. Green checkmark = ready
4. Red X = error (check logs)

### Problem: "Changes not showing on live site"
**Solutions:**

**Option 1: Clear Cache**
1. Ctrl+Shift+Delete (Chrome)
2. Clear everything
3. Close browser completely
4. Open fresh and try

**Option 2: Hard Reload**
- Ctrl+F5 (Windows)
- Cmd+Shift+R (Mac)

**Option 3: Incognito Mode**
- Try opening in private/incognito window
- No cache = fresh load

**Option 4: Wait**
- GitHub Pages takes 2-5 minutes to update
- Grab coffee, come back

### Problem: "404 error on GitHub Pages"
**Solutions:**

**Check Settings:**
1. Repository → Settings → Pages
2. Source should be: "Deploy from branch"
3. Branch should be: "main" (or "master")
4. Folder should be: "/ (root)"

**Check Files:**
- index.html MUST be in root folder
- Not inside another folder
- Exactly named "index.html" (lowercase)

**Check Repository:**
- Must be Public (or Pro account)
- Check repository name is correct
- URL is: `username.github.io/repository-name`

### Problem: "Images work locally but not on GitHub Pages"
**Common Causes:**

**Case Sensitivity:**
```javascript
// Local (Windows/Mac): Works
url: "assets/Photos/Photo1.jpg"

// GitHub Pages (Linux): Fails
url: "assets/Photos/Photo1.jpg"  ❌

// Solution: Match exact case
url: "assets/photos/photo1.jpg"  ✅
```

**File Upload:**
1. Make sure photos uploaded correctly
2. Check folder structure matches
3. Verify files aren't corrupted

---

## Browser Issues

### Problem: "Site looks broken in Internet Explorer"
**Solution:**
- IE is not supported
- Use Chrome, Firefox, Edge, or Safari
- Recommend Chrome for best experience

### Problem: "Animations are choppy"
**Solutions:**
1. Close other browser tabs
2. Close other programs
3. Try different browser
4. Update browser to latest version
5. Check computer isn't overheating

### Problem: "Console shows errors"
**Common Errors & Fixes:**

**"Cannot read property"**
- Syntax error in config.js
- Missing comma or quote
- Check line number in error

**"Failed to load resource"**
- Missing file
- Wrong file path
- File not uploaded

**"Unexpected token"**
- JSON syntax error in config.js
- Missing bracket, comma, or quote
- Use online JSON validator

---

## Performance Issues

### Problem: "Site loads slowly"
**Solutions:**

**Optimize Images:**
1. Resize photos to max 1920x1080
2. Compress using TinyPNG.com
3. Keep each photo under 500KB
4. GIFs under 5MB

**Check Internet:**
1. Test on different network
2. Large files take time on slow connection
3. Wait for complete load

### Problem: "Phone gets hot when viewing"
**Solutions:**
1. This is normal for animation-heavy sites
2. Reduce battery usage: close other apps
3. View on desktop for best experience
4. Let phone cool down if needed

---

## Configuration Issues

### Problem: "Syntax error in config.js"
**How to Find:**
1. Open browser console (F12)
2. Look at error line number
3. Common issues:

```javascript
// ❌ Missing comma between items:
{
  title: "First"
  description: "Text"  ← Need comma here!
}

// ❌ Wrong quotes:
herName: "Name"  ← Wrong, should be regular quotes

// ❌ Missing closing bracket:
timeline: {
  events: [
    { }
  ]
}  ← Need closing bracket for timeline

// ✅ Correct:
{
  title: "First",
  description: "Text"
},
```

**Use a JSON Validator:**
1. Copy your config.js content
2. Go to jsonlint.com
3. Remove the `const CONFIG = ` part
4. Paste and validate
5. Fix errors shown

### Problem: "How do I know if my syntax is correct?"
**Quick Test:**
1. Open index.html
2. Press F12 → Console
3. No red errors = good
4. Red errors = check line number

---

## Mobile-Specific Issues

### Problem: "Name input keyboard covers button"
**Solutions:**
1. Tap outside keyboard to dismiss
2. Scroll if possible
3. Rotate to landscape
4. This is a mobile browser limitation

### Problem: "Animations don't work on iPhone"
**Solutions:**
1. Update iOS to latest version
2. Try Safari browser
3. Clear Safari cache
4. Some older iPhones may have reduced animations

### Problem: "Can't click buttons accurately on mobile"
**Solutions:**
1. Buttons are larger on mobile
2. Zoom out if zoomed in
3. Try landscape orientation
4. Desktop experience is better

---

## Content Formatting Issues

### Problem: "Letter has weird line breaks"
**Solutions:**

**In config.js, use proper format:**
```javascript
letter: {
  content: `First paragraph here

Second paragraph here (blank line between)

Third paragraph here`
}
```

**Avoid:**
```javascript
// ❌ Will create weird spacing:
content: `
  
  Indented text
  will look weird
`
```

### Problem: "Special characters look wrong"
**Solutions:**
1. Avoid: `, ', " inside your text
2. Use: regular quotes and apostrophes
3. Test by viewing locally first
4. Copy from a clean text editor

---

## Emergency Fixes

### "Everything is broken, help!"
**Complete Reset:**

1. **Download fresh copy**
   - Re-download the original files
   - Start customization again

2. **Check one section at a time**
   - Test name gate → works? ✅
   - Test hero → works? ✅
   - Test each section individually

3. **Revert config.js**
   - Copy the original config.js
   - Add your content back slowly
   - Test after each addition

4. **Use browser tools**
   - F12 → Console (shows errors)
   - F12 → Network (shows failed files)
   - F12 → Elements (inspect layout)

### "I need to start over"
**Clean Slate:**
1. Delete your edited config.js
2. Copy original config.js
3. Edit carefully this time
4. Test after each change
5. Save working versions

---

## Prevention Tips

**Before Making Changes:**
1. ✅ Make backup copy of config.js
2. ✅ Test locally before deploying
3. ✅ Change one thing at a time
4. ✅ Check console for errors
5. ✅ Save working versions

**While Editing:**
1. ✅ Follow example syntax exactly
2. ✅ Don't delete commas/brackets
3. ✅ Keep proper indentation
4. ✅ Use code editor with syntax highlighting
5. ✅ Test frequently

**Before Deploying:**
1. ✅ Test entire flow locally
2. ✅ Check all images load
3. ✅ Verify all text is correct
4. ✅ Read through everything once
5. ✅ Get someone else to test

---

## Getting More Help

**Self-Debugging:**
1. Browser Console (F12) - read error messages
2. Check this guide's relevant section
3. Compare with example code
4. Test in incognito mode

**Online Resources:**
- JSONLint.com - validate config syntax
- StackOverflow - search specific errors
- Browser DevTools documentation

**Last Resort:**
- Start with fresh copy
- Re-do customizations carefully
- Test each change

---

## Quick Reference

**Most Common Issues:**
1. Photos not showing → Check file paths & names
2. NO button not dodging → Refresh page
3. Changes not showing → Clear cache
4. Syntax error → Check commas & brackets
5. GitHub Pages 404 → Check repository settings

**Quick Fixes:**
- Clear cache: Ctrl+Shift+Delete
- Hard reload: Ctrl+F5
- Check console: F12
- Incognito mode: Ctrl+Shift+N
- Reset: Use original files

---

**Still stuck? Re-read the section above about your specific issue.** 

Most problems are simple fixes! 💪
