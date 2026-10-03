# Email Setup Guide - Contact Form

## Overview
The contact form is now configured to send emails to the owner (srivaaniagro@gmail.com) when someone submits an enquiry.

## How to Set Up EmailJS

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

### Step 2: Get Your Public Key
1. In EmailJS Dashboard, go to **Account** → **General**
2. Copy your **Public Key** (starts with numbers/letters)
3. Open `/src/pages/ContactPage.jsx`
4. Replace `YOUR_EMAILJS_PUBLIC_KEY` with your actual public key (line 8)

### Step 3: Create Email Service
1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Or use EmailJS's SMTP service
5. Copy your **Service ID** (format: `service_xxxxx`)

### Step 4: Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use these variables in the template:
   - `{{to_email}}` - Owner's email
   - `{{from_name}}` - Customer's name
   - `{{from_phone}}` - Customer's phone
   - `{{from_email}}` - Customer's email
   - `{{inquiry_type}}` - Type: quote/demo/support
   - `{{product}}` - Product interested in
   - `{{message}}` - Customer's message

### Example Template HTML:
```
Subject: New Inquiry from {{from_name}}

---

Name: {{from_name}}
Phone: {{from_phone}}
Email: {{from_email}}
Inquiry Type: {{inquiry_type}}
Product: {{product}}

Message:
{{message}}
```

4. Copy the **Template ID** (format: `template_xxxxx`)

### Step 5: Update ContactPage.jsx
In `/src/pages/ContactPage.jsx`, replace:
- `YOUR_EMAILJS_PUBLIC_KEY` with your EmailJS Public Key
- `YOUR_SERVICE_ID` with your EmailJS Service ID  
- `YOUR_TEMPLATE_ID` with your EmailJS Template ID

Lines to update (around line 8 and 68-70):
```javascript
emailjs.init('YOUR_EMAILJS_PUBLIC_KEY'); // Line 8

await emailjs.send(
  'YOUR_SERVICE_ID',      // Line 69
  'YOUR_TEMPLATE_ID',     // Line 70
  templateParams
);
```

### Step 6: Install Dependency
Run in terminal:
```bash
npm install
```

## How It Works

1. **Customer fills form** → Name, Phone, Email, Product, Message
2. **Customer clicks "Send Enquiry"** → Form validates
3. **Data sent to EmailJS** → Processed via EmailJS servers
4. **Email sent to owner** (srivaaniagro@gmail.com)
5. **Success message shown** → "Enquiry Received!"

## Form Data Sent
- Customer's name
- Phone number
- Email address
- Inquiry type (Quote/Demo/Support)
- Product of interest
- Full message/requirement

## Testing

1. Run `npm start`
2. Go to Contact Us page
3. Fill the form with test data
4. Click "Send Enquiry"
5. Check the owner's email inbox (may take 10-30 seconds)

## Troubleshooting

**Email not sending:**
- Check Public Key, Service ID, Template ID are correct
- Verify EmailJS account is active
- Check spam folder in email
- Ensure customer's email validation is correct

**Form shows error:**
- Check browser console for error message
- Verify EmailJS credentials in code
- Try submitting again

## Free Plan Limits
- EmailJS free plan: 200 emails/month
- Upgrade if you need more

## Support
EmailJS Help: https://www.emailjs.com/docs/
Contact owner to verify setup is working
