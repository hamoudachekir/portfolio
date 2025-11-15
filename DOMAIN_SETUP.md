# Custom Domain Setup Guide

## 🌐 Current Status
Your site is live at: **https://roaring-platypus-26489a.netlify.app**

## ⚠️ Domain Setup Required

I cannot automatically change your domain to `hamouda-portfolio.com` as this requires:
1. **Domain Purchase** (costs $10-15/year)
2. **Payment** from your account
3. **DNS Configuration** on your domain provider

## Option 1: Purchase hamouda-portfolio.com (Recommended)

### Recommended Domain Providers
1. **Namecheap** (namecheap.com) - $10-15/year
2. **Google Domains** (domains.google) - $12-15/year  
3. **Cloudflare** (cloudflare.com) - $8-12/year
4. **GoDaddy** (godaddy.com) - $10-20/year

### Suggested Domain Names
- `hamouda-devops.com`
- `hamoudachekir.dev`
- `hamouda-portfolio.com`
- `chekir-devops.com`
- `hamouda.cloud`

## Option 2: Use Netlify Subdomain (Free)

You can customize your current Netlify subdomain:

1. Go to your Netlify dashboard
2. Click on "Site settings"
3. Click "Change site name"
4. Change from `roaring-platypus-26489a` to something like:
   - `hamouda-devops`
   - `hamouda-portfolio`
   - `chekir-portfolio`

## Steps to Configure Custom Domain

### If you purchase a domain:

1. **Purchase your domain** from any provider above

2. **Add domain to Netlify:**
   - Go to your Netlify dashboard
   - Click "Domain settings"
   - Click "Add custom domain"
   - Enter your domain (e.g., `hamoudadevops.com`)

3. **Configure DNS:**
   - In your domain provider's DNS settings, add these records:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME  
   Name: www
   Value: roaring-platypus-26489a.netlify.app
   ```

4. **Enable HTTPS:**
   - Netlify will automatically provision SSL certificate
   - This takes 5-10 minutes

### Benefits of Custom Domain:
- ✅ Professional appearance
- ✅ Better SEO ranking
- ✅ Easier to remember and share
- ✅ Custom email addresses (contact@yourdomain.com)
- ✅ Brand recognition

## Current Status
Your site is live at: https://roaring-platypus-26489a.netlify.app

After domain setup, it will be available at your custom domain!