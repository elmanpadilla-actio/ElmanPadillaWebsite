# Deployment Guide

## Quick Deploy to Netlify (No Command Line)

1. **Prepare Your Site**
   - Add your images to `/images/gallery/`
   - Update `/js/data.js` with your image info
   - Test locally by opening `index.html` in a browser

2. **Drag & Drop Deploy**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag the entire "Masonry Website" folder onto the page
   - Wait 30 seconds—done! You'll get a URL like `random-name-123456.netlify.app`

3. **Configure Contact Form**
   - In `contact.html`, add `netlify` to the form tag:
     ```html
     <form name="contact" method="POST" netlify>
     ```
   - Re-upload (drag & drop again to the same site in Netlify dashboard)

4. **Custom Domain (Hover + Netlify)**
   
   **In Netlify:**
   - Go to Site settings > Domain management > Add custom domain
   - Enter `elmanpadilla.com` and `www.elmanpadilla.com`
   - Netlify will show you DNS records to add
   
   **In Hover:**
   - Log in to [hover.com](https://www.hover.com)
   - Go to your domain > DNS settings
   - Delete existing A/CNAME records for `@` and `www`
   - Add new records:
     - **A Record**: Name: `@`, Value: `75.2.60.5` (Netlify load balancer)
     - **CNAME**: Name: `www`, Value: `your-site-name.netlify.app`
   - Save changes
   
   **Back in Netlify:**
   - Enable HTTPS (automatic with Let's Encrypt)
   - Set primary domain (with or without `www`)
   
   **Wait 1-24 hours for DNS to propagate**

5. **Done!**
   - Visit `https://elmanpadilla.com`
   - Test contact form, gallery, mobile responsiveness

## Alternative: Cloudflare Pages

1. **Upload via Dashboard**
   - Sign up at [dash.cloudflare.com](https://dash.cloudflare.com)
   - Pages > Create a project > Upload assets
   - Drag your folder > Deploy

2. **Connect Domain**
   - In Cloudflare Pages: Custom domains > Add `elmanpadilla.com`
   - If domain DNS is managed by Cloudflare (recommended):
     - Transfer nameservers from Hover to Cloudflare (one-time setup)
     - Cloudflare auto-configures DNS for Pages
   - If keeping DNS at Hover:
     - Add CNAME: `www` → `your-project.pages.dev`
     - Add CNAME flattening for apex or A record to Cloudflare IP

## Updating Your Site

### Netlify:
- Make changes locally
- Drag & drop the updated folder to Netlify (same site)
- New version deploys in ~30 seconds

### Cloudflare Pages:
- Re-upload via dashboard, or
- Connect to GitHub for automatic deployments on push

## Troubleshooting

**DNS not working after 24 hours?**
- Check DNS propagation: [whatsmydns.net](https://www.whatsmydns.net)
- Verify records in Hover match Netlify/Cloudflare instructions exactly
- Check for typos in CNAME targets (no `https://`, no trailing slash)

**Contact form submissions not arriving?**
- Check Netlify Forms dashboard (Forms tab in site settings)
- Verify `netlify` attribute is on `<form>` tag
- Check spam folder for test emails

**Site looks broken after upload?**
- Ensure all files/folders uploaded (check for missing `css/` or `js/` folders)
- Open browser console (F12) to check for 404 errors
- Verify file paths are relative (no `C:/Users/...` absolute paths)

---

Need help? Email elmanpadilla@gmail.com
