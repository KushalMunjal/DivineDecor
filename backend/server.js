const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import cors
const bookMurtiRoutes = require('./src/routes/bookMurtiRoute');
const errorHandler = require('./src/middlewares/errorHandler');
const authRoutes = require('./src/routes/authRoute');
const productRoutes= require('./src/routes/productRoute');
var imgSchema = require('./src/models/Image');
var fs = require('fs');
var path = require('path');
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// Load environment variables
require('dotenv').config();


const app = express();
app.use(cors());

// Connect to MongoDB
connectDB();


// Middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static('uploads'));



// Routes
app.use('/api', bookMurtiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// checkout api
app.post("/api/create-checkout-session", async (req, res) => {
    const { product } = req.body;
    const lineItems = product.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
          images: [product.imageUrl],
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5000/success",
      cancel_url: "http://localhost:5000/cancel",
    });
  
    res.json({ id: session.id });
  });
  


// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
