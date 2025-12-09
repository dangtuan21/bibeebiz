# Bibeebiz - IT Technology & Software Website

A static website for Bibeebiz, showcasing IT technology and software services.

## Overview

This is a pure HTML/CSS/JavaScript static website built for Bibeebiz, a company specializing in IT technology and software solutions. The website is fully responsive and includes:

- Homepage with hero section and service overview
- About page with company mission and team
- Services page with detailed offerings
- Portfolio page showcasing past projects
- Contact page with form and company information

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Tailwind CSS via CDN for styling
- **JavaScript**: Vanilla JS for interactive features
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

Upload all files to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
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

Open any HTML file directly in a browser to view the website. No development server required.

## License

© 2024 Bibeebiz. All rights reserved.
