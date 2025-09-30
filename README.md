# Elisa Personal Website 🌟

A modern, responsive personal website built with Next.js, showcasing portfolio projects, case studies, and professional information.

## 🚀 Quick Start Guide (For Non-Technical Users)

This guide will help you get your website running on your computer so you can see changes as you edit it in Cursor.

### Prerequisites

Before you start, make sure you have:
- **Node.js** installed on your computer ([Download here](https://nodejs.org/))
- **Cursor** editor ([Download here](https://cursor.sh/))

### Getting Started

#### Step 1: Open the Project in Cursor
1. Open Cursor
2. Click `File` → `Open Folder`
3. Navigate to this folder and open it

#### Step 2: Start the Development Server

**Option A: Using the Easy Starter Script (Recommended)**

1. Open Cursor's Terminal (View → Terminal or press `` Ctrl+` ``)
2. Copy and paste this command and press Enter:
   ```bash
   chmod +x start.sh && ./start.sh
   ```
3. Wait for the server to start (you'll see a message saying it's running)
4. Your website will automatically open at: **http://localhost:3000**

**Option B: Manual Start**

1. Open Terminal in Cursor
2. Run these commands one by one:
   ```bash
   pnpm install
   pnpm dev
   ```

### 🎨 Making Changes

Once the development server is running:

1. **Edit files** in Cursor
2. **Save your changes** (Cmd+S or Ctrl+S)
3. **See updates instantly** in your browser - the page will automatically refresh!

### 📁 Important Files to Edit

- **Content & Text**:
  - `app/page.tsx` - Homepage content
  - `components/hero-section.tsx` - Hero/banner section
  - `components/about-section.tsx` - About section
  - `components/portfolio-section.tsx` - Portfolio projects
  
- **Images**:
  - Add your images to the `public/` folder
  - Reference them in code like: `/your-image.jpg`
  
- **Styles**:
  - `app/globals.css` - Global styles
  - `styles/globals.css` - Additional styles

### 🛑 Stopping the Server

To stop the development server:
1. Go to the Terminal in Cursor
2. Press `Ctrl+C` (or `Cmd+C` on Mac)

### 🔄 Starting Again

Next time you want to work on your website:
1. Open the project in Cursor
2. Open Terminal
3. Run: `./start.sh` (or `pnpm dev`)

### 🌐 Publishing Your Website

Once you're happy with your changes:

1. **Save all your files**
2. **Open Terminal** in Cursor
3. **Run these commands**:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```

Your changes will be pushed to GitHub and can be deployed to your hosting platform (Vercel, Netlify, etc.).

## 📚 Project Structure

```
portfolio-clone/
├── app/                    # App routes and pages
│   ├── page.tsx           # Homepage
│   ├── layout.tsx         # Main layout
│   └── case-studies/      # Case study pages
├── components/            # Reusable components
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── portfolio-section.tsx
│   └── ui/               # UI components
├── public/               # Static files (images, etc.)
├── styles/               # Stylesheets and images
└── start.sh             # Easy starter script

```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Package Manager**: pnpm

## 💡 Tips

- **Auto-save**: Enable auto-save in Cursor (File → Auto Save) to see changes immediately
- **Browser DevTools**: Press F12 in your browser to see the developer tools
- **Hot Reload**: The page updates automatically when you save - no need to refresh!
- **Cursor AI**: Use Cursor's AI assistant (Cmd+K) to help with editing

## 🆘 Troubleshooting

### Server won't start?
```bash
# Try cleaning and reinstalling
rm -rf node_modules
rm -rf .next
pnpm install
pnpm dev
```

### Port already in use?
If you see "Port 3000 is already in use":
```bash
# Kill the process and restart
lsof -ti:3000 | xargs kill
./start.sh
```

### Changes not showing?
1. Make sure you saved the file (Cmd+S / Ctrl+S)
2. Hard refresh your browser (Cmd+Shift+R / Ctrl+Shift+R)
3. Check the Terminal for any error messages

## 📞 Need Help?

- Check the Terminal output for error messages
- Use Cursor's AI chat to ask questions about the code
- Make sure all files are saved before testing

## 📝 License

Private project - All rights reserved

---

**Happy coding! 🎉**

*Made with ❤️ using Next.js and Cursor*
