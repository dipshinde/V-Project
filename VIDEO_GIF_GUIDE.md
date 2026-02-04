# 🎬 Video & GIF Guide

## Your Video Has Been Converted!

I've converted your uploaded `Video-98.mp4` into optimized GIFs for the website.

### Available GIF Options:

1. **hero-optimized.gif** (1.4MB) - Currently used in hero section
   - 320px width, 10fps, 3 seconds
   - Best for performance and loading speed
   - ✅ **Currently Active**

2. **hero.gif** (5.9MB) - Full quality version
   - 480px width, 15fps, 5 seconds
   - Higher quality but larger file size
   - Available if you want better quality

3. **cute.gif** (58KB) - Original from your project
   - Small, fast loading
   - Can be used anywhere

### How to Switch GIFs:

Open `js/config.js` and change line 20:

```javascript
// Option 1: Optimized (recommended - faster loading)
gifUrl: "assets/gifs/hero-optimized.gif",

// Option 2: Full quality (if you want higher quality)
gifUrl: "assets/gifs/hero.gif",

// Option 3: Original cute GIF
gifUrl: "assets/gifs/cute.gif",
```

---

## Adding More Videos/GIFs

### Method 1: Convert Videos to GIFs Online

**Recommended Sites:**
- ezgif.com (best quality control)
- cloudconvert.com
- gifmaker.me

**Settings:**
- Width: 320-480px (smaller = faster)
- FPS: 10-15 (lower = smaller file)
- Duration: 2-5 seconds (shorter = smaller)
- Target size: Under 2MB

### Method 2: Use Existing GIFs

**Free GIF Sources:**
- GIPHY
- Tenor
- Imgur
- Reddit

**Tips:**
- Right-click → "Save image as"
- Look for smaller file sizes
- Romantic/cute themes work best

### Method 3: Create GIFs from Photos

**Tools:**
- PhotoScape (Windows)
- GIMP (Cross-platform)
- Online: photomosh.com

---

## Where to Use Videos/GIFs

### 1. Hero Section (Main GIF)
**File**: `js/config.js` → `hero.gifUrl`
**Recommendation**: 320-480px, 2-5 seconds, under 2MB
**Current**: hero-optimized.gif

### 2. Gallery Section
**File**: `js/config.js` → `gallery.items`
**Format**:
```javascript
{
  type: "gif",
  url: "assets/gifs/your-gif.gif",
  caption: "Your caption here"
}
```

**Examples**:
```javascript
{
  type: "gif",
  url: "assets/gifs/us-laughing.gif",
  caption: "That day we couldn't stop laughing 😂"
},
{
  type: "gif",
  url: "assets/gifs/silly-moment.gif",
  caption: "Being silly together 🤪"
}
```

---

## Converting More Videos

If you have more videos to convert, here's what to do:

### Using Online Tools (Easiest):

1. Go to **ezgif.com/video-to-gif**
2. Upload your video
3. Set options:
   - Start time: where to begin
   - End time: where to stop (keep under 5 seconds)
   - Size: 320 or 480 width
   - Frame rate: 10-15 fps
4. Click "Convert to GIF"
5. Download and save to `assets/gifs/`

### File Naming:
- `hero.gif` - Main hero section GIF
- `memory1.gif`, `memory2.gif`, etc. - Gallery GIFs
- `celebration.gif` - Any special moment
- Use descriptive names: `first-date.gif`, `beach-day.gif`

---

## GIF Optimization Tips

### If GIF is Too Large (>5MB):

1. **Reduce dimensions**: 320px instead of 480px
2. **Lower FPS**: 10fps instead of 15fps
3. **Shorten duration**: 2-3 seconds instead of 5
4. **Reduce colors**: 128 or 64 colors (in advanced tools)
5. **Use online optimizer**: ezgif.com/optimize

### Quality vs Size Balance:

| Size | Quality | Use Case |
|------|---------|----------|
| <500KB | Low | Background animations |
| 500KB-2MB | Good | Hero section (recommended) |
| 2MB-5MB | High | Special showcase GIF |
| >5MB | Very High | Avoid (too slow) |

---

## Current GIF Setup

```
assets/gifs/
├── hero-optimized.gif (1.4MB) ← Currently in use
├── hero.gif (5.9MB) ← Available upgrade
├── cute.gif (58KB) ← Fallback option
└── [Add more GIFs here]
```

---

## Example Gallery with Multiple GIFs

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
      url: "assets/gifs/hero-optimized.gif",
      caption: "This moment 💕"
    },
    {
      type: "image",
      url: "assets/photos/photo2.jpg",
      caption: "Us being us"
    },
    {
      type: "gif",
      url: "assets/gifs/cute.gif",
      caption: "Always playful 😊"
    }
  ]
}
```

---

## Performance Tips

### For Best Loading Speed:

1. **Hero GIF**: 1-2MB max
2. **Gallery GIFs**: 500KB-1MB each
3. **Total GIFs**: 3-5 maximum
4. **Always test**: Open index.html and check load time

### If Site Loads Slowly:

- Use hero-optimized.gif (smaller)
- Reduce gallery GIFs to 2-3
- Compress existing GIFs at ezgif.com/optimize
- Consider replacing some GIFs with photos

---

## Video Format Support

**✅ Can Convert to GIF:**
- .mp4
- .mov
- .avi
- .webm
- .flv

**❌ Cannot Use Directly:**
- Videos don't autoplay well in HTML
- GIF format is better for this use case
- Converts to GIF for best compatibility

---

## Quick Reference Commands

If you have command line access:

```bash
# Optimized GIF (recommended)
ffmpeg -i input.mp4 -vf "fps=10,scale=320:-1" -t 3 output.gif

# High quality GIF
ffmpeg -i input.mp4 -vf "fps=15,scale=480:-1" -t 5 output.gif

# Very small GIF
ffmpeg -i input.mp4 -vf "fps=8,scale=240:-1" -t 2 output.gif
```

---

## Best Practices

### ✅ DO:
- Keep GIFs under 2MB for hero section
- Use 2-5 second loops
- Test on slower connections
- Mix GIFs and photos in gallery
- Use romantic/cute content

### ❌ DON'T:
- Use GIFs over 5MB (too slow)
- Add more than 5 GIFs total
- Use low quality/pixelated GIFs
- Forget to add captions
- Use videos directly (convert first)

---

## Troubleshooting

**GIF not showing:**
- Check file path in config.js
- Verify file is in assets/gifs/
- Check file name matches exactly (case-sensitive)
- Try opening GIF directly in browser

**GIF too large/slow:**
- Use hero-optimized.gif instead of hero.gif
- Compress at ezgif.com/optimize
- Reduce dimensions or duration

**GIF looks pixelated:**
- Use larger dimensions (480px)
- Increase FPS to 15
- Use higher quality source video
- Try hero.gif (full quality version)

---

## Your Current Setup

✅ **Hero Section**: Using hero-optimized.gif (1.4MB, fast loading)  
✅ **Fallback Available**: hero.gif (5.9MB, higher quality)  
✅ **Original Preserved**: cute.gif (58KB, always fast)  

**You're all set!** Just add more GIFs to `assets/gifs/` and update `config.js` to use them.

---

## Need Help?

- **Convert videos**: Use ezgif.com
- **Find GIFs**: GIPHY, Tenor
- **Optimize GIFs**: ezgif.com/optimize
- **Test loading**: Open index.html in browser

Happy creating! 💖
