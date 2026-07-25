// ================================
// PRODUCT DATA - WITH IMAGES & AFFILIATE LINKS
// ================================

const products = [
    // ==========================================
    // FLASH SALE PRODUCTS (1-4)
    // ==========================================
    { 
        id: 1, 
        name: 'The laptop Backpack | 15.6 Inch Laptop & Tablet Sleeve | Water Resistant | Flat-Open Design | Office & Travel Bag | Premium Fabric', 
        brand: 'Sony', 
        price: 4495.00, 
        originalPrice: 5299, 
        rating: 4.5, 
        reviews: 128, 
        badge: 'sale', 
        image: 'https://m.media-amazon.com/images/I/61jI4jxdGmL._SX679_.jpg',
        affiliate: 'https://link.amazon/A08KNCWPY',
        description: 'Urban Jungle by Safari The Venture 30L Laptop Backpack for Men and Women | 15.6 Inch Laptop & Tablet Sleeve | Water Resistant | Flat-Open Design | Office & Travel Bag | Premium Fabric' 
    },
    { 
        id: 2, 
        name: 'Rare Rabbit Boxy fit Plain Shirt', 
        brand: 'Apple', 
        price: 499, 
        originalPrice: 700, 
        rating: 5.0, 
        reviews: 95, 
        badge: 'sale', 
        image: 'https://m.media-amazon.com/images/I/61yobgHT2dL._SX522_.jpg',
        affiliate: 'https://link.amazon/B0h8PPINZ',
        description: 'coku Aluminum Laptop Stand for Desk Fold-Up & Adjustable Laptop Tabletop Stand Ventilated Laptop Riser Holder Compatibility with up to 15.6-inch Laptop, All Mac, Tab, and Mobile (Silver)' 
    },
    { 
        id: 3, 
        name: 'The laptop stand | 15.6 Inch Laptop & Tablet Sleeve | Water Resistant | Flat-Open Design | Office & Travel Bag | Premium Fabric', 
        brand: 'Herschel', 
        price: 499, 
        originalPrice: 900, 
        rating: 4.9, 
        reviews: 67, 
        badge: 'sale', 
        image: 'https://m.media-amazon.com/images/I/71xN+Brv9+L._SX522_.jpg',
        affiliate: 'https://link.amazon/B05IYJLip',
        description: 'FOLDABLE & COMPACT DESIGN: This folding slim laptop holder stand is very portable to carry on. It can be fully folded and easily put into a small storage bag with lightweight travel design' 
    },
    { 
        id: 4, 
        name: 'Enhance you beuty with Lakme Sunscreen For Bright Skin, SPF 50 PA++++,', 
        price: 401, 
        originalPrice: 499, 
        rating: 4.8, 
        reviews: 203, 
        badge: 'sale', 
        image: 'https://m.media-amazon.com/images/I/61M95PqeiFL._SL1000_.jpg',
        affiliate: 'https://link.amazon/B038wDScn',
        description: 'Lakme Sunscreen For Bright Skin, SPF 50 PA++++, Water Light, Niacinamide, In Vivo Tested,With New-Age UV Filters, Boosts Glow, Reduces Dullness & Dark Spots 100 ml' 
    },

    // ==========================================
    // FEATURED PRODUCTS (5-8)
    // ==========================================
    { 
        id: 5, 
        name: 'SOFTPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thick Lint & Streak-Free Multipurpose Cloths - Automotive Microfiber Towels for Car Bike Cleaning Polishing Washing & Detailing.', 
        brand: 'GoPro', 
        price: 241, 
        originalPrice: 399, 
        rating: 4.6, 
        reviews: 156, 
        badge: 'featured', 
        image: 'https://m.media-amazon.com/images/I/81dsWgzXLrL._SL1500_.jpg',
        affiliate: 'https://link.amazon/B04oQS52D',
        description: 'SOFTSPUN Microfiber Cloth - 4 pcs - 40x40 cms - 340 GSM Grey! Thick Lint & Streak-Free Multipurpose Cloths - Automotive Microfiber Towels for Car Bike Cleaning Polishing Washing & Detailing.' 
    },
    { 
        id: 6, 
        name: 'Campus Men First Running Shoes', 
        brand: 'Logitech', 
        price: 1159,
        originalPrice: 1499,
        rating: 4.7, 
        reviews: 89, 
        badge: 'featured', 
        image: 'https://m.media-amazon.com/images/I/71RiFU3KvLL._SY695_.jpg',
        affiliate: 'https://link.amazon/B0f7XJ7H7',
        description: 'Campus Men First Running Shoes' 
    },
    { 
        id: 7, 
        name: 'Sharp steps strat here Boldfit Sneakers for Man Lightweight Shoes', 
        brand: 'Amazon', 
        price: 1289 , 
        originalPrice: 1499, 
        rating: 4.9, 
        reviews: 312, 
        badge: 'featured', 
        image: 'https://m.media-amazon.com/images/I/516jmyjlt8L._SY695_.jpg',
        affiliate: 'https://link.amazon/B0gyY1Mp5',
        description: 'Boldfit Sneakers for Man Lightweight Shoes for Men Comfortable Sneakers for Men Air Mesh Casual Shoes Mens Soft Cushion Insole Lace Up Casual Boys Shoe Sneaker DripWave' 
    },
    { 
        id: 8, 
        name: '3 in 1 kitchen appliance', 
        brand: 'LEAWALL', 
        price: 169 , 
        originalPrice: 199, 
        rating: 4.8, 
        reviews: 178, 
        badge: 'featured', 
        image: 'https://m.media-amazon.com/images/I/613nZfSRqWL._SL1500_.jpg',
        affiliate: 'https://link.amazon/B0d1Q2BUp',
        description: 'Leawall 3-in-1 Soap Dispenser with Sponge Holder – Bathroom Liquid Soap Pump for Kitchen Sink handwash Dispenser Bottle soap Dispenser for wash Basin Kitchen Accessories Items for Home (Multicolor)' 
    },

    // ==========================================
    // BEST SELLERS (9-12)
    // ==========================================
    { 
        id: 9, 
        name: 'Professional Drone', 
        brand: 'DJI', 
        price: 49999, 
        originalPrice: null, 
        rating: 5.0, 
        reviews: 45, 
        badge: 'bestseller', 
        image: 'https://m.media-amazon.com/images/I/71CQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Fffffff',
        description: '4K camera, 30 min flight time, obstacle avoidance' 
    },
    { 
        id: 10, 
        name: 'Smartphone 5G', 
        brand: 'Samsung', 
        price: 69999, 
        originalPrice: null, 
        rating: 4.7, 
        reviews: 234, 
        badge: 'bestseller', 
        image: 'https://m.media-amazon.com/images/I/71DQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Gggggg',
        description: '6.7" display, 108MP camera, 5000mAh battery' 
    },
    { 
        id: 11, 
        name: 'Gaming Monitor', 
        brand: 'LG', 
        price: 34999, 
        originalPrice: null, 
        rating: 4.9, 
        reviews: 89, 
        badge: 'bestseller', 
        image: 'https://m.media-amazon.com/images/I/71EQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Hhhhhh',
        description: '27" 4K, 144Hz, 1ms response time' 
    },
    { 
        id: 12, 
        name: 'Coffee Maker', 
        brand: 'Breville', 
        price: 8999, 
        originalPrice: null, 
        rating: 4.6, 
        reviews: 156, 
        badge: 'bestseller', 
        image: 'https://m.media-amazon.com/images/I/71FQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Iiiiii',
        description: 'Programmable, 12-cup capacity, thermal carafe' 
    },

    // ==========================================
    // NEW ARRIVALS (13-16)
    // ==========================================
    { 
        id: 13, 
        name: 'Smart Glasses', 
        brand: 'Ray-Ban', 
        price: 29999, 
        originalPrice: null, 
        rating: 4.8, 
        reviews: 34, 
        badge: 'new', 
        image: 'https://m.media-amazon.com/images/I/71GQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Jjjjjj',
        description: 'Augmented reality display, touch controls' 
    },
    { 
        id: 14, 
        name: 'Robot Vacuum', 
        brand: 'iRobot', 
        price: 44999, 
        originalPrice: null, 
        rating: 4.7, 
        reviews: 78, 
        badge: 'new', 
        image: 'https://m.media-amazon.com/images/I/71HQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Kkkkkk',
        description: 'Smart mapping, self-emptying, 120min runtime' 
    },
    { 
        id: 15, 
        name: 'Scent Diffuser', 
        brand: 'Vitruvi', 
        price: 3999, 
        originalPrice: null, 
        rating: 4.9, 
        reviews: 45, 
        badge: 'new', 
        image: 'https://m.media-amazon.com/images/I/61IQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Llllll',
        description: 'Ultrasonic, adjustable mist, LED lighting' 
    },
    { 
        id: 16, 
        name: 'Portable Speaker', 
        brand: 'JBL', 
        price: 7999, 
        originalPrice: null, 
        rating: 4.5, 
        reviews: 123, 
        badge: 'new', 
        image: 'https://m.media-amazon.com/images/I/71JQZcQ8L3L._SL1500_.jpg',
        affiliate: 'https://amzn.to/3Mmmmmm',
        description: '360° sound, waterproof, 20hr battery' 
    }
];

