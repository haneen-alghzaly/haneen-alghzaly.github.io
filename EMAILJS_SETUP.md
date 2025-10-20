# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS so your contact form actually sends emails to haneenghzaly3@gmail.com.

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

### 2. Set Up Email Service
1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended for personal use)
4. Connect your Gmail account (haneenghzaly3@gmail.com)
5. **Save the Service ID** - you'll need this later

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

```html
Subject: New Portfolio Contact: {{subject}}

Hello,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Save the Template ID** - you'll need this later

### 4. Get Your Public Key
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**

### 5. Update Your Configuration
Replace the placeholder values in `config.js`:

```javascript
emailjs: {
    serviceId: "YOUR_ACTUAL_SERVICE_ID", // From step 2
    templateId: "YOUR_ACTUAL_TEMPLATE_ID", // From step 3
    publicKey: "YOUR_ACTUAL_PUBLIC_KEY", // From step 4
    toEmail: "haneenghzaly3@gmail.com"
}
```

## 📧 How It Works

1. **User fills out form** on your portfolio
2. **JavaScript validates** the input
3. **EmailJS sends email** using your Gmail account
4. **Email arrives** at haneenghzaly3@gmail.com
5. **User gets confirmation** message

## 🔧 Alternative Setup Options

### Option 1: Use Your Own Email
- Set up EmailJS with your personal Gmail
- All contact form emails will come from your Gmail account
- You'll receive them at haneenghzaly3@gmail.com

### Option 2: Use a Different Email Service
- Outlook, Yahoo, or other email providers
- Follow the same steps but choose different service

### Option 3: Custom SMTP
- Use your own email server
- More advanced setup required

## 🧪 Testing

1. **Update config.js** with your real EmailJS credentials
2. **Open your portfolio** in a browser
3. **Go to Contact section** and fill out the form
4. **Submit** and check:
   - Success message appears
   - Email arrives at haneenghzaly3@gmail.com
   - Check browser console for any errors

## 🚨 Troubleshooting

### Issue: "Email service not configured"
**Solution**: Update the config.js file with your real EmailJS credentials

### Issue: "Failed to send message"
**Solution**: 
- Check your EmailJS dashboard for errors
- Verify service is connected
- Check browser console for details

### Issue: No emails received
**Solution**:
- Check spam folder
- Verify Gmail connection in EmailJS
- Test with a simple email first

## 💰 Pricing

- **Free Tier**: 200 emails/month
- **Paid Plans**: Start at $15/month for more emails
- **Personal Use**: Free tier is usually sufficient

## 🔒 Security Notes

- Your EmailJS public key is safe to expose
- Service and template IDs are also public
- Gmail connection is secure
- No sensitive data is stored on EmailJS servers

## 📱 Mobile Testing

Test your contact form on mobile devices to ensure it works everywhere:
- iOS Safari
- Android Chrome
- Mobile responsiveness

## 🎯 Next Steps

After setup:
1. **Test thoroughly** with different email addresses
2. **Monitor your inbox** for contact form submissions
3. **Set up email filters** in Gmail if needed
4. **Consider auto-replies** for immediate acknowledgment

---

**Need Help?** Check EmailJS documentation or contact their support team.

**Your contact form will be fully functional once you complete these steps!** 🎉


