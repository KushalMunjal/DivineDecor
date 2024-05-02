const Product = require('../models/Product');
const multer = require('multer');
const { postImage } = require('./imageController');

// Multer configuration for storing images in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Controller to create a new product with image upload
exports.createProduct = async (req, res) => {
  try {
    // Extract product details from the request body
    const { name, category, price } = req.body;
    
    // Check if there's an image file in the request
    if (!req.file) {
      return res.status(400).json({ message: "Image file is required" });
    }

    // Create new product instance with extracted details
    const product = new Product({ name, category, price });

    // If an image file is present, store its data in the product document
    product.imageData = {
      data: req.file.buffer, // Assuming multer middleware stores the file buffer
      contentType: req.file.mimetype
    };

    // Save the product to MongoDB
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// Controller to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
