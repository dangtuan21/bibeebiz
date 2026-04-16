# Bibeebiz - IT Technology & Software Website

A static website for Bibeebiz, showcasing IT technology and software services.

> **📱 Status:** Production Ready

## Overview

This is a pure HTML/CSS/JavaScript static website built for Bibeebiz, a company specializing in IT technology and software solutions. The website is fully responsive and includes:

- Homepage with hero section and service overview
- About page with company mission and team
- Services page with detailed offerings
- Portfolio page showcasing past projects
- Contact page with form and company information

## Technical Stack

- **Frontend**: HTML5, CSS3 (Tailwind CSS via CDN), Vanilla JavaScript
- **Hosting**: AWS Lightsail (`44.222.80.227`)
- **Web Server**: Nginx serving static files from `/var/www/html`
- **Deployment**: Git-based via `deploy.sh`
- **No build process**: Edit files directly

## File Structure

```
bibeebiz-website/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── privacy-policy.html     # Privacy policy
├── account-request.html    # Account request form
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles + Tailwind
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Logo, photos, screenshots
├── deploy.sh               # Deploy script (GitHub → Lightsail)
└── README.md               # This file
```

## Features

- Responsive design (mobile-first)
- Mobile navigation menu
- Contact form with validation
- Smooth scrolling
- Newsletter signup
- Professional styling with Tailwind CSS

## Customization

1. **Company Information**: Update contact details, team info, and company description in the HTML files
2. **Styling**: Modify `assets/css/styles.css` for custom colors and styles
3. **Content**: Replace placeholder content with real company information
4. **Images**: Add company logo and project screenshots to `assets/images/`

## Deployment

### Production (AWS Lightsail)

- **Instance**: `44.222.80.227`
- **SSH key**: `~/.ssh/bibeebiz-key.pem` (Lightsail default key pair)
- **Repo on server**: `/home/ubuntu/bibeebiz`
- **Web root**: `/var/www/html` (served by Nginx)

To deploy:

```bash
bash deploy.sh
```

This will:
1. Push local commits to GitHub
2. SSH to the server and `git pull`
3. Rsync files to `/var/www/html`

## Contact Form

The contact form currently shows an alert on submission. For production use, integrate with:
- Netlify Forms (if hosting on Netlify)
- Formspree
- EmailJS
- Custom backend API

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Development

### Local Development
Open any HTML file directly in a browser to view the website. No development server required.

### Making Updates
1. Edit HTML/CSS/JS files directly
2. Test locally by opening files in browser
3. Commit: `git add . && git commit -m "your message"`
4. Deploy: `bash deploy.sh`

## License

© 2024 Bibeebiz. All rights reserved.
