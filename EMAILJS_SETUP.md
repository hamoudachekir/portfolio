# EmailJS Setup Guide for Direct Email Sending

## 🎯 Goal
Enable the contact form to send emails directly to `hamoudachkir@yahoo.fr` without opening email clients.

## 📧 EmailJS Setup Steps

### 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (it's FREE - 200 emails/month)
3. Sign up with your email or Google account
4. Verify your email address

### 2. Add Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Yahoo** (since your email is @yahoo.fr)
4. Fill in your Yahoo email credentials:
   - Email: `hamoudachkir@yahoo.fr`
   - Password: Your Yahoo password
   - Note: You may need to create an "App Password" in Yahoo Mail settings
5. Click **Create Service**
6. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template:

**Subject:**
```
New Contact from {{from_name}} - Portfolio
```

**Content:**
```
You have a new message from your portfolio!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Click **Save**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (looks like: `xxxxxxxxxxxxxxx`)
3. **Copy this key**

### 5. Update the Code

Open `src/components/Contact.jsx` and replace these values on lines 16-18:

```javascript
const serviceId = 'service_xxxxxxx';    // Replace with YOUR Service ID
const templateId = 'template_xxxxxxx';  // Replace with YOUR Template ID
const publicKey = 'xxxxxxxxxxxxxxx';    // Replace with YOUR Public Key
```

### 6. Build and Deploy
```bash
npm run build
git add .
git commit -m "Configure EmailJS for direct email sending"
git push origin main
netlify deploy --prod
```

## ✅ Testing
1. Visit your live site: https://hamouda-portfolio.netlify.app
2. Fill out the contact form
3. Submit
4. Check your email at `hamoudachkir@yahoo.fr`

## 🔐 Security Notes
- Public Key is safe to expose (it's meant for frontend)
- Service ID and Template ID are also public
- Your email password is stored securely on EmailJS servers
- Consider using Yahoo App Password for better security

## 💰 Pricing
- **Free Tier**: 200 emails/month
- **Personal**: $7/month for 1,000 emails
- More than enough for a portfolio contact form!

## 🆘 Troubleshooting

### "Failed to send message"
- Check all IDs are correct
- Verify Yahoo service is connected
- Check EmailJS dashboard for error logs

### Yahoo Authentication Issues
1. Go to Yahoo Mail Settings
2. Enable "Allow apps that use less secure sign in"
3. Or create an App Password and use that

### Still Not Working?
- Check browser console for errors
- Visit EmailJS dashboard → Email History
- Look for failed attempts and error messages

---

Once configured, your contact form will send emails directly without any popups or email client redirects! 🚀