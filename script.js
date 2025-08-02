const productsData = [
    // Category: Home Essentials
    { id: 'he001', name: 'Smart Bulb', price: 47.00, image: 'images/he001.jpeg', category: 'Home Essentials', description: 'Energy efficient LED light bulb.', trending: true, bestSeller: false },
    { id: 'he002', name: 'Portable Handheld Vacuum', price: 299.99, image: 'images/he002.jpg', category: 'Home Essentials', description: 'Lightweight and powerful vacuum for quick clean-ups around the house.', trending: false, bestSeller: true },
    { id: 'he003', name: 'Automatic Soap Dispenser', price: 250.00, image: 'images/he003.jpeg', category: 'Home Essentials', description: 'Touchless soap dispenser for hygienic hand washing.', trending: true, bestSeller: false },
    { id: 'he004', name: 'Digital Kitchen Scale', price: 300.00, image: 'images/he004.jpeg', category: 'Home Essentials', description: 'Accurate digital scale for precise measurements in cooking and baking.', trending: false, bestSeller: false },
    { id: 'he005', name: 'Reusable Silicone Food Bags (Set of 4)', price: 29.99, image: 'images/he005.jpeg', category: 'Home Essentials', description: 'Eco-friendly and versatile bags for food storage and meal prep.', trending: false, bestSeller: true },
    { id: 'he006', name: 'Mini Desk Humidifier', price: 200.00, image: 'images/he006.jpg', category: 'Home Essentials', description: 'Compact humidifier for personal use, perfect for office or bedroom.', trending: true, bestSeller: false },
    { id: 'he007', name: 'Facial brush', price: 35.00, image: 'images/he007.jpeg', category: 'Home Essentials', description: 'Deep scrub face wash', trending: false, bestSeller: false },
    { id: 'he008', name: 'Magnetic Knife Holder', price: 189.75, image: 'images/he008.jpeg', category: 'Home Essentials', description: 'Space-saving and stylish way to store your kitchen knives safely.', trending: false, bestSeller: false },
    { id: 'he010', name: 'Aromatherapy Diffuser', price: 399.99, image: 'images/he010.jpeg', category: 'Home Essentials', description: 'Create a relaxing ambiance with essential oils and soft LED lighting.', trending: true, bestSeller: true },

    // Category: Personal Care & Wellness
    { id: 'pc001', name: 'Electric Toothbrush', price: 100.00, image: 'images/pc001.jpg', category: 'Personal Care & Wellness', description: 'Advanced electric toothbrush for superior plaque removal.', trending: false, bestSeller: true },
    { id: 'pc002', name: 'Cleaning Brush', price: 60.00, image: 'images/pc002.jpg', category: 'Personal Care & Wellness', description: 'Deep cleansing brush for a radiant and healthy complexion.', trending: true, bestSeller: false },
    { id: 'pc003', name: 'Travel Size Hand Sanitizer', price: 40.00, image: 'images/pc003.jpg', category: 'Personal Care & Wellness', description: 'Convenient pocket-sized hand sanitizers for on-the-go cleanliness.', trending: false, bestSeller: false },
    { id: 'pc004', name: 'Portable Mini Fan', price: 99.99, image: 'images/pc004.jpg', category: 'Personal Care & Wellness', description: 'Keep cool anywhere with this compact and powerful mini fan.', trending: true, bestSeller: false },
    { id: 'pc005', name: 'Jade Roller & Gua Sha Set', price: 150.00, image: 'images/pc005.jpg', category: 'Personal Care & Wellness', description: 'Promote circulation and reduce puffiness with this natural skincare tool set.', trending: false, bestSeller: false },
    { id: 'pc006', name: 'Water Bottle', price: 120.00, image: 'images/pc006.jpg', category: 'Personal Care & Wellness', description: 'Tracks your hydration and reminds you to drink water throughout the day.', trending: true, bestSeller: true },
    { id: 'pc007', name: 'Portable Speaker', price: 250.00, image: 'images/pc007.jpg', category: 'Personal Care & Wellness', description: 'Enjoy peaceful sleep and listen to music with this comfortable sleep mask.', trending: false, bestSeller: false },
    { id: 'pc008', name: 'Compact Hair Dryer', price: 455.00, image: 'images/pc008.jpg', category: 'Personal Care & Wellness', description: 'Lightweight and foldable hair dryer, perfect for travel.', trending: false, bestSeller: false },
    { id: 'pc009', name: 'UV Sterilizer Box', price: 990.99, image: 'images/pc009.jpg', category: 'Personal Care & Wellness', description: 'Sanitize your phone, keys, and small items with UV-C light.', trending: true, bestSeller: false },
    { id: 'pc010', name: 'Therapeutic Neck Massager', price: 285.00, image: 'images/pc010.jpg', category: 'Personal Care & Wellness', description: 'Relieve neck and shoulder tension with this portable massager.', trending: false, bestSeller: true },

    // Category: Tech & Gadgets
    { id: 'tg001', name: 'Wireless Charging Pad', price: 199.99, image: 'images/tg001.jpg', category: 'Tech & Gadgets', description: 'Fast and convenient wireless charging for compatible devices.', trending: true, bestSeller: true },
    { id: 'tg003', name: 'USB-C Multi-port Adapter', price: 150.00, image: 'images/tg003.jpg', category: 'Tech & Gadgets', description: 'Expand your laptop\'s connectivity with HDMI, USB, and charging ports.', trending: true, bestSeller: false },
    { id: 'tg004', name: 'Seagate Expansion 500 GB External SSD', price: 1999.90, image: 'images/tg004.jpg', category: 'Tech & Gadgets', description: 'High-speed external solid-state drive for quick data transfer.', trending: false, bestSeller: false },
    { id: 'tg005', name: 'Smart Pen for Digital Notes', price: 2700.00, image: 'images/tg005.jpg', category: 'Tech & Gadgets', description: 'Digitize your handwritten notes and drawings instantly.', trending: true, bestSeller: false },
    { id: 'tg006', name: 'Foldable Bluetooth Keyboard', price: 45.00, image: 'images/tg006.jpg', category: 'Tech & Gadgets', description: 'Ultra-portable keyboard for typing on the go with your tablet or phone.', trending: false, bestSeller: false },
    { id: 'tg007', name: 'Webcam Cover (3-pack)', price: 8.00, image: 'images/tg007.jpg', category: 'Tech & Gadgets', description: 'Ensure your privacy with these simple and effective webcam covers.', trending: false, bestSeller: false },
    { id: 'tg008', name: 'Cable Organizer Clips (10-pack)', price: 10.00, image: 'images/tg008.jpg', category: 'Tech & Gadgets', description: 'Keep your cables neat and tidy with these adhesive clips.', trending: false, bestSeller: false },
    { id: 'tg009', name: 'Stylus Pen for Touchscreens', price: 14.99, image: 'images/tg009.jpg', category: 'Tech & Gadgets', description: 'Precision stylus for drawing, writing, and navigating on touch devices.', trending: false, bestSeller: false },
    { id: 'tg010', name: 'USB LED Strip Lights (5m)', price: 25.00, image: 'images/tg010.jpg', category: 'Tech & Gadgets', description: 'Add ambient lighting to your desk, TV, or shelves with easy USB power.', trending: true, bestSeller: false },

    // Category: Kitchen & Dining
    { id: 'kd001', name: 'Reusable Coffee Cup', price: 18.00, image: 'images/kd001.jpg', category: 'Kitchen & Dining', description: 'Eco-friendly and stylish reusable cup for your daily coffee.', trending: false, bestSeller: false },
    { id: 'kd002', name: 'Silicone Baking Mat (2-pack)', price: 16.50, image: 'images/kd002.jpg', category: 'Kitchen & Dining', description: 'Non-stick and reusable mats for healthier baking and easy cleanup.', trending: false, bestSeller: false },
    { id: 'kd004', name: 'Portable Blender', price: 35.00, image: 'images/kd004.jpg', category: 'Kitchen & Dining', description: 'Make fresh smoothies and shakes on the go with this compact blender.', trending: false, bestSeller: true },
    { id: 'kd005', name: 'Herb Scissors with 5 Blades', price: 14.00, image: 'images/kd005.jpg', category: 'Kitchen & Dining', description: 'Quickly chop herbs with multiple blades for efficient meal prep.', trending: false, bestSeller: false },
    { id: 'kd007', name: 'Avocado Slicer Tool', price: 7.50, image: 'images/kd007.jpg', category: 'Kitchen & Dining', description: 'All-in-one tool for splitting, pitting, and slicing avocados.', trending: false, bestSeller: false },
    { id: 'kd008', name: 'Reusable Produce Bags (Mesh, Set of 6)', price: 15.00, image: 'images/kd008.jpg', category: 'Kitchen & Dining', description: 'Lightweight and breathable bags for grocery shopping and storage.', trending: false, bestSeller: false },
    { id: 'kd009', name: 'Ice Cube Trays with Lids (2-pack)', price: 11.00, image: 'images/kd009.jpg', category: 'Kitchen & Dining', description: 'Easy-release ice trays with lids to prevent spills and odors.', trending: false, bestSeller: false },
    { id: 'kd010', name: 'Lemon Squeezer', price: 19.00, image: 'images/kd010.jpg', category: 'Kitchen & Dining', description: 'Durable and efficient tool for extracting juice from lemons and limes.', trending: false, bestSeller: false },

    // Category: Office & Stationery
    { id: 'os001', name: 'Ergonomic Mouse Pad with Wrist Rest', price: 12.50, image: 'images/os001.jpg', category: 'Office & Stationery', description: 'Comfortable support for your wrist during long hours at the computer.', trending: false, bestSeller: false },
    { id: 'os002', name: 'Desk Organizer with Phone Stand', price: 20.00, image: 'images/os002.jpg', category: 'Office & Stationery', description: 'Keep your desk tidy with multiple compartments and a convenient phone holder.', trending: true, bestSeller: false },
    { id: 'os003', name: 'Reusable Smart Notebook', price: 30.00, image: 'images/os003.jpg', category: 'Office & Stationery', description: 'Write, scan, and erase for endless reuse with cloud integration.', trending: false, bestSeller: false },
    { id: 'os004', name: 'Portable Document Scanner', price: 120.00, image: 'images/os004.jpg', category: 'Office & Stationery', description: 'Quickly digitize documents on the go with this compact scanner.', trending: false, bestSeller: false },
];

