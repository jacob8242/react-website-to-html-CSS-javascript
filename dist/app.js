// Router and App Logic
class Router {
    constructor() {
        this.routes = {};
        this.currentRoute = '';
        
        window.addEventListener('hashchange', () => this.handleRoute());
        window.addEventListener('load', () => this.handleRoute());
    }

    register(path, handler) {
        this.routes[path] = handler;
    }

    handleRoute() {
        const hash = window.location.hash.slice(1) || '/';
        const [path, ...paramParts] = hash.split('/');
        const cleanPath = '/' + (path || '');
        
        this.currentRoute = hash;
        
        // Check for product detail route
        if (hash.startsWith('/product/')) {
            const productId = hash.split('/product/')[1];
            if (this.routes['/product/:id']) {
                this.routes['/product/:id'](productId);
                return;
            }
        }
        
        // Check for exact match
        if (this.routes[hash]) {
            this.routes[hash]();
        } else if (this.routes[cleanPath]) {
            this.routes[cleanPath]();
        } else if (this.routes['*']) {
            this.routes['*']();
        }
    }

    navigate(path) {
        window.location.hash = path;
    }
}

const router = new Router();
const app = document.getElementById('app');

// Utility Functions
function createStarRating(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        const filled = i < Math.round(rating);
        stars.push(`
            <svg class="star ${filled ? 'star-filled' : 'star-empty'}" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
        `);
    }
    return `<div class="star-rating">${stars.join('')}</div>`;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="#/product/${product.id}" class="product-image-container">
                <img src="${product.productImage}" alt="${product.name}" class="product-image">
            </a>
            <div class="product-info">
                ${createStarRating(product.rating)}
                <h3 class="product-name">
                    <a href="#/product/${product.id}">${product.name}</a>
                </h3>
                <p class="product-subtitle">${product.subtitle}</p>
                <p class="product-price">${product.price}</p>
                <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">ADD TO CART</button>
            </div>
        </div>
    `;
}

function addToCart(productId) {
    console.log('Added to cart:', productId);
    // In a real app, this would add to cart state
}

// Home Page
function renderHomePage() {
    const featuredProducts = products.slice(0, 4);
    const brandFeatures = [
        { icon: 'ri-fire-fill', text: '100% Roasted Coffee' },
        { icon: 'ri-earth-fill', text: 'Sustainably Sourced' },
        { icon: 'ri-medal-fill', text: 'Dedicated to Quality' },
        { icon: 'ri-award-fill', text: 'Certified Quality' },
        { icon: 'ri-leaf-fill', text: 'Organic Coffee' },
        { icon: 'ri-archive-fill', text: 'Subscribe & Save' },
    ];

    app.innerHTML = `
        <!-- Hero Section -->
        <section class="hero-section" style="background-image: url('https://picsum.photos/seed/hero-banner/1600/900')">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <div>
                    <h1 class="hero-title">Kickstart Your Day</h1>
                    <h3 class="hero-subtitle">
                        With 100% organic roasted coffee, derived from safe plant-based sources.
                    </h3>
                    <a href="#/shop" class="hero-button">Shop Now</a>
                </div>
            </div>
        </section>

        <!-- Featured Items Section -->
        <section class="section section-white">
            <div class="container">
                <h2 class="section-title">Featured Items</h2>
                <div class="product-grid">
                    ${featuredProducts.map(product => createProductCard(product)).join('')}
                </div>
            </div>
        </section>

        <!-- Brand Values Section -->
        <section class="section section-gray">
            <div class="container text-center">
                <h2 class="font-bebas" style="font-size: 2.5rem; color: #1f2937; letter-spacing: 0.05em;">Crafted with Dedication.</h2>
                <h2 class="font-bebas" style="font-size: 2.5rem; color: #1f2937; letter-spacing: 0.05em;">Brewed with Purpose.</h2>
                <div class="brand-features">
                    ${brandFeatures.map(feature => `
                        <div class="brand-feature">
                            <i class="${feature.icon} brand-icon"></i>
                            <span class="brand-text">${feature.text}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Newsletter Section -->
        <section class="section section-white">
            <div class="container">
                <div class="newsletter-container">
                    <h2 class="newsletter-title">Your Journey Starts Here</h2>
                    <p class="newsletter-description">
                        Stay in the loop with our latest updates, exclusive content, and special offers. Join our community and never miss a thing.
                    </p>
                    <div id="newsletter-form-container">
                        <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                required
                                class="newsletter-input"
                                id="newsletter-email"
                            />
                            <button type="submit" class="newsletter-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const container = document.getElementById('newsletter-form-container');
    container.innerHTML = '<p class="newsletter-success">Thank you for subscribing!</p>';
    setTimeout(() => {
        container.innerHTML = `
            <form class="newsletter-form" onsubmit="handleNewsletterSubmit(event)">
                <input type="email" placeholder="Enter your email address" required class="newsletter-input" id="newsletter-email" />
                <button type="submit" class="newsletter-button">Subscribe</button>
            </form>
        `;
    }, 3000);
}

// Shop Page
function renderShopPage() {
    const shopProducts = products.filter(p => p.category === 'coffee' || p.category === 'k-cups' || p.category === 'tea');
    
    app.innerHTML = `
        <div class="container" style="padding: 2rem 1rem;">
            <div class="shop-banner" style="background-image: url('https://picsum.photos/seed/shop-banner/1200/400')">
                <div class="shop-banner-content">
                    <h1 class="shop-banner-title">Subscribe & Save</h1>
                    <h3 class="shop-banner-subtitle">Up to 20% off coffee bags & K-Cups</h3>
                    <a href="#/subscriptions" class="shop-banner-button">Subscribe Now</a>
                </div>
            </div>

            <h2 class="page-title">Shop Coffee & Tea</h2>

            <div class="shop-controls">
                <div class="control-group">
                    <label for="sort-select" class="control-label">Sort By:</label>
                    <select id="sort-select" class="control-select" onchange="updateShopProducts()">
                        <option value="availability">Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div class="control-group">
                    <label for="search-input" class="control-label">Search:</label>
                    <input
                        id="search-input"
                        type="text"
                        placeholder="Search products..."
                        class="control-input"
                        oninput="updateShopProducts()"
                    />
                </div>
            </div>

            <div class="filter-container">
                <span class="filter-label">Filter By:</span>
                <button class="filter-button filter-button-active" data-category="all" onclick="filterShopProducts('all')">All</button>
                <button class="filter-button filter-button-inactive" data-category="coffee" onclick="filterShopProducts('coffee')">Coffee</button>
                <button class="filter-button filter-button-inactive" data-category="k-cups" onclick="filterShopProducts('k-cups')">K-Cups</button>
                <button class="filter-button filter-button-inactive" data-category="tea" onclick="filterShopProducts('tea')">Tea</button>
            </div>

            <p class="product-count" id="product-count">Showing ${shopProducts.length} products</p>

            <div class="product-grid-3" id="shop-products">
                ${shopProducts.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
}

let currentShopCategory = 'all';

function filterShopProducts(category) {
    currentShopCategory = category;
    
    // Update button states
    document.querySelectorAll('.filter-button').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.remove('filter-button-inactive');
            btn.classList.add('filter-button-active');
        } else {
            btn.classList.remove('filter-button-active');
            btn.classList.add('filter-button-inactive');
        }
    });
    
    updateShopProducts();
}

