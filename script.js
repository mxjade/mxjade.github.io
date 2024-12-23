let cart = [];

// Fetch products from the backend
async function fetchProducts() {
    const response = await fetch('http://localhost:3000/api/products');
    const products = await response.json();
    renderProducts(products);
}

function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="images/giftcard_${product.price}.png" alt="Gift Card ${product.price} Ksh" />
            <p>${product.price} Ksh</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.price} Ksh`;
        cartItems.appendChild(li);
        total += item.price;
    });
    document.getElementById('total-price').textContent = total;
}

document.getElementById('checkout').addEventListener('click', async () => {
    const response = await fetch('http://localhost:3000/api/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart }),
    });
    const result = await response.json();
    alert(result.message);
});

// Fetch products on page load
fetchProducts();