// Global State Variables
let cart = [];
let currentCategory = 'All Products';
let currentPage = 'home'; // 'home', 'cart', 'contact'
let searchQuery = '';
let isMobileNavOpen = false;

// Color Palette (Tailwind classes for consistency)
const colors = {
    primaryLight: 'bg-blue-50',
    primaryDark: 'text-blue-800',
    secondaryLight: 'bg-pink-50',
    secondaryDark: 'text-pink-800',
    accentBlue: 'bg-blue-500 hover:bg-blue-600',
    accentPink: 'bg-pink-500 hover:bg-pink-600',
    borderBlue: 'border-blue-200',
    borderPink: 'border-pink-200',
    textMuted: 'text-gray-500',
    shadow: 'shadow-md',
    rounded: 'rounded-lg',
    transition: 'transition-all duration-300 ease-in-out',
};

// --- Utility Functions ---

// Get unique categories from productsData
function getCategories() {
    const categoriesSet = new Set(productsData.map(p => p.category));
    return ['All Products', ...Array.from(categoriesSet)];
}

// Filter products based on currentCategory and search query
function getFilteredProducts() {
    let filtered = currentCategory === 'All Products'
        ? productsData
        : productsData.filter(product => product.category === currentCategory);
    
    if (searchQuery.trim()) {
        filtered = filtered.filter(product => 
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    return filtered;
}

// Get trending products
function getTrendingProducts() {
    return productsData.filter(p => p.trending);
}

// Get best selling products
function getBestSellingProducts() {
    return productsData.filter(p => p.bestSeller);
}

// --- Mobile Navigation Functions ---

function toggleMobileNav() {
    isMobileNavOpen = !isMobileNavOpen;
    const overlay = document.getElementById('mobile-nav-overlay');
    const nav = document.getElementById('mobile-nav');
    
    if (isMobileNavOpen) {
        overlay.classList.add('active');
        nav.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        overlay.classList.remove('active');
        nav.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function toggleMobileSearch() {
    const mobileSearch = document.getElementById('mobile-search');
    mobileSearch.classList.toggle('hidden');
    if (!mobileSearch.classList.contains('hidden')) {
        document.getElementById('mobile-search-input').focus();
    }
}

// --- Search Functions ---

function handleSearch(query) {
    searchQuery = query.trim();
    
    if (query.length > 0) {
        showSearchSuggestions(query);
    } else {
        hideSearchResults();
    }
    
    if (currentPage === 'home') {
        renderProductGrid();
    }
}

function showSearchSuggestions(query) {
    const searchResults = document.getElementById('search-results');
    if (!searchResults) return;
    
    const suggestions = productsData.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);

    if (suggestions.length > 0) {
        let html = '';
        suggestions.forEach(product => {
            html += `
                <div class="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0" 
                     onclick="selectSearchSuggestion('${product.name}', '${product.id}')">
                    <div class="flex items-center">
                        <div class="w-8 h-8 rounded mr-3 bg-white flex items-center justify-center overflow-hidden">
                            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain"
                                 onerror="this.onerror=null;this.src='images/placeholder-product.jpg';">
                        </div>
                        <div>
                            <div class="font-medium text-sm">${product.name}</div>
                            <div class="text-xs text-gray-500">R${product.price.toFixed(2)} • ${product.category}</div>
                        </div>
                    </div>
                </div>
            `;
        });
        searchResults.innerHTML = html;
        searchResults.classList.remove('hidden');
    } else {
        searchResults.innerHTML = '<div class="p-3 text-gray-500 text-sm">No products found</div>';
        searchResults.classList.remove('hidden');
    }
}

function selectSearchSuggestion(productName, productId) {
    document.getElementById('search-input').value = productName;
    document.getElementById('mobile-search-input').value = productName;
    hideSearchResults();
    
    // Find and scroll to the product
    const product = productsData.find(p => p.id === productId);
    if (product) {
        currentCategory = product.category;
        searchQuery = productName;
        navigateTo('home');
        setTimeout(() => {
            const productElement = document.querySelector(`[data-product-id="${productId}"]`);
            if (productElement) {
                productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                productElement.classList.add('ring-2', 'ring-blue-300');
                setTimeout(() => {
                    productElement.classList.remove('ring-2', 'ring-blue-300');
                }, 2000);
            }
        }, 100);
    }
}

function hideSearchResults() {
    const searchResults = document.getElementById('search-results');
    if (searchResults) {
        searchResults.classList.add('hidden');
    }
}

// --- Cart Management Functions ---

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    if (cart.length === 0 && currentPage === 'cart') {
        navigateTo('home');
    } else if (currentPage === 'cart') {
        renderCartPage();
    }
}

function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        if (item.quantity === 0) {
            removeFromCart(productId);
        }
    }
    updateCartUI();
    if (currentPage === 'cart') {
        renderCartPage();
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
    navigateTo('home');
    showNotification('Cart cleared!', 'info');
}

// --- Notification System ---

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm transform transition-all duration-300 translate-x-full`;
    
    const bgColor = type === 'success' ? 'bg-green-500' : 
                   type === 'error' ? 'bg-red-500' : 
                   'bg-blue-500';
    
    notification.classList.add(bgColor, 'text-white');
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-2 text-white hover:text-gray-200">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 10);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// --- UI Rendering Functions ---

function updateCartUI() {
    const cartCountSpan = document.getElementById('cart-count');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    if (totalItems > 0) {
        cartCountSpan.textContent = totalItems;
        cartCountSpan.classList.remove('hidden');
    } else {
        cartCountSpan.classList.add('hidden');
    }
}

function updateBreadcrumb() {
    const breadcrumb = document.getElementById('breadcrumb');
    const breadcrumbCurrent = document.getElementById('breadcrumb-current');
    
    if (currentPage === 'home') {
        if (searchQuery) {
            breadcrumbCurrent.textContent = `Search: "${searchQuery}"`;
            breadcrumb.classList.remove('hidden');
        } else if (currentCategory !== 'All Products') {
            breadcrumbCurrent.textContent = currentCategory;
            breadcrumb.classList.remove('hidden');
        } else {
            breadcrumb.classList.add('hidden');
        }
    } else if (currentPage === 'cart') {
        breadcrumbCurrent.textContent = 'Shopping Cart';
        breadcrumb.classList.remove('hidden');
    } else if (currentPage === 'contact') {
        breadcrumbCurrent.textContent = 'Contact Us';
        breadcrumb.classList.remove('hidden');
    }
}

function renderNavbar() {
    const categoryButtonsContainer = document.getElementById('category-buttons');
    const mobileCategories = document.getElementById('mobile-categories');
    
    if (!categoryButtonsContainer || !mobileCategories) return;
    
    categoryButtonsContainer.innerHTML = '';
    mobileCategories.innerHTML = '';
    
    const categories = getCategories();

    categories.forEach(category => {
        // Desktop button
        const button = document.createElement('button');
        button.textContent = category;
        button.className = `px-4 py-2 ${colors.rounded} font-medium ${colors.transition}`;

        button.onclick = () => {
            currentCategory = category;
            searchQuery = '';
            document.getElementById('search-input').value = '';
            document.getElementById('mobile-search-input').value = '';
            navigateTo('home');
            updateActiveNavButton();
        };

        if (category === currentCategory && !searchQuery) {
            button.classList.add(...colors.accentPink.split(' '), 'text-white', ...colors.shadow.split(' '));
        } else {
            button.classList.add('bg-white', colors.primaryDark, 'border', colors.borderPink, 'hover:bg-pink-500', 'hover:text-white');
        }
        categoryButtonsContainer.appendChild(button);

        // Mobile link
        const mobileLink = document.createElement('a');
        mobileLink.href = '#';
        mobileLink.textContent = category;
        mobileLink.className = 'block px-3 py-2 rounded-lg hover:bg-blue-50 text-blue-700 text-sm';
        mobileLink.onclick = (e) => {
            e.preventDefault();
            currentCategory = category;
            searchQuery = '';
            navigateTo('home');
            toggleMobileNav();
        };
        mobileCategories.appendChild(mobileLink);
    });
}

function updateActiveNavButton() {
    document.querySelectorAll('#category-buttons button').forEach(btn => {
        btn.classList.remove(...colors.accentPink.split(' '), 'text-white', ...colors.shadow.split(' '));
        btn.classList.add('bg-white', colors.primaryDark, 'border', colors.borderPink, 'hover:bg-pink-500', 'hover:text-white');
    });
    
    const buttons = document.querySelectorAll('#category-buttons button');
    const categories = getCategories();
    const activeIndex = categories.indexOf(currentCategory);
    
    if (activeIndex >= 0 && buttons[activeIndex] && !searchQuery) {
        const activeButton = buttons[activeIndex];
        activeButton.classList.add(...colors.accentPink.split(' '), 'text-white', ...colors.shadow.split(' '));
        activeButton.classList.remove('bg-white', colors.primaryDark, 'border', colors.borderPink, 'hover:bg-pink-500', 'hover:text-white');
    }
}

function renderTrendingSection() {
    const trendingProducts = getTrendingProducts();
    const bestSellingProducts = getBestSellingProducts();
    
    if (trendingProducts.length === 0 && bestSellingProducts.length === 0) {
        return '';
    }

    let html = `
        <section id="trending-section" class="py-8 bg-gradient-to-r from-blue-50 to-pink-50">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-8 text-blue-800">Featured Products</h2>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    `;

    // Trending Products
    if (trendingProducts.length > 0) {
        html += `
            <div>
                <h3 class="text-2xl font-semibold mb-4 text-pink-700 flex items-center">
                    <span class="inline-block w-2 h-2 bg-pink-500 rounded-full mr-2 trending-badge"></span>
                    Trending Now
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        `;
        
        trendingProducts.slice(0, 4).forEach(product => {
            html += renderProductCard(product, true);
        });
        
        html += `</div></div>`;
    }

    // Best Selling Products
    if (bestSellingProducts.length > 0) {
        html += `
            <div>
                <h3 class="text-2xl font-semibold mb-4 text-blue-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Best Sellers
                </h3>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        `;
        
        bestSellingProducts.slice(0, 4).forEach(product => {
            html += renderProductCard(product, false, true);
        });
        
        html += `</div></div>`;
    }

    html += `</div></div></section>`;
    return html;
}

