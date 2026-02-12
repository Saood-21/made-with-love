# 🚀 GitHub Pages Deployment Instructions

Follow these steps to get your Valentine's website live!

## Method 1: Using Git Command Line (Recommended)

### Prerequisites
- Install Git: https://git-scm.com/downloads
- Create a GitHub account: https://github.com

### Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `valentine-website` (or any name you like)
3. Description: "A retro 90s Valentine's Day website 💖"
4. Set to **Public**
5. **DO NOT** check "Initialize with README"
6. Click **"Create repository"**

### Step 2: Navigate to Your Project Folder

Open Terminal (Mac/Linux) or Command Prompt (Windows) and navigate to where you downloaded the files:

```bash
cd path/to/valentine-website
```

### Step 3: Initialize Git and Push

Copy and paste these commands one at a time (replace YOUR-USERNAME and YOUR-REPO with your actual GitHub username and repository name):

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Valentine's website"

# Add remote (UPDATE THIS LINE WITH YOUR INFO!)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Example with actual username:
```bash
git remote add origin https://github.com/johndoe/valentine-website.git
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top navigation)
3. Click **"Pages"** in left sidebar
4. Under "Source", select **"Deploy from a branch"**
5. Under "Branch", select **"main"** and **"/ (root)"**
6. Click **"Save"**

### Step 5: Wait and Get Your URL

- Wait 2-5 minutes for deployment
- Your site will be live at: `https://YOUR-USERNAME.github.io/YOUR-REPO/`
- A green checkmark will appear when ready

---

## Method 2: Using GitHub Web Interface (Easier, No Git Required)

### Step 1: Create Repository

1. Go to https://github.com/new
2. Name: `valentine-website`
3. Set to **Public**
4. Click **"Create repository"**

### Step 2: Upload Files

1. On the repository page, click **"uploading an existing file"**
2. Drag and drop the ENTIRE `valentine-website` folder contents:
   - All 5 HTML files
   - README.md
   - .gitignore
   - assets folder (with images and music subfolders inside)
3. Write commit message: "Initial commit"
4. Click **"Commit changes"**

**Important**: Make sure the folder structure is preserved! You should see:
```
valentine-website/
├── index.html
├── welcome.html
├── photos.html
├── mixtape.html
├── timeline.html
├── README.md
├── .gitignore
└── assets/
    ├── images/
    └── music/
```

### Step 3: Enable GitHub Pages

1. Click **"Settings"** > **"Pages"**
2. Source: **"Deploy from a branch"**
3. Branch: **"main"** and **"/ (root)"**
4. Click **"Save"**

### Step 4: Get Your URL

Wait 2-5 minutes, then visit:
`https://YOUR-USERNAME.github.io/YOUR-REPO/`

---

## Adding Your Content After Deployment

### Adding Photos

1. In your repository, click on `assets` > `images`
2. Click **"Add file"** > **"Upload files"**
3. Upload your photos named: `photo1.jpg`, `photo2.jpg`, etc.
4. Commit changes
5. Edit `photos.html` (click the file, then pencil icon)
6. Uncomment the image tags as described in the README
7. Commit changes

### Adding Music

1. In your repository, click on `assets` > `music`
2. Click **"Add file"** > **"Upload files"**
3. Upload your file named: `background-music.mp3`
4. Commit changes
5. Wait 1-2 minutes for changes to go live

### Editing Text Content

1. Click on any HTML file (index.html, mixtape.html, etc.)
2. Click the pencil icon ✏️ to edit
3. Make your changes
4. Scroll down and click **"Commit changes"**
5. Changes go live in 1-2 minutes

---

## Updating Your Site Later

### Using Git Command Line

```bash
# Make your changes to files locally

# Add changes
git add .

# Commit with a message
git commit -m "Updated photos and text"

# Push to GitHub
git push
```

### Using Web Interface

1. Navigate to the file you want to edit
2. Click the pencil icon ✏️
3. Make changes
4. Commit changes at the bottom
5. Wait 1-2 minutes for deployment

---

## Verifying Your Folder Structure

After uploading, your GitHub repository should look like this:

```
Repository Root:
├── index.html          ✅
├── welcome.html        ✅
├── photos.html         ✅
├── mixtape.html        ✅
├── timeline.html       ✅
├── README.md           ✅
├── .gitignore          ✅
└── assets/
    ├── images/
    │   ├── README.md
    │   ├── photo1.jpg (when you add it)
    │   ├── photo2.jpg (when you add it)
    │   └── ...
    └── music/
        ├── README.md
        └── background-music.mp3 (when you add it)
```

**Critical**: All HTML files must be in the root directory, NOT inside a subfolder!

---

## Troubleshooting

### Site Shows 404 Error
- Check that `index.html` is in the root of your repository
- Verify repository is public
- Wait 5 full minutes after enabling Pages
- Check Settings > Pages shows "Your site is live at..."

### Folders Not Showing Up
- GitHub doesn't show empty folders
- The README.md files in assets/images and assets/music will keep folders visible
- When you add images/music, folders will appear

### Images Not Loading
- Verify image files are in `assets/images/` folder
- Check file names match exactly: `photo1.jpg` (case-sensitive!)
- Make sure you uncommented the `<img>` tags in photos.html
- Clear browser cache and refresh

### Music Not Playing
- Verify file is named `background-music.mp3` exactly
- Verify file is in `assets/music/` folder
- Click the music toggle button (🎵) on the page
- Some browsers block autoplay - user must click to start

### Changes Not Appearing
- Wait 2-3 minutes after committing
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Check GitHub Actions tab for any build errors

---

## Testing Before Going Live

Before sharing with your Valentine:

1. ✅ Open each page locally in your browser
2. ✅ Click all navigation links
3. ✅ Test the YES/NO buttons on index.html
4. ✅ Verify photo slideshow advances
5. ✅ Check music toggle works
6. ✅ Read through all text for typos
7. ✅ Test on mobile device
8. ✅ Verify all your custom content is there

---

## Pro Tips

### Custom Domain
Want a custom URL like `myvalentine.com`?
1. Buy a domain from Namecheap, Google Domains, etc.
2. In GitHub Settings > Pages, add your custom domain
3. Update your domain's DNS settings
4. Guide: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

### Keep It Private Initially
- Make repository **private** while customizing
- Upgrade to GitHub Pro (free for students) or pay $4/month
- OR: Use a different branch for work, merge to main when ready

### Analytics
Want to know when they visit?
- Add Google Analytics
- Or use free alternatives like Plausible or Simple Analytics

---

## Getting Help

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Git Basics**: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- **Check Status**: Visit your repo's "Actions" tab to see build status

---

## Quick Reference

**Your Site URL Format:**
```
https://YOUR-USERNAME.github.io/YOUR-REPO/
```

**Example:**
```
https://johndoe.github.io/valentine-website/
```

**Common Git Commands:**
```bash
git status              # See what changed
git add .               # Stage all changes
git commit -m "message" # Commit changes
git push                # Push to GitHub
git pull                # Pull latest changes
```

---

Made with 💖 - Now go make it yours and share it with your Valentine! 🌟