function updateShopProducts() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const sortOrder = document.getElementById('sort-select').value;
    const shopProducts = products.filter(p => p.category === 'coffee' || p.category === 'k-cups' || p.category === 'tea');
    
    let filtered = shopProducts.filter(product => {
        const matchesCategory = currentShopCategory === 'all' || product.category === currentShopCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.subtitle.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    switch (sortOrder) {
        case 'price-low':
            filtered.sort((a, b) => a.priceValue - b.priceValue);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.priceValue - a.priceValue);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'availability':
        default:
            filtered.sort((a,b) => b.rating - a.rating);
            break;
    }

    document.getElementById('product-count').textContent = `Showing ${filtered.length} products`;
    
    if (filtered.length > 0) {
        document.getElementById('shop-products').innerHTML = filtered.map(product => createProductCard(product)).join('');
    } else {
        document.getElementById('shop-products').innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1;">
                <h3 class="no-products-title">No products found</h3>
                <p class="no-products-text">Try adjusting your search or filter criteria.</p>
            </div>
        `;
    }
}

// Merch Page  
function renderMerchPage() {
    const merchProducts = products.filter(p => p.category === 'merch');
    const merchTypes = [...new Set(merchProducts.map(p => p.type))];
    const categories = [
        { id: 'all', name: 'All' },
        ...merchTypes.map(type => ({ id: type, name: type.charAt(0).toUpperCase() + type.slice(1) }))
    ];
    
    app.innerHTML = `
        <div class="container" style="padding: 2rem 1rem;">
            <div class="shop-banner" style="background-image: url('https://picsum.photos/seed/merch-banner/1200/400')">
                <div class="shop-banner-content">
                    <h1 class="shop-banner-title">Official Gear</h1>
                    <h3 class="shop-banner-subtitle">Wear the Vibe, Live the Brew</h3>
                </div>
            </div>

            <h2 class="page-title">Shop Merch</h2>

            <div class="shop-controls">
                <div class="control-group">
                    <label for="merch-sort-select" class="control-label">Sort By:</label>
                    <select id="merch-sort-select" class="control-select" onchange="updateMerchProducts()">
                        <option value="availability">Popularity</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="name">Name</option>
                    </select>
                </div>
                <div class="control-group">
                    <label for="merch-search-input" class="control-label">Search:</label>
                    <input
                        id="merch-search-input"
                        type="text"
                        placeholder="Search merch..."
                        class="control-input"
                        oninput="updateMerchProducts()"
                    />
                </div>
            </div>

            <div class="filter-container">
                <span class="filter-label">Filter By:</span>
                ${categories.map(cat => `
                    <button class="filter-button ${cat.id === 'all' ? 'filter-button-active' : 'filter-button-inactive'}" 
                            data-category="${cat.id}" 
                            onclick="filterMerchProducts('${cat.id}')">
                        ${cat.name}
                    </button>
                `).join('')}
            </div>

            <p class="product-count" id="merch-product-count">Showing ${merchProducts.length} products</p>

            <div class="product-grid-3" id="merch-products">
                ${merchProducts.map(product => createProductCard(product)).join('')}
            </div>
        </div>
    `;
}

let currentMerchCategory = 'all';

function filterMerchProducts(category) {
    currentMerchCategory = category;
    
    document.querySelectorAll('.filter-button').forEach(btn => {
        if (btn.dataset.category === category) {
            btn.classList.remove('filter-button-inactive');
            btn.classList.add('filter-button-active');
        } else {
            btn.classList.remove('filter-button-active');
            btn.classList.add('filter-button-inactive');
        }
    });
    
    updateMerchProducts();
}

function updateMerchProducts() {
    const searchTerm = document.getElementById('merch-search-input').value.toLowerCase();
    const sortOrder = document.getElementById('merch-sort-select').value;
    const merchProducts = products.filter(p => p.category === 'merch');
    
    let filtered = merchProducts.filter(product => {
        const matchesCategory = currentMerchCategory === 'all' || product.type === currentMerchCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
                            product.subtitle.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    switch (sortOrder) {
        case 'price-low':
            filtered.sort((a, b) => a.priceValue - b.priceValue);
            break;
        case 'price-high':
            filtered.sort((a, b) => b.priceValue - a.priceValue);
            break;
        case 'name':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'availability':
        default:
            filtered.sort((a,b) => b.rating - a.rating);
            break;
    }

    document.getElementById('merch-product-count').textContent = `Showing ${filtered.length} products`;
    
    if (filtered.length > 0) {
        document.getElementById('merch-products').innerHTML = filtered.map(product => createProductCard(product)).join('');
    } else {
        document.getElementById('merch-products').innerHTML = `
            <div class="no-products" style="grid-column: 1 / -1;">
                <h3 class="no-products-title">No products found</h3>
                <p class="no-products-text">Try adjusting your search or filter criteria.</p>
            </div>
        `;
    }
}

// Product Detail Page
function renderProductDetailPage(productId) {
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        app.innerHTML = `
            <div class="container" style="padding: 4rem 1rem; text-align: center;">
                <h1 class="font-bebas" style="font-size: 3rem; color: #1f2937;">Product Not Found</h1>
                <p style="color: #6b7280; margin-top: 1rem;">We couldn't find the product you're looking for.</p>
                <a href="#/" class="add-to-cart-large" style="max-width: 200px; margin: 2rem auto; display: block;">Back to Shop</a>
            </div>
        `;
        return;
    }
    
    const thumbnails = [product.productImage, product.thumbnail1, product.thumbnail2].filter(Boolean);
    
    app.innerHTML = `
        <div class="product-detail-container container">
            <div class="product-detail-grid">
                <!-- Image Section -->
                <div class="product-gallery">
                    <div class="product-main-image-container">
                        <img id="main-product-image" src="${product.productImage}" alt="${product.name}" class="product-main-image">
                    </div>
                    ${thumbnails.length > 1 ? `
                        <div class="product-thumbnails">
                            ${thumbnails.map((thumb, index) => `
                                <div class="thumbnail ${index === 0 ? 'thumbnail-active' : ''}" onclick="changeProductImage('${thumb}', event)">
                                    <img src="${thumb}" alt="${product.name} thumbnail ${index + 1}" class="thumbnail-image">
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                    <p class="product-detail-description" style="margin-top: 2rem;">${product.description}</p>
                </div>

                <!-- Details Section -->
                <div class="product-detail-info">
                    <nav style="font-size: 0.875rem; color: #6b7280;">
                        <a href="#/" style="color: inherit; text-decoration: none;">Home</a> / <span style="text-transform: capitalize;">${product.category}</span>
                    </nav>
                    <h1 class="product-detail-name">${product.name}</h1>
                    <p class="product-detail-subtitle">${product.subtitle}</p>
                    <div class="review-section">
                        ${createStarRating(product.rating)}
                        <span class="review-count">${product.reviewCount}</span>
                    </div>
                    <p class="product-detail-price">${product.price}</p>
                    
                    <div class="product-notes">
                        ${product.notes.map(note => `
                            <span class="product-note">${note}</span>
                        `).join('')}
                    </div>

                    ${product.options.length > 0 ? `
                        <div class="product-options">
                            ${product.options.map((option, optIndex) => `
                                <div class="option-group">
                                    <label class="option-label">${option.label}</label>
                                    <div class="option-buttons">
                                        ${option.values.map((value, valIndex) => `
                                            <button 
                                                class="option-button ${valIndex === 0 ? 'option-button-active' : ''}" 
                                                onclick="selectOption(this, '${option.label}')"
                                            >
                                                ${value}
                                            </button>
                                        `).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}

                    <div class="quantity-selector">
                        <label class="quantity-label">Quantity</label>
                        <div class="quantity-controls">
                            <button class="quantity-button" onclick="changeQuantity(-1)">-</button>
                            <span class="quantity-display" id="quantity-display">1</span>
                            <button class="quantity-button" onclick="changeQuantity(1)">+</button>
                        </div>
                    </div>

                    <button class="add-to-cart-large" onclick="handleProductAddToCart()">ADD TO CART</button>

                    <!-- Product Info Accordion -->
                    <div style="margin-top: 2rem;">
                        <div class="accordion-item">
                            <button class="accordion-header" onclick="toggleAccordion(this)">
                                <span>Origin</span>
                                <i class="ri-arrow-down-s-line accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p class="accordion-text">${product.origin}</p>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <button class="accordion-header" onclick="toggleAccordion(this)">
                                <span>Type</span>
                                <i class="ri-arrow-down-s-line accordion-icon"></i>
                            </button>
                            <div class="accordion-content">
                                <p class="accordion-text">${product.type}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

let currentQuantity = 1;

function changeProductImage(imageSrc, event) {
    document.getElementById('main-product-image').src = imageSrc;
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.classList.remove('thumbnail-active');
    });
    event.currentTarget.classList.add('thumbnail-active');
}

function selectOption(button, optionLabel) {
    const siblings = button.parentElement.querySelectorAll('.option-button');
    siblings.forEach(btn => {
        btn.classList.remove('option-button-active');
    });
    button.classList.add('option-button-active');
}

function changeQuantity(delta) {
    currentQuantity = Math.max(1, currentQuantity + delta);
    document.getElementById('quantity-display').textContent = currentQuantity;
}

function handleProductAddToCart() {
    const button = document.querySelector('.add-to-cart-large');
    const originalText = button.textContent;
    button.textContent = 'Added!';
    setTimeout(() => {
        button.textContent = originalText;
    }, 2000);
}

function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.accordion-icon');
    
    if (content.classList.contains('accordion-content-open')) {
        content.classList.remove('accordion-content-open');
        icon.classList.remove('accordion-icon-open');
    } else {
        content.classList.add('accordion-content-open');
        icon.classList.add('accordion-icon-open');
    }
}

// About Page
function renderAboutPage() {
    app.innerHTML = `
        <div class="about-section container">
            <h1 class="page-title text-center">Our Story</h1>
            <div class="about-content">
                <p class="about-text">
                    Welcome to Black Belt Brews, where every cup is a testament to dedication, precision, and passion. 
                    Just like the journey to earning a black belt in martial arts, our approach to coffee is rooted in discipline, 
                    mastery, and an unwavering commitment to excellence.
                </p>
                <p class="about-text">
                    Founded by coffee enthusiasts who also happen to be martial arts practitioners, Black Belt Brews was born 
                    from a simple belief: the same focus and determination that drives a martial artist to perfection can be 
                    applied to the art of coffee roasting. We source only the finest beans from sustainable farms around the 
                    world, treating each batch with the respect it deserves.
                </p>
                
                <h2 class="font-bebas" style="font-size: 2rem; color: #1f2937; margin-top: 2rem; margin-bottom: 1rem;">About the Founder</h2>
                <div style="background-color: #f9fafb; padding: 2rem; border-radius: 0.5rem; margin-bottom: 2rem;">
                    <p class="about-text">
                        Black Belt Brews was founded by Marcus Chen, a third-degree black belt in Taekwondo and lifelong coffee enthusiast. 
                        Marcus's journey began in a small coffee shop near his dojo, where he discovered that the same principles that guided 
                        his martial arts training—patience, precision, and respect for the craft—could be applied to coffee roasting.
                    </p>
                    <p class="about-text">
                        After years of training under master roasters and traveling to coffee-growing regions across Central and South America, 
                        Africa, and Asia, Marcus combined his two passions to create Black Belt Brews. His philosophy is simple: just as every 
                        martial arts technique requires countless hours of practice and refinement, every coffee bean deserves the same level of 
                        attention and care to unlock its full potential.
                    </p>
                    <p class="about-text">
                        Today, Marcus leads a team of dedicated coffee professionals who share his vision of bringing mindful, high-quality 
                        coffee to people who appreciate the finer details in life. When he's not roasting coffee or perfecting new blends, 
                        you can find him at the dojo, teaching the next generation of martial artists that dedication and discipline apply to 
                        everything we do—including brewing the perfect cup of coffee.
                    </p>
                </div>
                
                <h2 class="font-bebas" style="font-size: 2rem; color: #1f2937; margin-top: 2rem; margin-bottom: 1rem;">Our Mission</h2>
                <p class="about-text">
                    Our mission is to provide coffee that not only energizes your body but also sharpens your mind and spirit. 
                    We believe that great coffee is more than just a beverage—it's a ritual, a moment of mindfulness in a busy day.
                </p>
                <h2 class="font-bebas" style="font-size: 2rem; color: #1f2937; margin-top: 2rem; margin-bottom: 1rem;">What Sets Us Apart</h2>
                <ul class="about-list">
                    <li><strong>Quality:</strong> We meticulously select and roast our beans to bring out their unique flavors.</li>
                    <li><strong>Sustainability:</strong> We partner with farms that prioritize environmental and social responsibility.</li>
                    <li><strong>Community:</strong> We're more than a coffee brand—we're a community of like-minded individuals who value discipline, focus, and growth.</li>
                </ul>
                <p class="about-text">
                    Whether you're gearing up for an intense training session, powering through a workday, or simply savoring a 
                    quiet moment, Black Belt Brews is here to fuel your journey. Join us, and experience coffee brewed with the 
                    heart of a warrior.
                </p>
            </div>
        </div>
    `;
}

// Contact Page
function renderContactPage() {
    app.innerHTML = `
        <div class="contact-section container">
            <h1 class="page-title text-center">Connect With Us</h1>
            <div class="contact-grid">
                <!-- Contact Info -->
                <div class="contact-info-section">
                    <h2>Get in Touch</h2>
                    <p>
                        We'd love to hear from you! Whether you have a question about our products, need support, 
                        or just want to share your Black Belt Brews experience, feel free to reach out.
                    </p>
                    <div class="contact-details">
                        <div class="contact-detail-item">
                            <i class="ri-map-pin-line contact-icon"></i>
                            <div class="contact-detail-content">
                                <h3>Address</h3>
                                <p>13791 Oneida Dr<br>Delray Beach, FL 33410</p>
                            </div>
                        </div>
                        <div class="contact-detail-item">
                            <i class="ri-mail-line contact-icon"></i>
                            <div class="contact-detail-content">
                                <h3>Email</h3>
                                <p><a href="mailto:blackbeltbrews12@gmail.com">blackbeltbrews12@gmail.com</a></p>
                            </div>
                        </div>
                        <div class="contact-detail-item">
                            <i class="ri-phone-line contact-icon"></i>
                            <div class="contact-detail-content">
                                <h3>Phone</h3>
                                <p><a href="tel:+15619452520">(561) 945-2520</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form" id="contact-form-container">
                    <h2>Send Us a Message</h2>
                    <form onsubmit="handleContactSubmit(event)">
                        <div class="form-group">
                            <label for="contact-name" class="form-label">Name</label>
                            <input type="text" id="contact-name" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-email" class="form-label">Email</label>
                            <input type="email" id="contact-email" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-subject" class="form-label">Subject</label>
                            <input type="text" id="contact-subject" class="form-input" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-message" class="form-label">Message</label>
                            <textarea id="contact-message" class="form-textarea" required></textarea>
                        </div>
                        <button type="submit" class="form-submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function handleContactSubmit(event) {
    event.preventDefault();
    const container = document.getElementById('contact-form-container');
    container.innerHTML = '<div class="form-success">Thank you for your message! We\'ll get back to you soon.</div>';
    setTimeout(() => {
        renderContactPage();
    }, 3000);
}

// Subscriptions Page
function renderSubscriptionsPage() {
    const plans = [
        {
            name: 'Starter',
            price: '$24.99',
            period: 'per month',
            features: [
                '1 bag of coffee per month',
                'Free shipping on all orders',
                'Access to exclusive blends',
                'Cancel anytime',
                '10% savings on one-time purchases'
            ]
        },
        {
            name: 'Enthusiast',
            price: '$44.99',
            period: 'per month',
            features: [
                '2 bags of coffee per month',
                'Free shipping on all orders',
                'Access to exclusive blends',
                'Early access to new products',
                'Cancel anytime',
                '15% savings on one-time purchases',
                'Monthly brewing tips'
            ],
            featured: true
        },
        {
            name: 'Connoisseur',
            price: '$79.99',
            period: 'per month',
            features: [
                '4 bags of coffee per month',
                'Free shipping on all orders',
                'Access to exclusive blends',
                'Early access to new products',
                'Priority customer support',
                'Cancel anytime',
                '20% savings on one-time purchases',
                'Monthly brewing tips',
                'Exclusive merch discounts'
            ]
        }
    ];

    app.innerHTML = `
        <div class="container" style="padding: 2rem 1rem;">
            <h1 class="page-title text-center">Coffee Subscriptions</h1>
            <p class="text-center" style="color: #6b7280; margin-bottom: 3rem; max-width: 48rem; margin-left: auto; margin-right: auto;">
                Never run out of your favorite coffee. Choose a subscription plan that fits your lifestyle and save on every order.
            </p>
            <div class="subscription-grid">
                ${plans.map(plan => `
                    <div class="subscription-card ${plan.featured ? 'subscription-card-featured' : ''}">
                        ${plan.featured ? '<div class="subscription-badge">Most Popular</div>' : ''}
                        <h3 class="subscription-title">${plan.name}</h3>
                        <p class="subscription-price">${plan.price}</p>
                        <p class="subscription-period">${plan.period}</p>
                        <ul class="subscription-features">
                            ${plan.features.map(feature => `
                                <li class="subscription-feature">
                                    <i class="ri-check-line subscription-feature-icon"></i>
                                    <span>${feature}</span>
                                </li>
                            `).join('')}
                        </ul>
                        <a href="#/shop" class="subscription-button">Choose Plan</a>
                    </div>
                `).join('')}
            </div>
            
            <!-- How It Works Section -->
            <div style="margin-top: 4rem; background-color: #f9fafb; padding: 3rem 2rem; border-radius: 1rem;">
                <h2 class="font-bebas text-center" style="font-size: 3rem; color: #1f2937; margin-bottom: 2rem;">How It Works</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; max-width: 64rem; margin: 0 auto;">
                    <div style="text-align: center;">
                        <div style="background-color: #1f2937; color: white; width: 4rem; height: 4rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-family: 'Bebas Neue', sans-serif; font-size: 2rem;">1</div>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Choose Your Plan</h3>
                        <p style="color: #6b7280;">Select the subscription that fits your coffee needs and lifestyle.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background-color: #1f2937; color: white; width: 4rem; height: 4rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-family: 'Bebas Neue', sans-serif; font-size: 2rem;">2</div>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Customize Your Delivery</h3>
                        <p style="color: #6b7280;">Pick your favorite blends and set your delivery frequency.</p>
                    </div>
                    <div style="text-align: center;">
                        <div style="background-color: #1f2937; color: white; width: 4rem; height: 4rem; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-family: 'Bebas Neue', sans-serif; font-size: 2rem;">3</div>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Enjoy Fresh Coffee</h3>
                        <p style="color: #6b7280;">Receive freshly roasted coffee at your doorstep every month.</p>
                    </div>
                </div>
            </div>
            
            <!-- Subscription Perks Section -->
            <div style="margin-top: 4rem;">
                <h2 class="font-bebas text-center" style="font-size: 3rem; color: #1f2937; margin-bottom: 2rem;">Subscription Perks</h2>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 64rem; margin: 0 auto;">
                    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <i class="ri-truck-line" style="font-size: 2.5rem; color: #1f2937; margin-bottom: 1rem;"></i>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Free Shipping</h3>
                        <p style="color: #6b7280;">Enjoy free shipping on all subscription orders, no minimum required.</p>
                    </div>
                    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <i class="ri-discount-percent-line" style="font-size: 2.5rem; color: #1f2937; margin-bottom: 1rem;"></i>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Exclusive Savings</h3>
                        <p style="color: #6b7280;">Save up to 20% on one-time purchases and get exclusive member discounts.</p>
                    </div>
                    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <i class="ri-star-line" style="font-size: 2.5rem; color: #1f2937; margin-bottom: 1rem;"></i>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Premium Blends</h3>
                        <p style="color: #6b7280;">Access to exclusive, limited-edition blends available only to subscribers.</p>
                    </div>
                    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <i class="ri-calendar-check-line" style="font-size: 2.5rem; color: #1f2937; margin-bottom: 1rem;"></i>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Flexible Schedule</h3>
                        <p style="color: #6b7280;">Pause, skip, or cancel your subscription anytime with no penalties.</p>
                    </div>
                    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <i class="ri-gift-line" style="font-size: 2.5rem; color: #1f2937; margin-bottom: 1rem;"></i>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Early Access</h3>
                        <p style="color: #6b7280;">Be the first to try new products and seasonal releases before anyone else.</p>
                    </div>
                    <div style="background-color: white; padding: 2rem; border-radius: 0.5rem; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);">
                        <i class="ri-customer-service-2-line" style="font-size: 2.5rem; color: #1f2937; margin-bottom: 1rem;"></i>
                        <h3 style="font-family: 'Bebas Neue', sans-serif; font-size: 1.5rem; margin-bottom: 0.5rem;">Priority Support</h3>
                        <p style="color: #6b7280;">Get dedicated customer support with faster response times for all your needs.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Cart Page
function renderCartPage() {
    app.innerHTML = `
        <div class="cart-container container">
            <h1 class="page-title text-center">Shopping Cart</h1>
            <div class="cart-empty">
                <p class="cart-empty-title">Your cart is empty</p>
                <p class="cart-empty-text">Add some products to get started!</p>
                <a href="#/shop" class="cart-empty-button">Shop Now</a>
            </div>
        </div>
    `;
}

// 404 Page
function render404Page() {
    app.innerHTML = `
        <div class="not-found-container container">
            <h1 class="not-found-title">404</h1>
            <p class="not-found-subtitle">Oops! Page not found</p>
            <a href="#/" class="not-found-button">Go Home</a>
        </div>
    `;
}

// Register Routes
// Register Routes
router.register('/', renderHomePage);
router.register('/shop', renderShopPage);
router.register('/merch', renderMerchPage);
router.register('/product/:id', renderProductDetailPage);
router.register('/about', renderAboutPage);
router.register('/contact', renderContactPage);
router.register('/subscriptions', renderSubscriptionsPage);
router.register('/cart', renderCartPage);
router.register('*', render404Page);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
}

// Initialize
document.getElementById('current-year').textContent = new Date().getFullYear();
