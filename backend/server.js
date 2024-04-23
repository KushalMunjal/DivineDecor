const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors'); // Import cors
const bookMurtiRoutes = require('./src/routes/bookMurtiRoute');
const errorHandler = require('./src/middlewares/errorHandler');

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

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