function renderProductCard(product, isTrending = false, isBestSeller = false) {
    const badgeHtml = isTrending ? 
        `<span class="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full trending-badge">Trending</span>` :
        isBestSeller ? 
        `<span class="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Best Seller</span>` : 
        '';

    return `
        <div class="
            ${colors.primaryLight} ${colors.rounded} ${colors.shadow} overflow-hidden
            flex flex-col p-4 text-center relative
            border ${colors.borderBlue}
            transform hover:scale-105 ${colors.transition}
        " data-product-id="${product.id}">
            ${badgeHtml}
            <div class="w-full h-48 mb-4 flex items-center justify-center bg-white ${colors.rounded} border ${colors.borderBlue} overflow-hidden">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    class="w-full h-full object-contain p-2"
                    onerror="this.onerror=null;this.src='images/placeholder-product.jpg';"
                />
            </div>
            <h3 class="text-sm font-semibold ${colors.primaryDark} mb-2 line-clamp-2">${product.name}</h3>
            <p class="text-lg font-bold ${colors.secondaryDark} mb-3">R${product.price.toFixed(2)}</p>
            <button
                onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})"
                class="
                    ${colors.accentBlue} text-white px-3 py-2 ${colors.rounded}
                    font-semibold text-sm ${colors.shadow} ${colors.transition}
                    hover:opacity-90 w-full
                "
            >
                Add to Cart
            </button>
        </div>
    `;
}

