# Portfolio Website - Amit Prasad

Welcome to my personal portfolio website! This project showcases my skills, projects, and experiences in web development and other technical domains.

## 🔗 Live Demo

[Portfolio Website](https://portfolio-amitprasads-projects.vercel.app/)

## 🚀 Features

- Clean and modern UI/UX design
- Interactive project showcase with descriptions
- Responsive design for seamless browsing on all devices
- Dynamic contact form with email functionality
- Optimized for performance and SEO

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript (React.js)
- **Deployment:** Vercel

## 📂 Project Structure

## ⚙️ Installation

1. Clone the repository:
2. Navigate to the project folder:
3. Install dependencies:
4. Start the development server:



## 🚢 Deployment

To deploy the website on **Vercel**:

1. Create a Vercel account.
2. Import the GitHub repository into Vercel.
3. Set environment variables (if required).
4. Deploy the project with a single click.

## 📝 Contact

For any queries or collaboration, feel free to reach out:

- **Email:** [amitprasad212003@gmail.com](mailto\:amitprasad212003@gmail.com)
- **LinkedIn:** [Amit Prasad](https://www.linkedin.com/in/amitprasad212003)

---

💻 **Developed by Amit Prasad**





# EmailJS Guide

## Introduction to EmailJS
[EmailJS](https://www.emailjs.com/) is a powerful service that allows you to send emails directly from your client-side applications without the need for a server. It uses third-party email services like Gmail, Outlook, etc., making email integration simple and effective.

### Key Features of EmailJS
- No server-side code required.
- Supports multiple email providers.
- Secure and fast email delivery.
- Easy to integrate with JavaScript frameworks (e.g., React, Angular, etc.).
- Offers customizable templates for dynamic content.

---

## How Does EmailJS Work?
EmailJS leverages your email service provider to send emails directly from the client-side. Here's the basic workflow:

1. **Create an EmailJS Account:** Sign up at [emailjs.com](https://www.emailjs.com/).
2. **Connect an Email Service:** Link your Gmail, Outlook, or other email services.
3. **Create an Email Template:** Define the email format, including placeholders for dynamic content.
4. **Install the EmailJS Library:** Add EmailJS to your project.
5. **Send Emails Using Code:** Use the provided API key and EmailJS methods to send emails directly from your frontend.

---

## Step-by-Step Integration

### Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/).
2. Click **Sign Up** and create an account.
3. Once logged in, click on **Email Services** and connect your preferred email provider.

---

### Step 2: Create an Email Template
1. In the EmailJS dashboard, go to **Email Templates**.
2. Click **New Template** and design your email structure.
3. Use dynamic placeholders like:
   ```html
   Hello {{name}},
   Thank you for contacting us. We'll get back to you soon.
   ```

---

### Step 3: Install EmailJS in Your Project
Install EmailJS via npm:
```bash
npm install emailjs-com
```
Or via CDN in HTML:
```html
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2.6.4/dist/email.min.js"></script>
```

---

### Step 4: Add EmailJS Configuration to Your Code
Add this import statement at the top of your JavaScript file:
```javascript
import emailjs from 'emailjs-com';
```

---

### Step 5: Sending Emails with Code
Here's a sample JavaScript code snippet to send an email:

```javascript
import emailjs from 'emailjs-com';

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Email successfully sent!', result.text);
      }, (error) => {
          console.error('Error sending email:', error.text);
      });
};
```

**HTML Form Example:**
```html
<form id="contact-form" onSubmit="sendEmail">
    <input type="text" name="name" placeholder="Your Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
    <textarea name="message" placeholder="Your Message"></textarea>
    <button type="submit">Send Email</button>
</form>
```

---

### Step 6: Add Configuration Details
Replace these placeholders in your code:
- `YOUR_SERVICE_ID` → Found in your EmailJS dashboard under **Email Services**.
- `YOUR_TEMPLATE_ID` → Found in the **Email Templates** section.
- `YOUR_USER_ID` → Found in the **Integration** section.

---

### Step 7: Deploy and Test
- Run your application.
- Fill out the form and click **Send Email**.
- Check your linked email inbox for the test email.

---

## Common Issues and Solutions
1. **Incorrect Service ID/Template ID:** Double-check the provided IDs from the EmailJS dashboard.
2. **Email Not Sending:** Ensure your email provider's security settings allow third-party integrations.
3. **Form Field Names:** Ensure your input `name` attributes match the template variables in EmailJS.

---

## Conclusion
EmailJS is a user-friendly solution for integrating email functionality directly into client-side applications. Its simplicity makes it ideal for contact forms, feedback systems, and automated notifications without server-side complexity.