// Category Data
const categories = [
    { name: 'Electronics', icon: 'fa-laptop', count: 267, color: 'linear-gradient(135deg, #0066FF, #0044CC)' },
    { name: 'Fashion', icon: 'fa-tshirt', count: 189, color: 'linear-gradient(135deg, #000000, #333333)' },
    { name: 'Home & Living', icon: 'fa-home', count: 145, color: 'linear-gradient(135deg, #0066FF, #003399)' },
    { name: 'Kitchen', icon: 'fa-kitchen-set', count: 98, color: 'linear-gradient(135deg, #000000, #222222)' },
    { name: 'Beauty', icon: 'fa-spa', count: 134, color: 'linear-gradient(135deg, #0066FF, #002266)' },
    { name: 'Sports', icon: 'fa-running', count: 76, color: 'linear-gradient(135deg, #000000, #1a1a1a)' }
];

// ================================
// CART STATE
// ================================

let cartCount = 0;
let wishlistCount = 0;

// ================================
// DOM MANIPULATION
// ================================

function createProductCard(product, buttonText = 'Buy Now') {
    const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
    const badgeMap = {
        'sale': `<span class="sale-badge">-${discount}%</span>`,
        'featured': '<span class="featured-badge">Featured</span>',
        'bestseller': '<span class="bestseller-badge"># Best Seller</span>',
        'new': '<span class="new-badge">New</span>'
    };
    const badgeHtml = product.badge && badgeMap[product.badge] ? badgeMap[product.badge] : '';
    
    const ratingStars = getRatingStars(product.rating);
    const originalPriceHtml = product.originalPrice ? 
        `<span class="original-price">₹${product.originalPrice.toLocaleString()}</span>` : '';
    
    // 🖼️ IMAGE: Use image if provided
    let imageHtml = '';
    if (product.image) {
        if (product.image.startsWith('http://') || product.image.startsWith('https://')) {
            imageHtml = `<img src="${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" />`;
        } else {
            imageHtml = `<img src="images/${product.image}" alt="${product.name}" style="width:100%; height:100%; object-fit:cover;" />`;
        }
    } else {
        imageHtml = `<i class="fas fa-image"></i>`;
    }
    
    // 🔗 AFFILIATE LINK: Check if product has affiliate link
    const hasAffiliate = product.affiliate && product.affiliate !== '';
    const affiliateUrl = hasAffiliate ? product.affiliate : '#';
    
    // 🛒 Buy Button: Show "Buy on Amazon" if affiliate
    const buyButton = hasAffiliate 
        ? `<a href="${affiliateUrl}" target="_blank" rel="nofollow sponsored" class="add-to-cart-btn" onclick="event.stopPropagation();">
            <i class="fab fa-amazon"></i> Buy on Amazon
           </a>`
        : `<button class="add-to-cart-btn" onclick="event.stopPropagation(); buyNow(${product.id})">
            <i class="fas fa-bolt"></i> Buy Now
           </button>`;
    
    // 🖱️ Card Click: Redirect to affiliate if available
    const cardClick = hasAffiliate 
        ? `window.open('${affiliateUrl}', '_blank');` 
        : `openProductDetail(${product.id})`;
    
    // 📝 Affiliate Disclosure
    const disclosure = hasAffiliate 
        ? `<div class="affiliate-disclosure">
            <small>🛒 As an Amazon Associate, we earn from qualifying purchases.</small>
           </div>` 
        : '';
    
    return `
        <div class="product-card" data-id="${product.id}" onclick="${cardClick}">
            <div class="product-image">
                <div class="image-placeholder">
                    ${imageHtml}
                </div>
                ${badgeHtml}
                <button class="wishlist-btn" onclick="event.stopPropagation(); toggleWishlist(this)">
                    <i class="far fa-heart"></i>
                </button>
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    <span class="current-price">₹${product.price.toLocaleString()}</span>
                    ${originalPriceHtml}
                </div>
                <div class="product-rating">
                    ${ratingStars}
                    <span>(${product.rating}) ${product.reviews} reviews</span>
                </div>
                ${buyButton}
                ${disclosure}
            </div>
        </div>
    `;
}

function getRatingStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if (halfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

function createCategoryCard(category) {
    return `
        <a href="categories.html?category=${category.name.toLowerCase().replace(' & ', '-')}" class="category-card" style="background: ${category.color};">
            <i class="fas ${category.icon}"></i>
            <h3>${category.name}</h3>
            <p>${category.count} products</p>
        </a>
    `;
}

// ================================
// RENDER PRODUCTS
// ================================

function renderProducts() {
    // Flash Sale - Products 1-4
    const flashSaleGrid = document.getElementById('flash-sale-grid');
    if (flashSaleGrid) {
        flashSaleGrid.innerHTML = products.slice(0, 4).map(p => createProductCard(p)).join('');
    }
    
    // Featured Products - Products 5-8
    const featuredGrid = document.getElementById('featured-grid');
    if (featuredGrid) {
        featuredGrid.innerHTML = products.slice(4, 8).map(p => createProductCard(p)).join('');
    }
    
    // Best Sellers - Products 9-12
    const bestsellerGrid = document.getElementById('bestseller-grid');
    if (bestsellerGrid) {
        bestsellerGrid.innerHTML = products.slice(8, 12).map(p => createProductCard(p)).join('');
    }
    
    // New Arrivals - Products 13-16
    const newArrivalsGrid = document.getElementById('new-arrivals-grid');
    if (newArrivalsGrid) {
        newArrivalsGrid.innerHTML = products.slice(12, 16).map(p => createProductCard(p)).join('');
    }
    
    // Categories
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) {
        categoryGrid.innerHTML = categories.map(c => createCategoryCard(c)).join('');
    }
}

