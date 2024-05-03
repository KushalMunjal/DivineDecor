const Product = require('../models/Product');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

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

    // Read image file and store its data in the product document
    // const imageData = fs.readFileSync(req.file.path);
    const imageData = fs.readFileSync(req.file.path, { encoding: 'base64' });
    // Create new product instance with extracted details
    const product = new Product({ name, category, price, image: imageData });

    // Save the product to MongoDB
    const newProduct = await product.save();

    // Delete the temporary file after reading
    fs.unlinkSync(req.file.path);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get all products along with image display functionality
exports.getAllProducts = async (req, res) => {
  try {
    // Find all products
    const products = await Product.find();

    // Render the image page with products data
    res.render('imagepage', { items: products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Multer configuration for product image upload
const productImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'product_images');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const productImageUpload = multer({ storage: productImageStorage });

// Middleware for uploading product image and creating a product
exports.uploadProductImageAndCreateProduct = (req, res, next) => {
  productImageUpload.single('image')(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred
      return res.status(400).json({ message: err.message });
    } else if (err) {
      // An unknown error occurred
      return res.status(500).json({ message: err.message });
    }
    // No error occurred, continue to create the product
    next();
  });
};
