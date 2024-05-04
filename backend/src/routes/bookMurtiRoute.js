const express = require('express');
const { bookMurti, getMurtis } = require('../controllers/bookMurtiController');

const router = express.Router();

router.post('/bookMurti', bookMurti);
router.get('/getMurtiBookings', getMurtis);

module.exports = router;