function renderProductGrid() {
    const filteredProducts = getFilteredProducts();

    let title = currentCategory;
    if (searchQuery) {
        title = `Search Results for "${searchQuery}"`;
    }

    let productsHtml = `
        <h2 id="product-list-title" class="text-3xl font-bold mb-6 text-center ${colors.primaryDark} mt-6">
            ${title}
        </h2>
    `;

    if (filteredProducts.length === 0) {
        productsHtml += `
            <div class="text-center p-8">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.137 0-4.146-.832-5.657-2.343m0 0l-.707-.707A7.967 7.967 0 014 10a8 8 0 118 8c0-.896-.156-1.759-.445-2.57z" />
                </svg>
                <p class="text-xl ${colors.textMuted} mb-4">No products found</p>
                <button onclick="clearSearch()" class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                    Clear Search
                </button>
            </div>
        `;
    } else {
        productsHtml += `<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">`;
        filteredProducts.forEach(product => {
            productsHtml += `
                <div class="
                    ${colors.primaryLight} ${colors.rounded} ${colors.shadow} overflow-hidden
                    flex flex-col items-center p-4 text-center relative
                    border ${colors.borderBlue}
                    transform hover:scale-105 ${colors.transition}
                " data-product-id="${product.id}">
                    ${product.trending ? '<span class="absolute top-2 left-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full trending-badge">Trending</span>' : ''}
                    ${product.bestSeller ? '<span class="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">Best Seller</span>' : ''}
                    
                    <div class="w-full h-48 mb-4 flex items-center justify-center bg-white ${colors.rounded} border ${colors.borderBlue} overflow-hidden">
                        <img
                            src="${product.image}"
                            alt="${product.name}"
                            class="w-full h-full object-contain p-2"
                            onerror="this.onerror=null;this.src='images/placeholder-product.jpg';"
                        />
                    </div>
                    <h3 class="text-lg font-semibold ${colors.primaryDark} mb-2">${product.name}</h3>
                    <p class="text-sm ${colors.textMuted} mb-3 line-clamp-2">${product.description}</p>
                    <p class="text-xl font-bold ${colors.secondaryDark} mb-3">R${product.price.toFixed(2)}</p>
                    <button
                        onclick="addToCart(${JSON.stringify(product).replace(/"/g, '&quot;')})"
                        class="
                            ${colors.accentBlue} text-white px-4 py-2 ${colors.rounded}
                            font-semibold ${colors.shadow} ${colors.transition}
                            hover:opacity-90 w-full
                        "
                    >
                        Add to Cart
                    </button>
                </div>
            `;
        });
        productsHtml += `</div>`;
    }
    return productsHtml;
}

