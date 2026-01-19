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
- **Hosting**: 
- **Container**: Docker + Nginx for static file serving
- **Deployment**: Automated
- **No build process**: Edit files directly

## File Structure

```
bibeebiz-website/
├── index.html              # Homepage
├── about.html              # About page
├── services.html           # Services page
├── portfolio.html          # Portfolio page
├── contact.html            # Contact page
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles + Tailwind
│   ├── js/
│   │   └── script.js       # JavaScript functionality
│   └── images/             # Logo, photos, screenshots (to be added)
├── Dockerfile              # Container configuration
├── .dockerignore           # Docker build exclusions
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

### Alternative Deployment Options
Upload all files to any static hosting service:
- Netlify (drag & drop)
- Vercel (similar to Netlify)
- GitHub Pages (free for public repos)
- AWS S3 + CloudFront
- Traditional web hosting

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

### Deployment Files
The following files are for container deployment and should be committed to version control:
- `Dockerfile` - Container build instructions
- `.dockerignore` - Files excluded from Docker build

### Making Updates
1. Edit HTML/CSS/JS files directly
2. Test locally by opening files in browser
3. Commit changes: `git add . && git commit -m "Update content"`
4. Deploy to your hosting platform

## License

© 2024 Bibeebiz. All rights reserved.
