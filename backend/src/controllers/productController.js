const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ message: 'Error fetching products' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const latestProduct = await Product.findOne().sort({ productId: -1 });
    const newProductId = latestProduct ? latestProduct.productId + 1 : 1;

    const { category, name, price, imageUrl } = req.body;
    const product = new Product({ productId: newProductId, category, name, price, imageUrl });

    const newProduct = await product.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error.message);
    res.status(500).json({ message: 'Error creating product' });
  }
};
