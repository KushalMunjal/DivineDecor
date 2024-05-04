// routes/bookMandapRoute.js

const express = require('express');
const { bookMandap, fetchAllMandapBookings } = require('../controllers/bookMandapController');

const router = express.Router();

router.post('/bookMandap', bookMandap);
router.get('/getMandapBookings', fetchAllMandapBookings);

module.exports = router;
