# 💖 Retro 90s Valentine's Day Website 💖

A fun, nostalgic multi-page website with a retro 90s internet aesthetic!

## 📁 Folder Structure

```
valentine-website/
├── index.html              # Main "Will you be my Valentine?" page
├── welcome.html            # Welcome page with navigation
├── photos.html             # Photo slideshow page
├── mixtape.html            # Love mixtape page
├── timeline.html           # Relationship timeline page
├── README.md               # This file
├── .gitignore              # Git ignore file
└── assets/
    ├── images/             # Put your photos here (photo1.jpg, photo2.jpg, etc.)
    │   └── README.md       # Instructions for adding images
    └── music/              # Put your music file here (background-music.mp3)
        └── README.md       # Instructions for adding music
```

## 🚀 Quick Start

### 1. Clone or Download This Repository

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

### 2. Add Your Media Files

**Add Photos:**
- Place 6 photos in `assets/images/` folder
- Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`, etc.
- Edit `photos.html` and uncomment the image tags

**Add Music:**
- Place your music file in `assets/music/` folder
- Name it: `background-music.mp3`
- It will automatically work on all pages!

### 3. Customize Content

Edit the HTML files to personalize:
- **index.html** - The question and victory message
- **welcome.html** - Welcome message
- **photos.html** - Photo captions
- **mixtape.html** - Song titles, artists, and personal notes
- **timeline.html** - Dates, milestones, and descriptions

### 4. Test Locally

Just open `index.html` in your browser to preview!

### 5. Deploy to GitHub Pages

1. Push all files to your GitHub repository
2. Go to Settings > Pages
3. Select "Deploy from a branch" > "main" > "/ (root)"
4. Wait 2-5 minutes
5. Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`

## ✨ Features

✅ Heart emoji cursor trail that follows the mouse
✅ Twinkling starfield background
✅ Animated scrolling marquee banner (different on each page)
✅ Music toggle button with background music
✅ Floating sparkles and hearts animations
✅ Retro aesthetic: chunky borders, bright pinks/purples
✅ Gradient backgrounds and multiple box shadows
✅ Pulse, hover, and rotation animations
✅ Fully responsive design

## 📸 Adding Photos

1. Save your photos as `photo1.jpg` through `photo6.jpg` in `assets/images/`
2. Open `photos.html` in a text editor
3. Find the commented image tags that look like this:
   ```html
   <!-- <img src="assets/images/photo1.jpg" style="width: 100%; border-radius: 10px;" alt="First Memory"> -->
   ```
4. Remove the `<!--` and `-->` to uncomment:
   ```html
   <img src="assets/images/photo1.jpg" style="width: 100%; border-radius: 10px;" alt="First Memory">
   ```
5. Do this for all 6 photos
6. Update the captions below each photo

**Image Tips:**
- Recommended size: 800-1200px wide
- Formats: JPG or PNG
- Keep files under 2MB each
- Aspect ratio: 4:3 or 16:9

## 🎵 Adding Background Music

1. Get a music file (MP3 recommended)
2. Name it `background-music.mp3`
3. Place it in `assets/music/` folder
4. That's it! It's already configured to work

**Music Sources (royalty-free):**
- YouTube Audio Library
- Free Music Archive
- Incompetech
- Bensound

Make sure you have rights to use any music!

## 🎨 Customization Guide

### Change Colors

All colors are defined in the `<style>` section of each HTML file. Look for:
- `#ff1493` - Hot pink
- `#ff69b4` - Light pink
- `#7873f5` / `#9370db` - Purple shades

### Change Fonts

The site uses Google Fonts. To change them, update the `<link>` in the `<head>`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

### Add More Photos

In `photos.html`, copy a slide block and paste it before the controls:
```html
<div class="slide">
    <div class="photo-frame">
        <img src="assets/images/photo7.jpg" style="width: 100%; border-radius: 10px;" alt="New Memory">
        <div class="photo-caption">Your new caption here!</div>
    </div>
</div>
```

Update the slide counter JavaScript at the bottom.

### Add More Songs

In `mixtape.html`, copy a song block:
```html
<div class="song">
    <div class="song-number">9</div>
    <div class="song-info">
        <div class="song-title">New Song Title</div>
        <div class="song-artist">Artist Name</div>
        <div class="song-note">Why this song is special!</div>
    </div>
</div>
```

### Add More Milestones

In `timeline.html`, copy a milestone block:
```html
<div class="milestone">
    <div class="milestone-content">
        <div class="milestone-date">New Date</div>
        <div class="milestone-title">New Milestone</div>
        <div class="milestone-description">Description here!</div>
    </div>
    <div class="milestone-icon">🎉</div>
</div>
```

## 🔧 Troubleshooting

**Music not playing?**
- Check file name is exactly `background-music.mp3`
- Check file is in `assets/music/` folder
- Make sure it's an MP3 file
- Some browsers block autoplay - click the music button

**Photos not showing?**
- Check file names match exactly (case-sensitive)
- Verify files are in `assets/images/` folder
- Make sure you uncommented the image tags
- Check image file formats (JPG, PNG, GIF supported)

**Buttons not working?**
- Make sure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Site not loading on GitHub Pages?**
- Verify all files are in the repository
- Check that `index.html` is in the root (not in a subfolder)
- Wait 5 minutes after pushing changes
- Make sure repository is public

## 📱 Mobile Support

The site is fully responsive and works great on:
- 📱 Phones (iOS & Android)
- 📱 Tablets
- 💻 Laptops
- 🖥️ Desktops

The timeline layout adjusts automatically on smaller screens!

## 🎯 Browser Support

Works on all modern browsers:
- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## 💡 Pro Tips

- **Test before sharing**: Open the site locally first to make sure everything works
- **Optimize images**: Use online tools to compress images before uploading
- **Backup**: Keep a copy of your customized version locally
- **Version control**: Commit changes regularly with descriptive messages
- **Mobile test**: Check how it looks on your phone before sharing!

## 📝 License

Feel free to use, modify, and share this project! Made with 💖 for Valentine's Day.

## 🆘 Need Help?

If you run into issues:
1. Check the README files in `assets/images/` and `assets/music/`
2. Review the troubleshooting section above
3. Make sure file names match exactly (including capitalization)
4. Test locally before deploying to GitHub Pages

---

Made with 💖 for Valentine's Day!
Enjoy your nostalgic journey through the 90s internet aesthetic! 🌟✨
