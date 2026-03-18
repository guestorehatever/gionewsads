# Trusted Advertiser Website - Static HTML

This is the complete static HTML build of your Trusted Advertiser website.

## Files Included

- `index.html` - Main HTML file (includes all CSS and JavaScript bundled)
- `assets/` - CSS and JavaScript asset files
- `__manus__/` - Analytics scripts

## How to Use

### Local Testing
Simply open `index.html` directly in your web browser to view the website.

### Deploy to Web Host
Upload all files to your web server maintaining the same directory structure:
- Upload `index.html` to the root
- Upload the `assets/` folder
- Upload the `__manus__/` folder

### Add to GitHub
Commit all files to your repository:
```bash
git add .
git commit -m "Add Trusted Advertiser website"
git push
```

## Features

- **Prestige Design**: Cream background with deep teal and gold accents
- **Responsive Layout**: Optimized for mobile, tablet, and desktop
- **Embedded Google Form**: Integrated for inquiries and reports
- **Certificate-Style Layout**: Decorative borders and ornamental elements
- **Premium Typography**: Playfair Display serif font for headings
- **Smooth Animations**: Transitions and entrance effects throughout

## Customization

To make changes to the website:

1. Edit the source React files in the project
2. Run `pnpm build` to regenerate these HTML files
3. The new files will be ready to deploy

## Browser Support

Works on all modern browsers:
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Important Notes

- All CSS and JavaScript are bundled into the HTML file for easy deployment
- The embedded Google Form requires internet connectivity to function
- Images are loaded from CDN (cloudfront.net)
- No server-side processing required - this is a static website

## File Structure

```
trusted-advertiser-html/
├── index.html              (Main page)
├── assets/
│   ├── index-BlvxWlSt.css (Compiled styles)
│   └── index-DeCDPB2k.js   (Compiled JavaScript)
├── __manus__/
│   └── debug-collector.js  (Analytics)
└── README.md              (This file)
```

## Support

For updates or modifications, edit the source React project and rebuild using `pnpm build`.
