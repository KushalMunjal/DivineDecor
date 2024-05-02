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

// Load environment variables
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
// Middleware
app.use(express.json());
app.set("view engine", "ejs");

//Image test mongodb
var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });
 
app.get('/api/products/all', (req, res) => {
    imgSchema.find({})
    .then((data, err)=>{
        if(err){
            console.log(err);
        }
        res.render('imagepage',{items: data})
    })
});
 
 
app.post('/api/products/add', upload.single('image'), (req, res, next) => {
 
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgSchema.create(obj)
    .then ((err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/api/products/add');
        }
    });
});

// Routes
app.use('/api', bookMurtiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
