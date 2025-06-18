// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', () => {
    // Cart functionality
    const cartBtn = document.querySelector('.cart-btn');
    const cartModal = document.getElementById('cartModal');
    const closeCart = document.querySelector('.close-cart');
    const cartItems = document.querySelector('.cart-items');
    const cartCount = document.querySelector('.cart-count');
    const totalAmount = document.querySelector('.total-amount');
    let cart = [];

    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Cart Modal Toggle with animation
    cartBtn.addEventListener('click', () => {
        cartModal.style.display = 'flex';
        // Small delay to ensure display: flex is applied before adding active class
        requestAnimationFrame(() => {
            cartModal.classList.add('active');
        });
    });

    function closeCartModal() {
        cartModal.classList.remove('active');
        setTimeout(() => {
            cartModal.style.display = 'none';
        }, 300); // Match the CSS transition duration
    }

    closeCart.addEventListener('click', closeCartModal);

    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            closeCartModal();
        }
    });

    // Image Carousel Functionality
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    // Initialize first slide
    slides[0].classList.add('active');

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Sample product data
    const products = [
        {
            id: 1,
            name: 'Premium Wireless Headphones',
            price: 199.99,
            image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 2,
            name: 'Smart Fitness Watch',
            price: 299.99,
            image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 3,
            name: 'Portable Bluetooth Speaker',
            price: 149.99,
            image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4,
            name: 'Wireless Earbuds',
            price: 179.99,
            image: 'https://images.unsplash.com/photo-1631867675167-1bb40de11b1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 5,
            name: 'Gaming Mouse',
            price: 89.99,
            image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 6,
            name: 'Mechanical Keyboard',
            price: 129.99,
            image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 7,
            name: '4K Gaming Monitor',
            price: 499.99,
            image: 'https://images.unsplash.com/photo-1616711906333-23e5b6e0aa1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 8,
            name: 'Gaming Laptop',
            price: 1299.99,
            image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 9,
            name: 'Wireless Gaming Controller',
            price: 69.99,
            image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 10,
            name: 'RGB Gaming Chair',
            price: 249.99,
            image: 'https://images.unsplash.com/photo-1610395219791-21b0353e43c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 11,
            name: 'Professional Microphone',
            price: 159.99,
            image: 'https://source.unsplash.com/random/400x300/?microphone'
        },
        {
            id: 12,
            name: 'Webcam HD 1080p',
            price: 79.99,
            image: 'https://source.unsplash.com/random/400x300/?webcam'
        },
        {
            id: 13,
            name: 'External SSD 1TB',
            price: 159.99,
            image: 'https://source.unsplash.com/random/400x300/?ssd,storage'
        },
        {
            id: 14,
            name: 'Graphics Tablet',
            price: 199.99,
            image: 'https://source.unsplash.com/random/400x300/?drawing,tablet'
        },
        {
            id: 15,
            name: 'Smart Home Hub',
            price: 129.99,
            image: 'https://source.unsplash.com/random/400x300/?smart,home'
        }
    ];

    // Load products
    const productsGrid = document.querySelector('.products-grid');
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">
                    <i class="fas fa-cart-plus"></i>
                    Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Add to cart functionality
    productsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart') || e.target.parentElement.classList.contains('add-to-cart')) {
            const button = e.target.classList.contains('add-to-cart') ? e.target : e.target.parentElement;
            const productId = parseInt(button.dataset.id);
            const product = products.find(p => p.id === productId);
            
            if (product) {
                // Check if product is already in cart
                const existingItem = cart.find(item => item.id === productId);
                if (existingItem) {
                    existingItem.quantity = (existingItem.quantity || 1) + 1;
                } else {
                    cart.push({ ...product, quantity: 1 });
                }
                updateCart();
                
                // Show feedback
                button.innerHTML = '<i class="fas fa-check"></i> Added!';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
                }, 2000);
            }
        }
    });

    function updateCart() {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.textContent = totalItems;
        
        if (cart.length === 0) {
            cartItems.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-basket"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h4>${item.name}</h4>
                        <p>$${item.price.toFixed(2)}</p>
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span>${item.quantity || 1}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                        </div>
                        <i class="fas fa-trash remove-item" data-id="${item.id}"></i>
                    </div>
                </div>
            `).join('');

            // Add event listeners for quantity buttons and remove buttons
            document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
                btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 'decrease'));
            });
            document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
                btn.addEventListener('click', () => updateQuantity(parseInt(btn.dataset.id), 'increase'));
            });
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', () => removeFromCart(parseInt(btn.dataset.id)));
            });
        }
        
        const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
        totalAmount.textContent = `$${total.toFixed(2)}`;
    }

    function updateQuantity(productId, action) {
        const itemIndex = cart.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            if (!cart[itemIndex].quantity) cart[itemIndex].quantity = 1;
            
            if (action === 'increase') {
                cart[itemIndex].quantity++;
            } else if (action === 'decrease') {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                } else {
                    removeFromCart(productId);
                    return;
                }
            }
            updateCart();
        }
    }

    function removeFromCart(productId) {
        cart = cart.filter(item => item.id !== productId);
        updateCart();
    }
}); 