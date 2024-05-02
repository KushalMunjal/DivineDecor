const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import cors
const bookMurtiRoutes = require('./src/routes/bookMurtiRoute');
const errorHandler = require('./src/middlewares/errorHandler');
const authRoutes = require('./src/routes/authRoute');
const productRoutes= require('./src/routes/productRoute');

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
// Middleware
app.use(express.json());

// Routes
app.use('/api', bookMurtiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