function clearSearch() {
    searchQuery = '';
    document.getElementById('search-input').value = '';
    document.getElementById('mobile-search-input').value = '';
    hideSearchResults();
    renderProductGrid();
    updateBreadcrumb();
}

function renderHomePage() {
    const mainContentArea = document.getElementById('main-content-area');
    mainContentArea.innerHTML = '';

    // Hero Section HTML with the background style added
    const heroSectionHtml = `
        <section id="hero-section" class="relative w-full h-96 bg-cover bg-center flex items-center justify-center text-white" 
                 style="background-image: url('images/banner2.jpg'); background-size: cover; background-position: center;">
            <div class="absolute inset-0 bg-black opacity-50"></div>
            <div class="relative z-10 text-center p-4">
                <h2 class="text-4xl sm:text-5xl font-bold mb-4">Your Daily Essentials, Swiftly Delivered.</h2>
                <p class="text-lg sm:text-xl mb-8">Discover convenience at your fingertips.</p>
                <button onclick="scrollToTrending()" class="${colors.accentPink.split(' ').join(' ')} text-white px-8 py-3 ${colors.rounded} font-semibold ${colors.shadow} ${colors.transition} mr-4">
                    Shop Trending
                </button>
                <button onclick="scrollToProducts()" class="${colors.accentBlue.split(' ').join(' ')} text-white px-8 py-3 ${colors.rounded} font-semibold ${colors.shadow} ${colors.transition}">
                    Browse All
                </button>
            </div>
        </section>
    `;
    mainContentArea.insertAdjacentHTML('beforeend', heroSectionHtml);

    // Add trending section only if we're not searching and showing all products
    if (!searchQuery && currentCategory === 'All Products') {
        mainContentArea.insertAdjacentHTML('beforeend', renderTrendingSection());
    }

    // Append Product Grid below
    mainContentArea.insertAdjacentHTML('beforeend', renderProductGrid());

    // ADDED: Append the contact form section
    mainContentArea.insertAdjacentHTML('beforeend', renderContactFormSection());
}

