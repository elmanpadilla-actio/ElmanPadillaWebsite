# Elman Padilla Portfolio Website

Modern, responsive portfolio website with masonry grid layout showcasing design, photography, and education work.

## Features

- ✨ CSS-based masonry grid layout (no external libraries)
- 📱 Fully responsive design
- 🎨 Clean, modern aesthetic with custom color scheme
- 🖼️ Lightbox gallery viewer with keyboard navigation
- 🔍 Gallery filtering by year
- ⚡ Fast loading with lazy-loaded images
- 🎯 SEO-friendly structure
- 📧 Contact form ready (Formspree/Netlify Forms)

## Tech Stack

- Pure HTML5, CSS3, JavaScript (ES6+)
- Space Grotesk & Space Mono fonts (Google Fonts)
- No build tools required—deploy directly
- Compatible with all modern browsers

## Project Structure

```
masonry-website/
├── index.html              # Homepage
├── gallery.html            # Black & White gallery
├── about.html              # About page
├── contact.html            # Contact page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── main.js             # Homepage scripts
│   ├── gallery.js          # Gallery page scripts
│   ├── masonry.js          # Masonry layout utility
│   └── data.js             # Gallery data (replace with your content)
├── images/
│   ├── gallery/            # Gallery images (add your photos here)
│   └── elman-padilla.jpg   # About page portrait
└── README.md
```

## Setup Instructions

### 1. Add Your Images

Replace placeholder images in `/images/gallery/` with your actual photographs:
- Recommended sizes: 1200-2000px on longest edge
- Format: JPG (optimized) or WebP for best performance
- Naming: `bw-01.jpg`, `bw-02.jpg`, etc.

Update `/js/data.js` with your image metadata:
```javascript
{
    id: 1,
    src: 'images/gallery/your-image.jpg',
    title: 'Your Image Title',
    year: 2024,
    width: 1600,
    height: 1200,
    category: 'black-white'
}
```

### 2. Configure Contact Form

**Option A: Formspree (Easiest)**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `YOUR_FORM_ID` in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option B: Netlify Forms**
1. Add `netlify` attribute to form tag in `contact.html`:
   ```html
   <form name="contact" method="POST" netlify>
   ```
2. Deploy to Netlify (see deployment section)

### 3. Customize Content

- **About page**: Replace `images/elman-padilla.jpg` with your portrait
- **Bio text**: Edit content in `about.html`
- **Contact info**: Update email/phone/location in `contact.html`
- **Social links**: Update Instagram/LinkedIn URLs throughout

### 4. Optional: Add More Gallery Categories

To add new galleries (e.g., "Color Photography", "Design Work"):
1. Create new HTML file (e.g., `color-gallery.html`)
2. Copy structure from `gallery.html`
3. Create new data file or filter logic in `js/data.js`
4. Add navigation link in header

## Deployment

### Netlify (Recommended - Free)

1. **Via Git (Continuous Deployment)**
   ```bash
   # Initialize git repository
   cd "Masonry Website"
   git init
   git add .
   git commit -m "Initial commit"
   
   # Push to GitHub
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
   
   Then in Netlify:
   - Connect your GitHub repository
   - Build command: (leave empty—static site)
   - Publish directory: `/`
   - Deploy!

2. **Via Drag & Drop**
   - Zip the entire `Masonry Website` folder
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag & drop your folder
   - Done! Get your `.netlify.app` URL

### Cloudflare Pages

1. Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
2. Go to Pages > Create a project
3. Connect GitHub or upload files
4. Build settings:
   - Build command: (none)
   - Output directory: `/`
5. Deploy

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd "Masonry Website"
vercel
```

## Custom Domain Setup (Hover)

After deploying, connect your domain from Hover:

### For Netlify:
1. In Netlify: Domain settings > Add custom domain > `elmanpadilla.com`
2. In Hover DNS settings:
   - **A Record**: `@` → `75.2.60.5` (Netlify load balancer)
   - **CNAME**: `www` → `your-site.netlify.app`
3. Enable HTTPS in Netlify (automatic with Let's Encrypt)

### For Cloudflare Pages:
1. In Cloudflare Pages: Custom domains > Add `elmanpadilla.com`
2. If domain is already in Cloudflare DNS, it auto-configures
3. Otherwise, transfer nameservers from Hover to Cloudflare

### For Vercel:
1. In Vercel: Project settings > Domains > Add `elmanpadilla.com`
2. In Hover DNS:
   - **A Record**: `@` → `76.76.21.21` (Vercel)
   - **CNAME**: `www` → `cname.vercel-dns.com`

**DNS propagation takes 1-48 hours**

## Performance Optimization

### Image Optimization
```bash
# Install imagemin (Node.js required)
npm install -g imagemin-cli imagemin-mozjpeg

# Optimize images
imagemin images/gallery/*.jpg --out-dir=images/gallery --plugin=mozjpeg
```

Or use online tools:
- [Squoosh.app](https://squoosh.app) (by Google)
- [TinyPNG](https://tinypng.com)

### Lazy Loading
Images already use `loading="lazy"` attribute—works in all modern browsers.

### Analytics (Optional)

**Plausible (Privacy-friendly)**
Add before `</head>`:
```html
<script defer data-domain="elmanpadilla.com" src="https://plausible.io/js/script.js"></script>
```

**Google Analytics 4**
Add before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari/Chrome (iOS 14+, Android 10+)

## Maintenance

### Adding New Images
1. Upload to `/images/gallery/`
2. Add metadata to `/js/data.js`
3. Commit and push (if using Git deployment) or re-upload

### Updating Content
- Bio: edit `about.html`
- Contact info: edit `contact.html`
- Navigation: update all HTML files' `<nav>` sections

## Cost Breakdown

| Service | Cost |
|---------|------|
| Netlify/Cloudflare/Vercel hosting | **Free** |
| Domain (elmanpadilla.com at Hover) | ~$15/year |
| SSL Certificate | **Free** (Let's Encrypt) |
| Formspree (contact form) | Free tier: 50 submissions/month |

**Total: $15/year** (just domain renewal)

## Troubleshooting

**Images not loading?**
- Check file paths in `data.js` match actual files in `/images/gallery/`
- Check browser console (F12) for errors

**Contact form not working?**
- Verify Formspree ID is correct
- Check form `action` URL has no typos
- For Netlify Forms, ensure `netlify` attribute is present and deployed

**Mobile menu not toggling?**
- Check browser console for JS errors
- Verify `main.js` is loading (check Network tab)

**Gallery filter not working?**
- Ensure `data.js` is loaded before `gallery.js`
- Check year values in data match filter buttons

## Next Steps

- [ ] Add your images to `/images/gallery/`
- [ ] Update gallery data in `/js/data.js`
- [ ] Replace about page portrait
- [ ] Configure contact form (Formspree/Netlify)
- [ ] Deploy to Netlify/Cloudflare/Vercel
- [ ] Point Hover domain to host
- [ ] Test on mobile devices
- [ ] Add analytics (optional)
- [ ] Submit sitemap to Google Search Console

## Support

For questions or issues:
- Email: elmanpadilla@gmail.com
- LinkedIn: [linkedin.com/in/elman-padilla-9992627](https://es.linkedin.com/in/elman-padilla-9992627)

---

Built with ❤️ by Elman Padilla • 2025
