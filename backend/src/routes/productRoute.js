const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Create a new product
router.post('/add', productController.createProduct);

// Get all products
router.get('/all', productController.getAllProducts);

module.exports = router;