function renderCartPage() {
    const mainContentArea = document.getElementById('main-content-area');
    mainContentArea.innerHTML = '';

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    let cartHtml = `
        <div class="container mx-auto p-4">
            <h2 class="text-3xl font-bold mb-6 text-center ${colors.primaryDark}">Your Shopping Cart</h2>
    `;

    if (cart.length === 0) {
        cartHtml += `
            <div class="text-center p-8 ${colors.primaryLight} ${colors.rounded} ${colors.shadow} border ${colors.borderBlue} mx-auto max-w-lg">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p class="text-xl ${colors.textMuted} mb-4">Your cart is empty.</p>
                <button
                    onclick="navigateTo('home')"
                    class="
                        ${colors.accentBlue} text-white px-6 py-3 ${colors.rounded}
                        font-semibold ${colors.shadow} ${colors.transition}
                        hover:opacity-90
                    "
                >
                    Continue Shopping
                </button>
            </div>
        `;
    } else {
        cartHtml += `
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <!-- Cart Items -->
                <div class="lg:col-span-2">
                    <div class="bg-white ${colors.rounded} ${colors.shadow} p-6 border ${colors.borderPink}">
                        ${cart.map(item => `
                            <div class="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0">
                                <div class="flex items-center">
                                    <img
                                        src="${item.image}"
                                        alt="${item.name}"
                                        class="w-20 h-20 object-cover ${colors.rounded} mr-4 border ${colors.borderBlue}"
                                        onerror="this.onerror=null;this.src='https://placehold.co/80x80/ffe4e6/000000?text=Img';"
                                    />
                                    <div class="flex-grow">
                                        <h3 class="font-semibold ${colors.primaryDark}">${item.name}</h3>
                                        <p class="${colors.textMuted} text-sm">${item.category}</p>
                                        <p class="${colors.textMuted}">R${item.price.toFixed(2)} each</p>
                                    </div>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex items-center border ${colors.borderBlue} ${colors.rounded}">
                                        <button
                                            onclick="updateQuantity('${item.id}', ${item.quantity - 1})"
                                            class="px-3 py-1 ${colors.accentPink.split(' ').join(' ')} text-white ${colors.rounded} ${colors.transition} hover:opacity-90"
                                        >
                                            -
                                        </button>
                                        <span class="px-3 ${colors.primaryDark}">${item.quantity}</span>
                                        <button
                                            onclick="updateQuantity('${item.id}', ${item.quantity + 1})"
                                            class="px-3 py-1 ${colors.accentPink.split(' ').join(' ')} text-white ${colors.rounded} ${colors.transition} hover:opacity-90"
                                        >
                                            +
                                        </button>
                                    </div>
                                    <div class="text-right">
                                        <div class="font-semibold ${colors.primaryDark}">R${(item.price * item.quantity).toFixed(2)}</div>
                                        <button
                                            onclick="removeFromCart('${item.id}')"
                                            class="text-red-500 hover:text-red-700 ${colors.transition} text-sm mt-1"
                                            title="Remove from cart"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Order Summary -->
                <div class="lg:col-span-1">
                    <div class="bg-white ${colors.rounded} ${colors.shadow} p-6 border ${colors.borderBlue} sticky top-24">
                        <h3 class="text-xl font-bold mb-4 ${colors.primaryDark}">Order Summary</h3>
                        <div class="space-y-2 mb-4">
                            <div class="flex justify-between">
                                <span class="${colors.textMuted}">Items (${totalItems})</span>
                                <span class="${colors.primaryDark}">R${totalPrice.toFixed(2)}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="${colors.textMuted}">Shipping</span>
                                <span class="text-green-600">${totalPrice >= 450 ? 'Free' : 'R69.99'}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="${colors.textMuted}">Tax</span>
                                <span class="${colors.primaryDark}">R${(totalPrice * 0.08).toFixed(2)}</span>
                            </div>
                            <hr class="my-2">
                            <div class="flex justify-between font-bold text-lg">
                                <span class="${colors.primaryDark}">Total</span>
                                <span class="${colors.secondaryDark}">R${(totalPrice * 1.08 + (totalPrice >= 450 ? 0 : 69.99)).toFixed(2)}</span>
                            </div>
                        </div>
                        <button
                            onclick="showNotification('Proceeding to checkout! (This is a demo)', 'success'); clearCart();"
                            class="
                                ${colors.accentBlue.split(' ').join(' ')} text-white px-6 py-3 ${colors.rounded}
                                font-semibold ${colors.shadow} ${colors.transition}
                                hover:opacity-90 w-full mb-3
                            "
                        >
                            Proceed to Checkout
                        </button>
                        <button
                            onclick="navigateTo('home')"
                            class="
                                bg-gray-200 text-gray-700 px-6 py-3 ${colors.rounded}
                                font-semibold ${colors.transition}
                                hover:bg-gray-300 w-full mb-2
                            "
                        >
                            Continue Shopping
                        </button>
                        <button
                            onclick="clearCart()"
                            class="
                                bg-red-100 text-red-700 px-6 py-3 ${colors.rounded}
                                font-semibold ${colors.transition}
                                hover:bg-red-200 w-full text-sm
                            "
                        >
                            Clear Cart
                        </button>
                        
                        <!-- Disclaimer Section -->
                        <div class="mt-6 pt-4 border-t border-gray-200">
                            <h4 class="font-semibold text-sm ${colors.primaryDark} mb-2">Order Information:</h4>
                            <ul class="text-xs ${colors.textMuted} space-y-1">
                                <li>• <strong>Delivery:</strong> 3-5 business days (R69.99 fee for orders under R450)</li>
                                <li>• <strong>Returns:</strong> 30-day return policy for unused items in original packaging</li>
                                <li>• By placing an order, you agree to our <a href="#" class="text-blue-600 hover:underline">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    cartHtml += `</div>`;
    mainContentArea.innerHTML = cartHtml;
}

function renderContactPage() {
    const mainContentArea = document.getElementById('main-content-area');
    mainContentArea.innerHTML = `
        <div id="contact-page" class="container mx-auto px-4 py-8">
            <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
                <h2 class="text-3xl font-bold text-blue-800 mb-6 text-center">Contact Us</h2>
                
                <form id="contact-form" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input type="text" id="name" name="name" required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    </div>
                    
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input type="email" id="email" name="email" required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    </div>
                    
                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <input type="text" id="subject" name="subject" required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" name="message" rows="5" required 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                    </div>
                    
                    <div class="flex justify-center">
                        <button type="submit" 
                            class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition">
                            Send Message
                        </button>
                    </div>
                </form>
                
                <div id="form-success" class="hidden mt-6 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                    Thank you for your message! We'll get back to you soon.
                </div>
            </div>
            
            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="text-xl font-semibold text-blue-800 mb-4">Our Location</h3>
                    <div class="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p>123 Shopping Street<br>Johannesburg, 2000<br>South Africa</p>
                    </div>
                </div>
                
                <div class="bg-white p-6 rounded-xl shadow-md">
                    <h3 class="text-xl font-semibold text-blue-800 mb-4">Contact Information</h3>
                    <div class="space-y-3">
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>support@swiflyfare.com</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>084 123 4567</span>
                        </div>
                        <div class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    
    // Handle contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success message
        document.getElementById('form-success').classList.remove('hidden');
        
        // Reset form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            document.getElementById('form-success').classList.add('hidden');
        }, 5000);
    });
}

// --- Navigation Function ---

function navigateTo(page) {
    currentPage = page;
    if (currentPage === 'home') {
        document.getElementById('main-navbar').classList.remove('hidden');
        renderHomePage();
    } else if (currentPage === 'cart') {
        document.getElementById('main-navbar').classList.add('hidden');
        renderCartPage();
    } else if (currentPage === 'contact') {
        document.getElementById('main-navbar').classList.add('hidden');
        renderContactPage();
    }
    updateCartUI();
    updateBreadcrumb();
}

// --- Scroll Functions ---

function scrollToProducts() {
    const productListTitle = document.getElementById('product-list-title');
    if (productListTitle) {
        productListTitle.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTrending() {
    const trendingSection = document.getElementById('trending-section');
    if (trendingSection) {
        trendingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        navigateTo('home');
        setTimeout(() => {
            const section = document.getElementById('trending-section');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
}

// --- Initialization ---

function initApp() {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    renderNavbar();
    navigateTo('home');
    
    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (isMobileNavOpen && !e.target.closest('#mobile-nav') && !e.target.closest('button[onclick="toggleMobileNav()"]')) {
            toggleMobileNav();
        }
    });
}

// Run initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);
