// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Shopping cart sidebar functionality
const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');

cartIcon.addEventListener('click', () => {
    cartSidebar.classList.add('open');
});

closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Product filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const productGrid = document.querySelector('.product-grid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        const products = productGrid.querySelectorAll('.product-card');

        products.forEach(product => {
            if (filter === 'all' || product.classList.contains(filter)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});

// Add to cart functionality
const cartItemsContainer = document.querySelector('.cart-items');
const cartCount = document.querySelector('.cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');

let cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} (x${item.quantity})</p>
            <p>Ksh${item.price * item.quantity}</p>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartCount.textContent = cart.length;
    cartTotalPrice.textContent = `Ksh${total.toFixed(2)}`;
}

// Jacket (replace with dynamic data)
const Jacket = {
    id: 1,
    name: 'Men\'s jacket',
    price: 1500
};

// usage of addToCart
document.querySelector('.btn').addEventListener('click', () => {
    addToCart(Jacket);
});