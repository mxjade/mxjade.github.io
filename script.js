const products = [
    { id: 1, price: 25, image: 'images/giftcard_25.png' },
    { id: 2, price: 50, image: 'images/giftcard_50.png' },
    { id: 3, price: 100, image: 'images/giftcard_100.png' },
    { id: 4, price: 250, image: 'images/giftcard_250.png' },
    { id: 5, price: 500, image: 'images/giftcard_500.png' },
    { id: 6, price: 1000, image: 'images/giftcard_1000.png' },
    { id: 7, price: 2000, image: 'images/giftcard_2000.png' },
    { id: 8, price: 3000, image: 'images/giftcard_3000.png' },
    { id: 9, price: 4000, image: 'images/giftcard_4000.png' },
    { id: 10, price: 5000, image: 'images/giftcard_5000.png' },
];

let cart = [];

function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <img src="${product.image}" alt="Gift Card ${product.price} Ksh" />
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

document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to checkout...');
});

renderProducts();
