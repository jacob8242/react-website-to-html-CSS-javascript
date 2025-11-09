# Black Belt Brews - Vanilla HTML/CSS/JavaScript Version

This is the converted version of the Black Belt Brews React website, now using vanilla HTML, CSS, and JavaScript with no frameworks or build tools required.

## 🚀 Quick Start

1. **Extract the zip file** to any folder on your computer
2. **Open `index.html`** in any web browser (Chrome, Firefox, Safari, Edge)
3. That's it! The website will work immediately - no installation, no build process needed.

For better performance, you can also run a local web server:

```bash
# Using Python (if installed)
python3 -m http.server 8080

# Using Node.js (if installed)
npx http-server

# Using PHP (if installed)
php -S localhost:8080
```

Then navigate to `http://localhost:8080` in your browser.

## 📁 What's Included - All 5 Files You Need

This is a **Single Page Application (SPA)** - all pages are in one HTML file, and JavaScript changes the content when you navigate:

```
dist/
├── index.html      # Main HTML file with header, footer, and content container
├── app.js          # Router + ALL 9 pages (Home, Shop, Merch, Product Detail, 
│                   # About, Contact, Subscriptions, Cart, 404)
├── styles.css      # All CSS styles for ALL pages (replaces Tailwind classes)
├── products.js     # Product data for all 44 products
└── README.md       # This file - usage instructions
```

## ✅ All Pages Included (9 Total)

Even though there's only ONE `index.html` file, the website contains **all 9 pages**:

1. **Home** (`#/` or just opening index.html) - Hero section, featured products, newsletter
2. **Shop** (`#/shop`) - Coffee & tea products with filtering, sorting, and search
3. **Merch** (`#/merch`) - Merchandise products with category filters
4. **Product Detail** (`#/product/[id]`) - Individual product pages with galleries and options
5. **Our Story** (`#/about`) - About page with company story and mission
6. **Connect** (`#/contact`) - Contact page with form and contact information
7. **Subscriptions** (`#/subscriptions`) - Coffee subscription plans
8. **Cart** (`#/cart`) - Shopping cart page
9. **404** (any invalid URL) - Not found page

## 🎯 How It Works

This is a modern **Single Page Application (SPA)** using hash-based routing:

- When you click "Shop" in the navigation, the URL changes to `#/shop`
- JavaScript detects this change and displays the Shop page content
- No page refresh needed - everything is instant and smooth
- All pages are rendered by JavaScript in the `app.js` file

**This is the same approach used by Gmail, Google Maps, and many modern web apps!**

## 🎨 Features

- **Pure HTML/CSS/JavaScript** - No React, Vue, or frameworks
- **Zero Build Process** - No compilation, no webpack, just open and use
- **Custom CSS** - All Tailwind utility classes replaced with regular CSS (1,593 lines)
- **Hash-based Routing** - Client-side routing using URL hash (#/page)
- **Responsive Design** - Mobile-first layout that works on all devices
- **Interactive Features**:
  - Product filtering by category (Coffee, Tea, K-Cups, Merch)
  - Product sorting (Popularity, Price, Name)
  - Real-time search
  - Newsletter subscription form
  - Contact form with validation
  - Image galleries with thumbnails
  - Product options (size, color, grind type, etc.)
  - Quantity selector
  - Star ratings
  - Accordion components

## 🎨 Fonts & Icons

- **Fonts**: Bebas Neue and DM Sans loaded from Google Fonts (with system font fallbacks)
- **Icons**: Remix Icon loaded from CDN
- **Images**: Placeholder images from Picsum (you can replace with your own)

## 🌐 Browser Compatibility

Works in all modern browsers that support ES6+ JavaScript:
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 Navigation

All navigation links are in the header:
- **Home** - Main landing page
- **Shop** - Browse coffee and tea products
- **Merch** - Browse merchandise
- **Subscriptions** - View subscription plans
- **Our Story** - Learn about the company
- **Connect** - Contact form and information

You can also navigate directly by typing in the browser:
- `file:///path/to/index.html#/shop` - Goes to Shop page
- `file:///path/to/index.html#/about` - Goes to About page
- etc.

## 🔧 Customization

To customize the website:

1. **Change text/content**: Edit the render functions in `app.js`
2. **Change styles**: Edit `styles.css`
3. **Change products**: Edit `products.js`
4. **Change header/footer**: Edit `index.html`

## ❓ Common Questions

**Q: Where are all the page files?**
A: This is a Single Page Application (SPA). All pages are rendered by JavaScript in `app.js`. When you click navigation links, JavaScript changes the content without loading new HTML files.

**Q: Do I need to install anything?**
A: No! Just open `index.html` in a web browser. No Node.js, no npm, no installation required.

**Q: Can I deploy this to a web host?**
A: Yes! Just upload all 5 files to any web host (GitHub Pages, Netlify, Vercel, traditional hosting, etc.). No server-side code needed.

**Q: Why is there only one HTML file?**
A: Modern web apps use this approach for speed and smooth navigation. All content is loaded once, then JavaScript shows/hides different sections as you navigate.

## 📊 Technical Details

- **Total Size**: ~97KB (much smaller than React bundle)
- **Load Time**: < 1 second (no build, no bundles)
- **Dependencies**: Zero (no node_modules folder needed)
- **Lines of Code**: ~2,551 lines total
  - HTML: 103 lines
  - CSS: 1,593 lines
  - JavaScript: 855 lines (app.js + products.js)

## 🎉 That's It!

You now have a fully functional e-commerce website with:
- ✅ All 9 pages working
- ✅ Product filtering and search
- ✅ Responsive design
- ✅ Interactive features
- ✅ No dependencies
- ✅ No build process

Just open `index.html` and start exploring!
