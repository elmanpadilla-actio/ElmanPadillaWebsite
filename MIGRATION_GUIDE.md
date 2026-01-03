# Website Migration Guide: Format → Self-Hosted

## Current Status
- **Domain**: Registered through Hover (managed by Format)
- **Current Host**: Format (paid service)
- **New Website**: Static HTML/CSS/JS (no server needed)
- **Goal**: Free hosting, full control

---

## Option 1: Netlify (RECOMMENDED - Easiest)

### Why Netlify?
- ✅ 100% FREE for your needs
- ✅ Drag-and-drop deployment
- ✅ Automatic HTTPS/SSL
- ✅ Custom domain support (free)
- ✅ 100GB bandwidth/month (plenty for portfolio)
- ✅ No credit card required

### Steps:

#### 1. Deploy to Netlify (5 minutes)
1. Go to https://netlify.com
2. Sign up with email (free)
3. Click "Add new site" → "Deploy manually"
4. Drag your entire "Masonry Website" folder
5. Wait 30 seconds - your site is live!
6. You get a URL like: `yourname-portfolio.netlify.app`

#### 2. Connect Your Domain (15 minutes)
1. In Netlify: Go to "Domain settings" → "Add custom domain"
2. Enter your domain name (e.g., elmanpadilla.com)
3. Netlify will show you DNS records to add

#### 3. Update Hover DNS (10 minutes)
1. Log into Hover.com (disconnect from Format first)
2. Go to your domain → DNS settings
3. Add these records (Netlify will provide exact values):
   ```
   Type: A
   Name: @
   Value: 75.2.60.5 (Netlify's IP)

   Type: CNAME
   Name: www
   Value: yourname-portfolio.netlify.app
   ```
4. Wait 24-48 hours for DNS propagation (usually 1-2 hours)

#### 4. Cancel Format Subscription
- Keep exporting any remaining content
- Cancel after confirming your new site works
- You'll save $12-25/month!

---

## Option 2: Cloudflare Pages (FREE - Best Performance)

### Why Cloudflare?
- ✅ Fastest CDN in the world
- ✅ Unlimited bandwidth
- ✅ Free SSL
- ✅ Built-in DDoS protection
- ✅ Better for large image portfolios

### Steps:
1. Create account at https://pages.cloudflare.com
2. Upload via GitHub or direct upload
3. Connect domain (if using Cloudflare DNS)
4. Deploy in seconds

---

## Option 3: GitHub Pages (FREE - Developer-Friendly)

### Why GitHub Pages?
- ✅ Free forever
- ✅ Version control included
- ✅ Good for developers
- ✅ You already have Git set up!

### Steps:
1. Create GitHub account (free)
2. Create repository: "portfolio"
3. Push your code:
   ```bash
   cd "Masonry Website"
   git remote add origin https://github.com/yourusername/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Enable GitHub Pages in repository settings
5. Site live at: `yourusername.github.io/portfolio`
6. Add custom domain in settings

---

## Domain Transfer Process

### Step 1: Disconnect from Format
1. Log into Format account
2. Go to Domain Settings
3. Find "Transfer domain management" or "Unlock domain"
4. Get authorization code (EPP code) if transferring
5. Download any remaining content/backups

### Step 2: Take Control in Hover
1. Log into Hover.com directly
2. Verify you own the domain
3. Update DNS nameservers or add A/CNAME records
4. Remove any Format-related DNS entries

### Step 3: Point to New Host
**For Netlify:**
- A Record: `@` → `75.2.60.5`
- CNAME: `www` → `yoursite.netlify.app`

**For Cloudflare Pages:**
- Use Cloudflare's nameservers (they provide instructions)

**For GitHub Pages:**
- A Records: `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- CNAME: `www` → `yourusername.github.io`

---

## Cost Comparison

### Current (Format):
- Hosting: $12-25/month ($144-300/year)
- Domain: ~$15/year (through Hover)
- **Total: $159-315/year**

### After Migration:
- Hosting: $0/month (FREE!)
- Domain: $15/year (direct Hover)
- **Total: $15/year**

**Annual Savings: $144-300!**

---

## Quick Start: Netlify in 10 Minutes

1. **Prepare your site:**
   - Your site is ready at: `~/Desktop/Personal files/.../Masonry Website/`
   - All files are static (HTML/CSS/JS) ✅

2. **Deploy:**
   ```
   - Go to netlify.com/drop
   - Drag "Masonry Website" folder
   - Done! Your site is live
   ```

3. **Add domain:**
   ```
   - Netlify Dashboard → Domain settings
   - Add custom domain
   - Update Hover DNS with provided records
   ```

4. **Cancel Format:**
   ```
   - Wait 24 hours for DNS to update
   - Test your new site thoroughly
   - Cancel Format subscription
   ```

---

## Files to Deploy

✅ **Include these folders/files:**
- `index.html` (and all other .html files)
- `css/` folder
- `js/` folder  
- `images/` folder
- `about.html`, `contact.html`, etc.

❌ **Don't include:**
- `WebSite Images/` (source files - too large)
- `.git/` folder (unless using GitHub Pages)
- Backup .tar.gz files
- `.DS_Store` files

---

## Timeline

- **Hour 1**: Deploy to Netlify/Cloudflare
- **Hour 2**: Update Hover DNS settings
- **Hours 3-48**: DNS propagation (usually 1-2 hours)
- **Day 2**: Test thoroughly, cancel Format

---

## Support Resources

**Netlify:**
- Docs: https://docs.netlify.com
- Support: Free community forum

**Cloudflare:**
- Docs: https://developers.cloudflare.com/pages
- Support: Community forum + enterprise options

**Domain (Hover):**
- Support: help@hover.com
- Phone: Available on their website

**Need Help?**
- Email me or ask in this chat
- I can guide you through each step
- All these platforms have 24/7 documentation

---

## Next Steps (Choose Your Path)

### Easiest Route (Netlify):
1. Go to netlify.com/drop
2. Drag your "Masonry Website" folder
3. Get the temporary URL
4. Update DNS in Hover
5. Done!

### Best Performance (Cloudflare):
1. Sign up at pages.cloudflare.com
2. Connect GitHub or direct upload
3. Follow their domain setup
4. Migrate DNS to Cloudflare

### Developer Route (GitHub Pages):
1. Push code to GitHub
2. Enable Pages
3. Add custom domain
4. Update Hover DNS

---

## Emergency Rollback Plan

If something goes wrong:
1. Keep Format active for 1 more month during transition
2. You have 2 backups of your website
3. DNS changes can be reverted in Hover
4. Your Git repository has full history

You can't lose your website! ✅
