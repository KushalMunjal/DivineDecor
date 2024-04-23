const express = require('express');
const { bookMurti } = require('../controllers/bookMurtiController');

const router = express.Router();

router.post('/book-murti', bookMurti);

module.exports = router;
