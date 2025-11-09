# Black Belt Brews - Vanilla HTML/CSS/JavaScript Version

This is the converted version of the Black Belt Brews React website, now using vanilla HTML, CSS, and JavaScript with no frameworks or build tools required.

## Features

- **Pure HTML/CSS/JavaScript** - No React, no build process
- **Custom CSS** - All Tailwind utility classes replaced with regular CSS
- **Hash-based Routing** - Client-side routing using URL hash
- **Responsive Design** - Mobile-first responsive layout
- **All Pages Implemented**:
  - Home page with hero, featured products, and newsletter
  - Shop page with filtering, sorting, and search
  - Merch page with product categories
  - Product detail pages with image gallery, options, and quantity selector
  - About page
  - Contact page with form
  - Subscriptions page
  - Cart page
  - 404 page

## How to Run

1. Simply open `index.html` in a web browser, or
2. Serve the `dist` folder with any static file server:

```bash
# Using Python
python3 -m http.server 8080

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8080
```

3. Navigate to `http://localhost:8080` in your browser

## File Structure

```
dist/
├── index.html      # Main HTML file with header, footer, and app container
├── styles.css      # All CSS styles (replaces Tailwind classes)
├── products.js     # Product data
└── app.js          # Router and all page rendering logic
```

## Notes

- Uses Bebas Neue and DM Sans fonts from Google Fonts
- Uses Remix Icon for icons
- Uses Picsum for placeholder product images
- Hash-based routing (e.g., `#/shop`, `#/product/rock-creek`)
- All interactive features work (filtering, sorting, search, forms, accordions, etc.)

## Browser Compatibility

Works in all modern browsers that support ES6+ JavaScript.
