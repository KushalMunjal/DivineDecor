const express = require('express');
const { createProduct, getAllProducts } = require('../controllers/productController');
const { upload } = require("./upload");
const { postImage } = require("../controllers/imageController");

const router = express.Router();

// Route to create a new product
router.post('/add', createProduct);

// Route to get all products
router.get('/all', getAllProducts);



module.exports = router;
