const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample product data
const products = [
    { id: 1, price: 25 },
    { id: 2, price: 50 },
    { id: 3, price: 100 },
    { id: 4, price: 250 },
    { id: 5, price: 500 },
    { id: 6, price: 1000 },
    { id: 7, price: 2000 },
    { id: 8, price: 3000 },
    { id: 9, price: 4000 },
    { id: 10, price: 5000 },
];

// Endpoint to get products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Endpoint to handle checkout (simulated)
app.post('/api/checkout', (req, res) => {
    const { cart } = req.body;
    // Here you would typically process the payment
    // For now, we'll just return a success message
    res.json({ message: 'Checkout successful!', cart });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