// ================================
// COUNTDOWN TIMER
// ================================

function startCountdown() {
    let totalSeconds = 3600;
    
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    function updateTimer() {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
        
        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            totalSeconds = 3600;
        }
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
}

// ================================
// CART & WISHLIST FUNCTIONS
// ================================

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    cartCount++;
    updateCartBadge();
    
    const btn = event ? event.target.closest('.add-to-cart-btn') : null;
    if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Added!';
        btn.style.background = '#34C759';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
        }, 2000);
    }
}

function toggleWishlist(element) {
    const icon = element.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');
    
    if (icon.classList.contains('fas')) {
        wishlistCount++;
        element.classList.add('active');
    } else {
        wishlistCount--;
        element.classList.remove('active');
    }
    updateWishlistBadge();
}

function updateCartBadge() {
    const badges = document.querySelectorAll('.cart-count');
    badges.forEach(badge => {
        badge.textContent = cartCount;
    });
}

function updateWishlistBadge() {
    const badges = document.querySelectorAll('.wishlist-count');
    badges.forEach(badge => {
        badge.textContent = wishlistCount;
    });
}

function openProductDetail(productId) {
    window.location.href = `product-detail.html?id=${productId}`;
}

// ================================
// SEARCH FUNCTIONALITY
// ================================

function searchProducts() {
    const input = document.getElementById('searchInput');
    const query = input.value.trim().toLowerCase();
    
    if (!query) {
        renderProducts();
        return;
    }
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
    
    const grids = ['flash-sale-grid', 'featured-grid', 'bestseller-grid', 'new-arrivals-grid'];
    if (results.length > 0) {
        grids.forEach(gridId => {
            const grid = document.getElementById(gridId);
            if (grid) {
                grid.innerHTML = results.map(p => createProductCard(p)).join('');
            }
        });
    } else {
        const message = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">
            <i class="fas fa-search" style="font-size: 48px; color: var(--gray-300);"></i>
            <h3 style="margin-top: 16px;">No products found</h3>
            <p style="color: var(--gray-500);">Try searching for something else</p>
        </div>`;
        grids.forEach(gridId => {
            const grid = document.getElementById(gridId);
            if (grid) {
                grid.innerHTML = message;
            }
        });
    }
}

// ================================
// INITIALIZATION
// ================================

document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    startCountdown();
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
});

// ================================
// NAVIGATION - MEGA MENU FIX
// ================================

document.querySelectorAll('.dropdown').forEach(item => {
    const megaMenu = item.querySelector('.mega-menu');
    if (megaMenu) {
        item.addEventListener('mouseenter', function() {
            megaMenu.style.opacity = '1';
            megaMenu.style.visibility = 'visible';
            megaMenu.style.pointerEvents = 'auto';
        });
        item.addEventListener('mouseleave', function() {
            megaMenu.style.opacity = '0';
            megaMenu.style.visibility = 'hidden';
            megaMenu.style.pointerEvents = 'none';
        });
    }
});
